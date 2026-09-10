"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface VehicleCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  description?: string;
}

export default function VehicleCard({ imageSrc, title, description }: VehicleCardProps) {
  return (
    <div className="bg-gradientPrimary hover:bg-gradientPrimaryHover transition-all duration-300 ease-in-out rounded-3xl h-full flex flex-col">
      <div className="flex flex-col h-full justify-between px-6 md:px-10 pb-6 md:pb-10 pt-6">
        <div className="flex items-center justify-center flex-grow">
          <Image
            src={imageSrc}
            alt={`${title} — Unitech Distribution solution`}
            className="w-auto h-auto max-w-[254px]"
            priority
          />
        </div>
        <div className="flex flex-col mt-7">
          <h4 className="text-h5 md:text-h4 font-medium text-text-blackPrimary">
            {title}
          </h4>
          {description && (
            <p className="text-body3 text-text-blackSecondary mt-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
