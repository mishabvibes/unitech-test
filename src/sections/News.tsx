"use client";

import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import newsImage1 from "../../public/assets/images/Industry-Cards-images/modern-corporate-office-nterior-glass.webp";
import newsImage2 from "../../public/assets/images/Industry-Cards-images/telecom-tower2.webp";
import newsImage3 from "../../public/assets/images/Industry-Cards-images/smart-city2.webp";
import NewsCard from "@/components/NewsCard";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ScrollReveal";

export default function News() {
  const t = useTranslations("News");

  const industriesData = [
    {
      imageSrc: newsImage1,
      imageAlt: "Enterprise and corporate ICT infrastructure",
      category: t("industries.0.category"),
      description: t("industries.0.description"),
      date: t("industries.0.label"),
    },
    {
      imageSrc: newsImage2,
      imageAlt: "Telecom operator fiber and wireless infrastructure",
      category: t("industries.1.category"),
      description: t("industries.1.description"),
      date: t("industries.1.label"),
    },
    {
      imageSrc: newsImage3,
      imageAlt: "Government and public sector ICT projects",
      category: t("industries.2.category"),
      description: t("industries.2.description"),
      date: t("industries.2.label"),
    },
  ];

  return (
    <section>
      <DashedBorderContainer>
        <div>
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <ScrollReveal>
              <div>
                <Tag>{t("tag")}</Tag>
              </div>
            </ScrollReveal>
            <div className="mt-8 flex flex-col gap-3 items-center">
              <ScrollReveal delay={100}>
                <h3 className="text-h3 font-medium text-text-blackPrimary">
                  {t("title")}
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-body1 text-text-blackSecondary text-center">
                  {t("description")}
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-7 mt-10">
            {industriesData.map((industry, index) => (
              <ScrollReveal key={index} delay={200 + index * 100}>
                <NewsCard
                  imageSrc={industry.imageSrc}
                  imageAlt={industry.imageAlt}
                  category={industry.category}
                  description={industry.description}
                  date={industry.date}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
