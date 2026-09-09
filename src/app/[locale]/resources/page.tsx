"use client";
import { ArrowRightLongIcon } from "../../../../public/assets/icons/ArrowRightLongIcon";
import Button from "@/components/Button";
import Hero from "@/sections/Hero";
import QrCode from "@/sections/QrCode";
import { useTranslations } from "next-intl";
import React from "react";

export default function Resources() {
  const t = useTranslations("ResourcesPage");
  return (
    <>
      <Hero
        title={t("title")}
        description={t("description")}
        backgroundClass="bg-hero-download-pattern"
      >
        <>
          <div className="flex flex-col md:flex-row gap-3">
            {/* [TODO] Replace href with real PDF URLs when available */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                icon={<ArrowRightLongIcon />}
                iconPosition="right"
              >
                {t("companyProfileButton")}
              </Button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                icon={<ArrowRightLongIcon />}
                iconPosition="right"
              >
                {t("productCatalogueButton")}
              </Button>
            </a>
          </div>
          {/* Spacer to maintain layout balance */}
          <div></div>
        </>
      </Hero>
      <QrCode />
    </>
  );
}
