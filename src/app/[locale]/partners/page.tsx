"use client";
import { ArrowRightLongIcon } from "../../../../public/assets/icons/ArrowRightLongIcon";
import { PhoneWhiteIcon } from "../../../../public/assets/icons/PhoneWhiteIcon";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import Benefits from "@/sections/Benefits";
import Feature from "@/sections/Feature";
import Help from "@/sections/Help";
import Hero from "@/sections/Hero";
import Testimonial from "@/sections/Testimonial";
import React from "react";

export default function Partners() {
  const t = useTranslations("PartnersPage");

  return (
    <>
      <Hero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundClass="bg-hero-partner-pattern"
      >
        <div className="flex flex-col md:flex-row gap-3 mt-11">
          <a href="mailto:info@unitechdistribution.com">
            <Button
              variant="primary"
              icon={<ArrowRightLongIcon />}
              iconPosition="right"
            >
              {t("buttons.becomePartner")}
            </Button>
          </a>
        </div>
        {/* Spacer to maintain layout balance */}
        <div></div>
      </Hero>
      <Benefits />
      <Feature
        tag={t("feature.tag")}
        title={t("feature.title")}
        description={t("feature.description")}
        button={t("feature.button")}
      />
      <Testimonial />
      <Help
        title={t("help.title")}
        description={t("help.description")}
        backgroundClass="bg-partner-pattern"
      >
        <a href="tel:+971504243288">
          <Button
            variant="primary"
            icon={<PhoneWhiteIcon />}
            iconPosition="right"
          >
            {t("buttons.contactUs")}
          </Button>
        </a>
      </Help>
    </>
  );
}
