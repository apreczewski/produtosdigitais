"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Section04 = () => {
  const images = [
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <button
        onClick={() =>
          setCurrentImageIndex(
            (currentImageIndex - 1 + images.length) % images.length
          )
        }
        className="absolute top-1/2 left-2 transform -translate-y-1/2"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={() =>
          setCurrentImageIndex((currentImageIndex + 1) % images.length)
        }
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

