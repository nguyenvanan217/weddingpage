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
    const timeout = setTimeout(() => {
      const images = albumRef.current.querySelectorAll("img");
      images.forEach((img, index) => {
        const columnIndex = index % 4; // Chia cột

        // Xác định hướng animation
        const direction = columnIndex < 2 ? -100 : 100;

        gsap.fromTo(
          img,
          { x: direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "bottom 20%",
            },
          }
        );
      });
      return () => clearTimeout(timeout);
    }, 1000);
  }, []);
  return (
    <>
      <div className="flex items-center justify-center gap-2 py-4">
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
        <img src={heartPreview} alt="" className="w-16 sm:w-24 object-cover" />
        <img
          src={heartPreview}
          alt=""
          className="w-16 sm:w-24 object-cover -scale-x-100 opacity-25"
        />
        <img src={heartPreview} alt="" className="w-16 sm:w-24 object-cover" />
      </div>
    </>
  );
}
