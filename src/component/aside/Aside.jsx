import React, { useEffect } from 'react';
import './Aside.css';
import chibigroom from '../../assets/groom.png';
import chibibride from '../../assets/bride.png';
import anhcuoinam from '../../assets/anhcuoinam.jpg';
import anhcuoinu from '../../assets/anhcuoinu.jpg';

function Aside() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, observerOptions);

        // Observe both sections
        const brideSection = document.querySelector('.content-bride');
        const groomSection = document.querySelector('.content-groom');

        if (brideSection) observer.observe(brideSection);
        if (groomSection) observer.observe(groomSection);

        return () => {
            if (brideSection) observer.unobserve(brideSection);
            if (groomSection) observer.unobserve(groomSection);
        };
    }, []);

    return (
        <div className="wedding-card">
            <div className="top-section">Một hành trình mới bắt đầu từ hôm nay ...</div>
            <div className="content">
                <div className="content-bride">
                    <div className="bride-section">
                        <h2>Nhà Gái</h2>
                        <div className="parents">
                            <p>Ông Bùi Văn Ninh</p>
                            <p>Bà Phùng Thị Giang</p>
                        </div>
                        <p className="address">Đắk Nia, Thành Phố Gia Nghĩa, Tỉnh Đắk Nông</p>
                        <div className="bride-info">
                            <img src={chibibride} alt="Bride chibi" className="chibi-icon" />
                            <span className="role">Cô Dâu</span>
                            <h3 className="name">Thuỳ Hằng</h3>
                        </div>
                    </div>
                    <div className="bride-img">
                        <img src={anhcuoinu} alt="Bride" />
                    </div>
                </div>

                <div className="content-groom">
                    <div className="groom-section">
                        <h2>Nhà Trai</h2>
                        <div className="parents">
                            <p>Ông Đào Văn Đoàn</p>
                            <p>Bà Trương Lan Anh</p>
                        </div>
                        <p className="address">Tân Đồng, Ea Kênh, Krông Pắk, Đắk Lắk</p>
                        <div className="groom-info">
                            <img src={chibigroom} alt="Groom chibi" className="chibi-icon" />
                            <span className="role">Chú Rể</span>
                            <h3 className="name">Văn Hùng</h3>
                        </div>
                    </div>
                    <div className="groom-img">
                        <img src={anhcuoinam} alt="Groom" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aside;
