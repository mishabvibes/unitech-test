"use client";
import ArrowLeftBlackIcon from "../../public/assets/icons/ArrowLeftBlackIcon";
import ArrowRightBlackIcon from "../../public/assets/icons/ArrowRightBlackIcon";
import Button from "@/components/Button";
import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import userTertimonial1 from "../../public/assets/images/user-testimonial1.svg";
import userTertimonial2 from "../../public/assets/images/user-testimonial2.svg";
import userTertimonial3 from "../../public/assets/images/user-testimonial3.svg";
import partnerLogo1 from "../../public/assets/images/tertimonial-logo1.svg";
import partnerLogo2 from "../../public/assets/images/tertimonial-logo2.svg";
import partnerLogo3 from "../../public/assets/images/tertimonial-logo3.svg";
import { useTranslations } from "next-intl";

const testimonialData = [
  {
    userTestimonialImage: userTertimonial1,
    partnerLogo: partnerLogo1,
  },
  {
    userTestimonialImage: userTertimonial2,
    partnerLogo: partnerLogo2,
  },
  {
    userTestimonialImage: userTertimonial3,
    partnerLogo: partnerLogo3,
  },
];

export default function Testimonial() {
  const t = useTranslations("Testimonial");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div>
          <div>
            <Tag>{t("tag")}</Tag>
          </div>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6">
            <div className="w-full lg:w-[46rem]">
              <span className="text-title font-semibold text-primary-400">
                &ldquo;
              </span>
              <p className="text-h4 text-text-blackPrimary font-medium -mt-6">
                {t(`quotes.${currentIndex}.quote`)}
              </p>
            </div>

            <div className="flex lg:justify-end">
              <div className="flex flex-col">
                <div>
                  {/* [PLACEHOLDER] Replace with real partner/company logos */}
                  <Image
                    src={testimonialData[currentIndex].partnerLogo}
                    alt="Partner company logo"
                  />
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div>
                    {/* [PLACEHOLDER] Replace with real testimonial headshots */}
                    <Image
                      src={testimonialData[currentIndex].userTestimonialImage}
                      alt="Testimonial author"
                      className="size-11"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-body3 text-text-blackPrimary ">
                      {t(`quotes.${currentIndex}.author`)}
                    </h4>
                    <span className="text-body4 text-text-blackSecondary">
                      {t(`quotes.${currentIndex}.position`)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between lg:justify-start gap-7">
            <span>{`${currentIndex + 1}/${testimonialData.length}`}</span>
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                icon={<ArrowLeftBlackIcon />}
                className="border border-tertiary-200"
                onClick={prevTestimonial}
              />
              <Button
                variant="secondary"
                icon={<ArrowRightBlackIcon />}
                className="border border-tertiary-200"
                onClick={nextTestimonial}
              />
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
