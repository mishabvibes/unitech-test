import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import Image from "next/image";
import React from "react";
import globeImage from "../../public/assets/images/globe-image.webp";
import vectorLocationGarage from "../../public/assets/images/vector-location-garage.svg";
import CountryList from "@/components/CountryList";
import { useTranslations } from "next-intl";

export default function GarageLocation() {
  const t = useTranslations("GarageLocation");

  const regionsData = [
    {
      country: t("regions.0.region"),
      cities: [
        t("regions.0.areas.0"),
        t("regions.0.areas.1"),
        t("regions.0.areas.2"),
      ],
    },
    {
      country: t("regions.1.region"),
      cities: [
        t("regions.1.areas.0"),
        t("regions.1.areas.1"),
        t("regions.1.areas.2"),
        t("regions.1.areas.3"),
        t("regions.1.areas.4"),
      ],
    },
  ];

  return (
    <section id="coverage">
      <div className="relative">
        <Image
          src={vectorLocationGarage}
          alt="Decorative background element"
          className="absolute -z-10 left-0 w-full top-52 md:top-72 xl:top-40 2xl:top-0"
        />

        <DashedBorderContainer>
          <div>
            <div className="flex justify-center">
              <Tag>{t("tag")}</Tag>
            </div>
            <div className="w-full flex justify-center mt-6">
              <Image
                src={globeImage}
                alt="Unitech Distribution regional coverage map"
                className="w-full md:max-w-2xl"
              />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <CountryList countries={regionsData.slice(0, 1)} />
            <CountryList countries={regionsData.slice(1)} />
          </div>
          {/*  — Confirm which GCC countries Unitech currently serves */}
        </DashedBorderContainer>
      </div>
    </section>
  );
}
