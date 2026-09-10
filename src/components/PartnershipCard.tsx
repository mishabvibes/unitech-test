import Image, { StaticImageData } from "next/image";
import React from "react";

interface PartnershipCardProps {
  title: string;
  subtitle: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  iconSrc: string;
}

export default function PartnershipCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  iconSrc,
}: PartnershipCardProps) {
  return (
    <div className="relative overflow-hidden w-full h-full bg-gradientTertiary hover:bg-gradientTertiaryHover transition-all duration-300 ease-in-out rounded-[1.75rem] flex flex-col">
      <div className="flex flex-col w-full h-full justify-between gap-6 p-5 md:p-10">
        {/* Header Section */}
        <div className="flex items-start gap-3">
          <Image
            src={iconSrc}
            alt="Icon"
            className="mt-2 w-6 h-6"
            width={24}
            height={24}
          />
          <div>
            <h4 className="text-h5 md:text-h4 text-text-blackPrimary font-medium">
              <span className="text-text-purple1">{title.split(",")[0]}</span>
              {title.split(",")[1] && ` ${title.split(",")[1].trim()}`}
            </h4>
            <p className="text-body3 text-text-blackSecondary mt-2">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative flex justify-center mt-auto w-full">
          {/* Image */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-48 md:h-[220px] object-cover rounded-t-xl -mb-5 md:-mb-10 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
