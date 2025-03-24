import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    // Animation cho tiêu đề
    gsap.fromTo(
      ".title-footer",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".title-footer",
          start: "top 100%", // Khi tiêu đề cách top 80% viewport
          toggleActions: "play none none none", // Chạy 1 lần khi xuất hiện
        },
      }
    );
  }, [])
  return (
    <div className="relative h-[600px]">
      <img
        src="https://tonywedding.vn/wp-content/uploads/2024/11/462142930_960299022805312_2040105690201559005_n-1536x1024.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-20 transition-all duration-300">
        <div
          className=" absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 bg-white bg-opacity-50 flex flex-col justify-center items-center leading-[35px]"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          <h1 className="text-5xl sm:text-7xl title-footer">Thank you</h1>
          <h3 className="italic text-2xl sm:text-4xl title-footer">Rất hân hạnh được đón tiếp</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
