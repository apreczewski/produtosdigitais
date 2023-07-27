"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dot, Dots } from "./styles";
// import ImageTest from './image.svg';

export const Section04 = () => {
  const images = [
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prev = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };
  const next = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="relative w-full h-[500px] rounded overflow-hidden">
      <Image
        className="object-cover"
        src={images[currentImageIndex]}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <Dots>
        {images.map((index) => {
          return <Dot key={index}/>
        })}
      </Dots>
      {/* <ImageTest /> */}
    </div>
  );
};
