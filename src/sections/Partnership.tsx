"use client";

import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import PartnershipCard from "@/components/PartnershipCard";
import { useTranslations } from "next-intl";
import ArrowRightWhiteIcon from "../../public/assets/icons/ArrowRightWhiteIcon";
import buildingIcon from "../../public/assets/images/building-office-icon.svg";
import userGroupIcon from "../../public/assets/images/user-grup-icon.svg";
import shieldCheckIcon from "../../public/assets/images/shield-check.svg";
import partnershipImage1 from "../../public/assets/images/partners/server-room-cabling-professional.webp";
import partnershipImage2 from "../../public/assets/images/partners/electrical-panel-installation-commercial.webp";
import partnershipImage3 from "../../public/assets/images/partners/network roomcablemanagement.webp";

import ScrollReveal from "@/components/ScrollReveal";

export default function Partnership() {
  const t = useTranslations("Partnership");

  const partnershipData = [
    {
      title: t("partnerships.0.title"),
      subtitle: t("partnerships.0.subtitle"),
      imageSrc: partnershipImage1,
      imageAlt: t("partnerships.0.imageAlt"),
      iconSrc: buildingIcon,
      buttonIcon: <ArrowRightWhiteIcon />,
    },
    {
      title: t("partnerships.1.title"),
      subtitle: t("partnerships.1.subtitle"),
      imageSrc: partnershipImage2,
      imageAlt: t("partnerships.1.imageAlt"),
      iconSrc: userGroupIcon,
      buttonIcon: <ArrowRightWhiteIcon />,
    },
    {
      title: t("partnerships.2.title"),
      subtitle: t("partnerships.2.subtitle"),
      imageSrc: partnershipImage3,
      imageAlt: t("partnerships.2.imageAlt"),
      iconSrc: shieldCheckIcon,
      buttonIcon: <ArrowRightWhiteIcon />,
    },
  ];

  return (
    <section>
      <DashedBorderContainer showTop={false} className="overflow-hidden">
        <div className="flex flex-col">
          <div className="md:max-w-lg">
            <ScrollReveal>
              <div>
                <Tag>{t("tag")}</Tag>
              </div>
            </ScrollReveal>
            <div className="mt-8">
              <ScrollReveal delay={100}>
                <h3 className="text-h3 font-medium text-text-blackPrimary">
                  {t("title")}
                </h3>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-3 text-body1 text-text-blackSecondary">
                  {t("description")}
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className="mt-9">
            <div
              className="mt-6 flex items-stretch gap-7 overflow-x-scroll scrollbar-hide smooth-scroll"
            >
              {partnershipData.map((data, index) => (
                <ScrollReveal key={index} delay={300 + index * 100} className="h-full">
                  <PartnershipCard
                    title={data.title}
                    subtitle={data.subtitle}
                    imageSrc={data.imageSrc}
                    imageAlt={data.imageAlt}
                    iconSrc={data.iconSrc}
                    buttonIcon={data.buttonIcon}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
