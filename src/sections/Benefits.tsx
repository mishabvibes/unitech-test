"use client";

import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import React from "react";
import CheckCircleIcon from "../../public/assets/icons/CheckCircleIcon";
import vectorBenefit from "../../public/assets/images/vector-benefit.svg";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ScrollReveal";

export default function Benefits() {
  const t = useTranslations("Benefit");
  return (
    <section>
      <DashedBorderContainer>
        <div className="text-center max-w-[37rem] mx-auto">
          <ScrollReveal>
            <div>
              <Tag>{t("tag")}</Tag>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={100}>
              <h3 className="mt-8 text-h3 text-text-blackPrimary font-medium">
                {t("title")}
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-body1 text-text-blackSecondary mt-3">
                {t("description")}
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="relative mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full flex justify-center opacity-60">
            <Image src={vectorBenefit} alt="Decorative background element" className="w-full max-w-4xl object-contain pointer-events-none" draggable="false" />
          </div>
          
          <ScrollReveal delay={200} className="w-full">
            <div className="flex items-center gap-4 lg:gap-5 justify-start md:justify-center">
              <div className="size-10 lg:size-12 flex-shrink-0">
                <CheckCircleIcon />
              </div>
              <span className="text-h6 md:text-h5 font-medium text-text-blackPrimary leading-tight">
                {t("items.competitivePricing")}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="w-full">
            <div className="flex items-center gap-4 lg:gap-5 justify-start md:justify-center">
              <div className="size-10 lg:size-12 flex-shrink-0">
                <CheckCircleIcon />
              </div>
              <span className="text-h6 md:text-h5 font-medium text-text-blackPrimary leading-tight">
                {t("items.technicalSupport")}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} className="w-full">
            <div className="flex items-center gap-4 lg:gap-5 justify-start md:justify-center">
              <div className="size-10 lg:size-12 flex-shrink-0">
                <CheckCircleIcon />
              </div>
              <span className="text-h6 md:text-h5 font-medium text-text-blackPrimary leading-tight">
                {t("items.priorityStock")}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
