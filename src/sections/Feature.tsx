"use client";
import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import imageFeature1 from "../../public/assets/images/Featured-Solution-images/datacenter_floor_plan.webp";
import imageFeature2 from "../../public/assets/images/Featured-Solution-images/server-room-layout-isometric.webp";
import imageFeature3 from "../../public/assets/images/Featured-Solution-images/IT-room-design-3D-visualization.webp";
import { useState } from "react";
import ArrowRightBlackIcon from "../../public/assets/icons/ArrowRightBlackIcon";
import ArrowLeftBlackIcon from "../../public/assets/icons/ArrowLeftBlackIcon";
import { ArrowRightLongIcon } from "../../public/assets/icons/ArrowRightLongIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

type FeatureProps = {
  tag: string;
  title: string;
  description: string;
  button: string;
};

const images = [
  { src: imageFeature1, alt: "Datacenter infrastructure — racks and cooling" },
  { src: imageFeature2, alt: "Server and storage deployment" },
  { src: imageFeature3, alt: "Power and UPS systems for data centers" },
];

export default function Feature({
  tag,
  title,
  description,
  button,
}: FeatureProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-center">
          <div className="flex flex-col">
            <Tag>{tag}</Tag>
            <h3 className="mt-8 text-text-blackPrimary text-h3 font-medium">
              {title}
            </h3>
            <p className="mt-3 text-text-blackSecondary text-body1">
              {description}
            </p>
            <div className="mt-6">
              <Link href={`/${currentLocale}/solutions`}>
                <Button
                  variant="tertiary"
                  icon={<ArrowRightLongIcon />}
                  iconPosition="right"
                >
                  {button}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-[530px] flex flex-col gap-4">
              <div className="w-full md:h-[348px] mx-auto bg-gradientPrimary rounded-3xl">
                <div className="flex items-center justify-center p-10">
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full md:w-[382px] object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>{`${currentIndex + 1}/${images.length}`}</span>
                <div className="flex items-center gap-3">
                  <Button
                    variant="secondary"
                    icon={<ArrowLeftBlackIcon />}
                    className="border border-tertiary-200"
                    onClick={prevImage}
                  />
                  <Button
                    variant="secondary"
                    icon={<ArrowRightBlackIcon />}
                    className="border border-tertiary-200"
                    onClick={nextImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
