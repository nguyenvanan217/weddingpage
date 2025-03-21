import React, { useEffect } from 'react';

const Heart = () => {
    useEffect(() => {
        // Settings
        const settings = {
            particles: {
                length: 3500,
                duration: 2.5,
                velocity: 136,
                effect: -0.95,
                size: 13,
            },
        };

        // Point class
        class Point {
            constructor(x, y) {
                this.x = typeof x !== 'undefined' ? x : 0;
                this.y = typeof y !== 'undefined' ? y : 0;
            }

            clone() {
                return new Point(this.x, this.y);
            }

            length(length) {
                if (typeof length == 'undefined') return Math.sqrt(this.x * this.x + this.y * this.y);
                this.normalize();
                this.x *= length;
                this.y *= length;
                return this;
            }

            normalize() {
                const length = this.length();
                this.x /= length;
                this.y /= length;
                return this;
            }
        }

        // Particle class
        class Particle {
            constructor() {
                this.position = new Point();
                this.velocity = new Point();
                this.acceleration = new Point();
                this.age = 0;
            }

            initialize(x, y, dx, dy) {
                this.position.x = x;
                this.position.y = y;
                this.velocity.x = dx;
                this.velocity.y = dy;
                this.acceleration.x = dx * settings.particles.effect;
                this.acceleration.y = dy * settings.particles.effect;
                this.age = 0;
            }

            update(deltaTime) {
                this.position.x += this.velocity.x * deltaTime;
                this.position.y += this.velocity.y * deltaTime;
                this.velocity.x += this.acceleration.x * deltaTime;
                this.velocity.y += this.acceleration.y * deltaTime;
                this.age += deltaTime;
            }

            draw(context, image) {
                function ease(t) {
                    return --t * t * t + 1;
                }
                const size = image.width * ease(this.age / settings.particles.duration);
                context.globalAlpha = 1 - this.age / settings.particles.duration;
                context.drawImage(image, this.position.x - size / 2, this.position.y - size / 2, size, size);
            }
        }

        // ParticlePool class
        class ParticlePool {
            constructor(length) {
                this.particles = new Array(length);
                this.firstActive = 0;
                this.firstFree = 0;
                this.duration = settings.particles.duration;

                // Create and populate particle pool
                for (let i = 0; i < this.particles.length; i++) {
                    this.particles[i] = new Particle();
                }
            }

            add(x, y, dx, dy) {
                this.particles[this.firstFree].initialize(x, y, dx, dy);

                // Handle circular queue
                this.firstFree++;
                if (this.firstFree === this.particles.length) this.firstFree = 0;
                if (this.firstActive === this.firstFree) this.firstActive++;
                if (this.firstActive === this.particles.length) this.firstActive = 0;
            }

            update(deltaTime) {
                let i;

                // Update active particles
                if (this.firstActive < this.firstFree) {
                    for (i = this.firstActive; i < this.firstFree; i++) {
                        this.particles[i].update(deltaTime);
                    }
                }
                if (this.firstFree < this.firstActive) {
                    for (i = this.firstActive; i < this.particles.length; i++) {
                        this.particles[i].update(deltaTime);
                    }
                    for (i = 0; i < this.firstFree; i++) {
                        this.particles[i].update(deltaTime);
                    }
                }

                // Remove inactive particles
                while (this.particles[this.firstActive].age >= this.duration && this.firstActive !== this.firstFree) {
                    this.firstActive++;
                    if (this.firstActive === this.particles.length) this.firstActive = 0;
                }
            }

            draw(context, image) {
                let i;
                // Draw active particles
                if (this.firstActive < this.firstFree) {
                    for (i = this.firstActive; i < this.firstFree; i++) {
                        this.particles[i].draw(context, image);
                    }
                }
                if (this.firstFree < this.firstActive) {
                    for (i = this.firstActive; i < this.particles.length; i++) {
                        this.particles[i].draw(context, image);
                    }
                    for (i = 0; i < this.firstFree; i++) {
                        this.particles[i].draw(context, image);
                    }
                }
            }
        }

        const initializeCanvas = (canvas) => {
            const context = canvas.getContext('2d');
            const particles = new ParticlePool(settings.particles.length);
            const particleRate = settings.particles.length / settings.particles.duration; // particles/sec
            let time;

            // Get point on heart with -PI <= t <= PI
            const pointOnHeart = (t) => {
                // Get window width to make heart responsive
                const width = window.innerWidth;
                const scale = width < 768 ? 0.6 : 1; // Scale down on mobile

                return new Point(
                    160 * Math.pow(Math.sin(t), 3) * scale,
                    (130 * Math.cos(t) - 50 * Math.cos(2 * t) - 20 * Math.cos(3 * t) - 10 * Math.cos(4 * t) + 25) *
                        scale,
                );
            };

            // Creating the particle image using a dummy canvas
            const createImage = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = settings.particles.size;
                canvas.height = settings.particles.size;

                // Helper function to create the path
                function to(t) {
                    const point = pointOnHeart(t);
                    point.x = settings.particles.size / 2 + (point.x * settings.particles.size) / 800;
                    point.y = settings.particles.size / 2 - (point.y * settings.particles.size) / 800;
                    return point;
                }

                // Create the path
                context.beginPath();
                let t = -Math.PI;
                let point = to(t);
                context.moveTo(point.x, point.y);
                while (t < Math.PI) {
                    t += 0.01;
                    point = to(t);
                    context.lineTo(point.x, point.y);
                }
                context.closePath();
                // Create the fill
                context.fillStyle = '#ea80b0';
                context.fill();

                // Create the image
                const image = new Image();
                image.src = canvas.toDataURL();
                return image;
            };

            const image = createImage();

            // Render function
            function render() {
                requestAnimationFrame(render);

                // Update time
                const newTime = new Date().getTime() / 1000;
                const deltaTime = newTime - (time || newTime);
                time = newTime;

                // Clear canvas
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Create new particles
                const amount = particleRate * deltaTime;
                for (let i = 0; i < amount; i++) {
                    const pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
                    const dir = pos.clone().length(settings.particles.velocity);
                    particles.add(canvas.width / 2 + pos.x, canvas.height / 2 - pos.y, dir.x, -dir.y);
                }

                // Update and draw particles
                particles.update(deltaTime);
                particles.draw(context, image);
            }

            // Handle (re-)sizing of the canvas
            const onResize = () => {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            };
            window.onresize = onResize;

            // Delay rendering to initialize canvas
            setTimeout(() => {
                onResize();
                render();
            }, 10);
        };

        // Initialize when component mounts
        const canvas = document.getElementById('pinkboard');
        if (canvas) {
            initializeCanvas(canvas);
        }

        // Cleanup when component unmounts
        return () => {
            window.onresize = null;
        };
    }, []); // Empty dependency array means this effect runs once on mount

    const heartAnimation = {
        animation: 'heart 1.75s ease infinite',
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                background: 'black',
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                left: 0,
            }}
        >
            <style>
                {`
                    @keyframes heart {
                        0% {
                            transform: translate(-50%, -50%) scale(1.2);
                        }
                        30% {
                            transform: translate(-50%, -50%) scale(0.9);
                        }
                        80% {
                            transform: translate(-50%, -50%) scale(1.0);
                        }
                        100% {
                            transform: translate(-50%, -50%) scale(1.2);
                        }
                    }
                `}
            </style>
            <canvas
                id="pinkboard"
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '100%',
                    height: '100%',
                    ...heartAnimation,
                }}
            />
        </div>
    );
};

export default Heart;
