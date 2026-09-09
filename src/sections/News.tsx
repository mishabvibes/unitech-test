import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import newsImage1 from "../../public/assets/images/news-image1.png";
import newsImage2 from "../../public/assets/images/news-image2.png";
import newsImage3 from "../../public/assets/images/news-image3.png";
import NewsCard from "@/components/NewsCard";
import { useTranslations } from "next-intl";

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
            <div>
              <Tag>{t("tag")}</Tag>
            </div>
            <div className="mt-8 flex flex-col gap-3 items-center">
              <h3 className="text-h3 font-medium text-text-blackPrimary">
                {t("title")}
              </h3>
              <p className="text-body1 text-text-blackSecondary text-center">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-7 mt-10">
            {industriesData.map((industry, index) => (
              <NewsCard
                key={index}
                imageSrc={industry.imageSrc}
                imageAlt={industry.imageAlt}
                category={industry.category}
                description={industry.description}
                date={industry.date}
              />
            ))}
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
