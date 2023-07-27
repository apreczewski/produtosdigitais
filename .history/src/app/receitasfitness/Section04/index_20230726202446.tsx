"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ButtonCarrossel } from "@/app/components/ButtonCarrossel";

export const Section04 = () => {
  const images = [
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
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
    <div className="relative w-full h-[500px] overflow-hidden">
      <Image
        className="object-cover"
        src={images[currentImageIndex]}
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <ButtonCarrossel icon={faArrowLeft} callback={prev} />
      <ButtonCarrossel icon={faArrowRight} callback={next} />
    </div>
  );
};
