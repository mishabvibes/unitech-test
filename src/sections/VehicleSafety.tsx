import DashedBorderContainer from "@/components/DashedBorderContainer";
import VehicleSafetyCard from "@/components/VehicleSafetyCard";
import React from "react";
import vehicleSafetyImage1 from "../../public/assets/images/vehicle-safety-card-image1.png";
import vehicleSafetyImage2 from "../../public/assets/images/vehicle-safety-card-image2.png";
import vehicleSafetyImage3 from "../../public/assets/images/vehicle-safety-card-image3.png";
import vehicleSafetyImage4 from "../../public/assets/images/vehicle-safety-card-image4.png";
import vehicleSafetyImage5 from "../../public/assets/images/vehicle-safety-card-image5.png";
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
