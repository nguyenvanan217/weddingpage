import type { Photo } from "react-photo-album";
import { useState, useEffect } from "react";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const imageUrls = [
  { src: "https://tuart.net/wp-content/uploads/2022/01/269908773_1589108441488553_3656569515718892913_n.jpg", alt: "Purple petaled flowers near a mountain" },
  { src: "https://tuart.net/wp-content/uploads/2022/01/269458020_1589108531488544_5137061146833078053_n.jpg", alt: "A person pointing at a beige map" },
  { src: "https://tuart.net/wp-content/uploads/2022/01/267915224_1589108354821895_1708587972940067243_n.jpg", alt: "A silver and black coffee mug on a brown wooden table" },
  { src: "https://tuart.net/wp-content/uploads/2022/01/270177061_2541293302682192_5456219052033157020_n-1.jpg", alt: "A worm's eye view of trees at night" },
  { src: "https://tuart.net/wp-content/uploads/2022/01/269847021_1589108464821884_6742315870741069743_n.jpg", alt: "A pine tree forest near a mountain at sunset" },
  { src: "https://tuart.net/wp-content/uploads/2022/01/269290494_1589108498155214_7498874220762564654_n.jpg", alt: "A person sitting near a bonfire surrounded by trees" },
  { src: "https://tuart.net/wp-content/uploads/2022/01/270038227_1590377888028275_7378369519155438796_n.jpg", alt: "A person sitting near a bonfire surrounded by trees" },
  { src: "https://tuart.net/wp-content/uploads/2022/01/270007076_1590377478028316_2479682634983129752_n.jpg", alt: "A person sitting near a bonfire surrounded by trees" },
];

const getImageSize = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
  });
};

const usePhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photoList = await Promise.all(
        imageUrls.map(async ({ src, alt }) => {
          const { width, height } = await getImageSize(src);
          return {
            src,
            width,
            height,
            srcSet: breakpoints.map((breakpoint) => ({
              src,
              width: breakpoint,
              height: Math.round((height / width) * breakpoint),
            })),
            alt,
          };
        })
      );

      setPhotos(photoList);
    };

    fetchPhotos();
  }, []);

  return photos;
};

export default usePhotos;
