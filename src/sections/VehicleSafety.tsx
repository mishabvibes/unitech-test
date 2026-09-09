import DashedBorderContainer from "@/components/DashedBorderContainer";
import VehicleSafetyCard from "@/components/VehicleSafetyCard";
import React from "react";
import vehicleSafetyImage1 from "../../public/assets/images/trust-section-images/quality-control-testing-electronics.webp";
import vehicleSafetyImage2 from "../../public/assets/images/trust-section-images/CCTV-installation-building-exterior.webp";
import vehicleSafetyImage3 from "../../public/assets/images/trust-section-images/business-meeting-technology-distributor.webp";
import vehicleSafetyImage4 from "../../public/assets/images/trust-section-images/field-engineer-technician-deployment.webp";
import vehicleSafetyImage5 from "../../public/assets/images/trust-section-images/network-design-software-dashboard.webp";
import { useTranslations } from "next-intl";

export default function VehicleSafety() {
  const t = useTranslations("VehicleSafety");

  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div className="flex flex-col items-center gap-24">
          <VehicleSafetyCard
            tag={t("tag")}
            title={t("title1")}
            description={t("desc1")}
            imageSrc={vehicleSafetyImage1}
            imageAlt="Certified ICT products — reliability first"
            textPosition="left"
            imagePosition="right"
          />
          <VehicleSafetyCard
            tag={t("tag")}
            title={t("title2")}
            description={t("desc2")}
            imageSrc={vehicleSafetyImage2}
            imageAlt="Security-grade CCTV and surveillance infrastructure"
            textPosition="right"
            imagePosition="left"
          />
          <VehicleSafetyCard
            tag={t("tag")}
            title={t("title3")}
            description={t("desc3")}
            imageSrc={vehicleSafetyImage3}
            imageAlt="Empowering channel partners and integrators"
            textPosition="left"
            imagePosition="right"
          />
          <VehicleSafetyCard
            tag={t("tag")}
            title={t("title4")}
            description={t("desc4")}
            imageSrc={vehicleSafetyImage4}
            imageAlt="Regional technical expertise and deployment support"
            textPosition="right"
            imagePosition="left"
          />
          <VehicleSafetyCard
            tag={t("tag")}
            title={t("title5")}
            description={t("desc5")}
            imageSrc={vehicleSafetyImage5}
            imageAlt="Data-driven infrastructure design and planning"
            textPosition="left"
            imagePosition="right"
          />
        </div>
      </DashedBorderContainer>
    </section>
  );
}
