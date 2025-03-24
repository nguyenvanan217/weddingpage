import { ColumnsPhotoAlbum, RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import usePhotos from "./photos";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heart from "../../assets/heart.png";
import heartPreview from "../../assets/heart-preview.png";
gsap.registerPlugin(ScrollTrigger);

export default function Album() {
  const albumRef = useRef(null);
  const photos = usePhotos();

  useEffect(() => {
    if (!albumRef.current) return;

    // Animation cho tiêu đề
    gsap.fromTo(
      ".title-container",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".title-container",
          start: "top 80%", // Khi tiêu đề cách top 80% viewport
          toggleActions: "play none none none", // Chạy 1 lần khi xuất hiện
        },
      }
    );

    //Animation icon bottom
    gsap.fromTo(
      ".icon-bottom",
      { rotation: -10 }, // Góc ban đầu
      {
        rotation: 10,
        duration: 0.1,
        repeat: 5, // Lặp lại 5 lần
        yoyo: true, // Đảo ngược lại
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: '.icon-bottom',
          start: "top 80%", // Kích hoạt khi ảnh chạm 80% màn hình
          toggleActions: "play none none none",
        },
      }
    );

    // Dùng MutationObserver để chờ đến khi ảnh xuất hiện
    const observer = new MutationObserver(() => {
      const images = albumRef.current.querySelectorAll("img");
      if (images.length > 0) {
        observer.disconnect(); // Ngừng theo dõi khi đã tìm thấy ảnh
        runGsapAnimation(images);
      }
    });

    observer.observe(albumRef.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const runGsapAnimation = (images) => {
    images.forEach((img, index) => {
      const columnIndex = index % 4;
      const direction = columnIndex < 2 ? -100 : 100;

      gsap.fromTo(
        img,
        { x: direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 py-4 title-container">
        <h1
          className="text-4xl md:text-5xl text-center font-normal"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontStyle: "italic",
            maxWidth: "80%",
            paddingBottom: "0.5rem",
          }}
        >
          Album ảnh cưới
        </h1>
        <span className="h-[1px] bg-black flex-1"></span>
        <img src={heart} alt="heart" className="w-8 h-8" />
      </div>
      <div ref={albumRef}>
        <ColumnsPhotoAlbum
          photos={photos}
          spacing={5}
          breakpoints={[768, 1024]}
          columns={(containerWidth) => {
            if (containerWidth < 768) return 2;
            if (containerWidth < 1024) return 4;
            return 4;
          }}
        />
      </div>
      <div className="flex items-center justify-between gap-2 py-2">
        <img src={heartPreview} alt="" className="w-16 sm:w-24 object-cover icon-bottom" />
        <img
          src={heartPreview}
          alt=""
          className="w-16 sm:w-24 object-cover -scale-x-100 opacity-25"
        />
        <img src={heartPreview} alt="" className="w-16 sm:w-24 object-cover icon-bottom" />
      </div>
    </>
  );
}
