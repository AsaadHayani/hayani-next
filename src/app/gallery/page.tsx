"use client";
import { useEffect, useState } from "react";
import { imagesGalley } from "@/app/exports";

interface SliderImgProps {
  id: number;
  src: string;
}

const Page = () => {
  const [sliderData, setSliderData] = useState(imagesGalley[0]);

  const clickImg = (img: SliderImgProps) => setSliderData(img);

  const next = () => {
    const currentIndex = imagesGalley.findIndex((i) => i.id === sliderData.id);
    setSliderData(imagesGalley[(currentIndex + 1) % imagesGalley.length]);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [sliderData]);

  return (
    <div className="my-width mt-4">
      <div className="p-4 border my-border rounded-md text-center">
        <img
          src={sliderData.src}
          alt="Gallery"
          className="mx-auto border-4 my-border rounded-md h-52 object-cover"
        />
        <hr />
        <div className="grid grid-cols-2 md:flex md:justify-evenly gap-4">
          {imagesGalley.map((img) => (
            <div key={img.id}>
              <img
                src={img.src}
                alt="Gallery"
                onClick={() => clickImg(img)}
                className={`cursor-pointer my-border transition-all duration-300 border-2
                ${
                  sliderData.id === img.id
                    ? "border-3 scale-110 rounded-full"
                    : "border-2 hover:scale-110 rounded-md"
                }
              `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
