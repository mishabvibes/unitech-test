"use client";
import { ArrowRightLongIcon } from "../../../../public/assets/icons/ArrowRightLongIcon";
import { PhoneWhiteIcon } from "../../../../public/assets/icons/PhoneWhiteIcon";
import Button from "@/components/Button";
import GarageLocation from "@/sections/GarageLocation";
import Help from "@/sections/Help";
import Hero from "@/sections/Hero";
import VehicleSafety from "@/sections/VehicleSafety";
import { useTranslations } from "next-intl";
import React from "react";

export default function Solutions() {
  const tHero = useTranslations("SolutionsPage.Hero");
  const tHelp = useTranslations("SolutionsPage.Help");

  return (
    <>
      <Hero
        title={tHero("title")}
        description={tHero("description")}
        backgroundClass="bg-hero-city-pattern"
      >
        <div className="flex flex-col md:flex-row gap-3 mt-11">
          <a href="mailto:info@unitechdistribution.com">
            <Button
              variant="primary"
              icon={<ArrowRightLongIcon />}
              iconPosition="right"
            >
              {tHero("button")}
            </Button>
          </a>
        </div>
        {/* Spacer to maintain layout balance */}
        <div></div>
      </Hero>
      <GarageLocation />
      <VehicleSafety />
      <Help
        title={tHelp("title")}
        description={tHelp("description")}
        backgroundClass="bg-city-pattern"
      >
        <a href="tel:+971504243288">
          <Button
            variant="primary"
            icon={<PhoneWhiteIcon />}
            iconPosition="right"
          >
            {tHelp("button")}
          </Button>
        </a>
      </Help>
    </>
  );
}
