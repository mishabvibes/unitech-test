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
        <div className="relative mt-14 grid grid-cols-1 lg:grid-cols-3 items-center max-w-4xl mx-auto gap-y-2">
          <div className="absolute -z-10">
            <Image src={vectorBenefit} alt="Decorative background element" />
          </div>
          <ScrollReveal delay={200}>
            <div className="flex items-center gap-2">
              <div className="size-10 flex-shrink-0">
                <CheckCircleIcon />
              </div>
              <span className="text-h4 font-medium text-text-blackPrimary">
                {t("items.competitivePricing")}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex items-center gap-2">
              <div className="size-10 flex-shrink-0">
                <CheckCircleIcon />
              </div>
              <span className="text-h4 font-medium text-text-blackPrimary">
                {t("items.technicalSupport")}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex items-center gap-2">
              <div className="size-10 flex-shrink-0">
                <CheckCircleIcon />
              </div>
              <span className="text-h4 font-medium text-text-blackPrimary">
                {t("items.priorityStock")}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
