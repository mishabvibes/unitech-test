import DashedBorderContainer from "@/components/DashedBorderContainer";
import Tag from "@/components/Tag";
import VehicleCard from "@/components/VehicleCard";
import vehicleImage1 from "../../public/assets/images/vehicle-image1.png";
import vehicleImage2 from "../../public/assets/images/vehicle-image2.png";
import { useTranslations } from "next-intl";

/* 
 * Solution images: Currently using existing placeholder images. 
 * Replace with real product photography when available:
 * - solutions-cabling.png
 * - solutions-datacenter.png
 * - solutions-cctv.png
 * - solutions-ups.png
 * - solutions-wireless.png
 * - solutions-fiber.png
 */
const solutionImages = [
  vehicleImage1, // Structured Cabling
  vehicleImage2, // Datacenter Solutions
  vehicleImage1, // CCTV & Video Surveillance
  vehicleImage2, // UPS
  vehicleImage1, // Wireless Communication & LTE
  vehicleImage2, // Fiber Optic
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
