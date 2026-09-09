"use client";

import React from "react";
import Button from "./Button";
import Image, { StaticImageData } from "next/image";
import ArrowRightWhiteIcon from "../../public/assets/icons/ArrowRightWhiteIcon";

interface VehicleCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  description?: string;
}

export default function VehicleCard({ imageSrc, title, description }: VehicleCardProps) {
  return (
    <div className="bg-gradientPrimary hover:bg-gradientPrimaryHover transition-all duration-300 ease-in-out rounded-3xl">
      <div className="flex flex-col px-6 md:px-10 pb-6 md:pb-10 pt-6">
        <div className="flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={`${title} — Unitech Distribution solution`}
            className="w-[254px] h-auto"
            width={254}
            height={254}
            priority
          />
        </div>
        <div className="flex items-center justify-between mt-7">
          <div className="flex flex-col">
            <h4 className="text-h5 md:text-h4 font-medium text-text-blackPrimary">
              {title}
            </h4>
            {description && (
              <p className="text-body3 text-text-blackSecondary mt-1">
                {description}
              </p>
            )}
          </div>
          <Button
            variant="tertiary"
            icon={<ArrowRightWhiteIcon />}
            aria-label={`Learn more about ${title}`}
          />
        </div>
      </div>
    </div>
  );
}
