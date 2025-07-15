"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/icons/partner1.svg",
  "/icons/partner2.svg",
  "/icons/partner3.svg",
  "/icons/partner4.svg",
  "/icons/partner5.svg",
  "/icons/partner6.svg",
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  const visibleCount = 3;

  // Create extended array for seamless infinite loop
  const extendedImages = [...images, ...images, ...images];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= totalImages) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [totalImages]);

  // Calculate translateX - each image takes up 100/visibleCount% of container width
  const slideWidth = 100 / visibleCount;
  // Start from the middle set of images to allow seamless looping
  const translateX = -((currentIndex + totalImages) * slideWidth);

  return (
    <section className="bg-[#13191d] py-16 px-4 sm:px-8 lg:px-16 rounded-2xl">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h5 className="text-xl sm:text-2xl font-medium text-[#e0e626]">
          Partnered with —
        </h5>

        <p className="text-3xl sm:text-4xl font-mono font-bold mt-2 flex items-center justify-center">
          {/* Circle with “30+” inside */}
          <span className="relative inline-block w-12 h-12 sm:w-14 sm:h-14">
            <Image
              src="/icons/30-round.svg"
              alt="30+"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 3rem, 3.5rem"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
              30+
            </span>
          </span>
          {/* Accompanying text */}
          <span className="ml-4 text-left leading-tight">
            Leading Garment Manufacturers
            <br />
            & Buying Houses
          </span>
        </p>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${translateX}%)`,
            }}
          >
            {extendedImages.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="relative w-24 h-16 mx-auto sm:w-28 sm:h-20">
                  <Image
                    src={src}
                    alt={`Partner ${(index % totalImages) + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 6rem, 7rem"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
