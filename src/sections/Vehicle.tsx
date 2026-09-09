import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import VehicleCard from "@/components/VehicleCard";
import imgCabling from "../../public/assets/images/solution-images/product-photos-of-patch-panels.webp";
import imgDatacenter from "../../public/assets/images/solution-images/servers.webp";
import imgCctv from "../../public/assets/images/solution-images/cctv-cameras.webp";
import imgUps from "../../public/assets/images/solution-images/UPS.webp";
import imgWireless from "../../public/assets/images/solution-images/WiFi-APs.webp";
import imgFiber from "../../public/assets/images/solution-images/fiber-optics.webp";
import { useTranslations } from "next-intl";

const solutionImages = [
  imgCabling,    // Structured Cabling
  imgDatacenter, // Datacenter Solutions
  imgCctv,       // CCTV & Video Surveillance
  imgUps,        // UPS
  imgWireless,   // Wireless Communication & LTE
  imgFiber,      // Fiber Optic
];

export default function Vehicle() {
  const t = useTranslations("Vehicle");

  return (
    <section id="solutions">
      <DashedBorderContainer showTop={false}>
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

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {solutionImages.map((imageSrc, index) => (
              <VehicleCard
                key={index}
                imageSrc={imageSrc}
                title={t(`solutions.${index}.title`)}
                description={t(`solutions.${index}.description`)}
              />
            ))}
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
