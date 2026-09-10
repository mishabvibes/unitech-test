import DashedBorderContainer from "@/components/DashedBorderContainer";
import Image from "next/image";
import vectorFooterImage from "../../public/assets/images/vector-footer.webp";
import logo from "../../public/assets/images/logo.svg";
import linkedinIcon from "../../public/assets/images/linkedin-icon.svg";
import { useTranslations } from "next-intl";

const footerLinks = [
  {
    key: "Solutions",
    links: ["StructuredCabling", "DatacenterSolutions", "CCTV", "UPS", "Wireless", "FiberOptic"],
  },
  {
    key: "Partners",
    links: ["BecomePartner"],
  },
  {
    key: "About",
    links: ["CompanyProfile", "ProductCatalogue"],
  },
  {
    key: "Contact",
    links: [],
  },
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative">
      <DashedBorderContainer showBottom={false} className="!pb-6 lg:!pb-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10">
          <div className="hidden lg:flex items-start gap-6 md:gap-10">
            <div>
              <Image src={logo} alt="Unitech Distribution logo" className="size-14" />
            </div>
            <div>
              <h2 className="w-full md:w-56 text-h4 md:text-h2 text-primary-500 font-semibold">
                {t("UnitechDistribution")}
              </h2>
              <div className="mt-4 md:mt-6">
                <p className="text-body4 text-text-blackSecondary">
                  <span>{t("Address")}</span>
                </p>
                <p className="text-body4 text-text-blackSecondary mt-1">
                  <a href="tel:+971504243288" className="hover:text-primary-500 transition-colors">
                    {t("Phone")}
                  </a>
                  {" · "}
                  <a href="mailto:info@unitechdistribution.com" className="hover:text-primary-500 transition-colors">
                    {t("Email")}
                  </a>
                </p>
                <p className="text-body4 text-text-blackSecondary mt-1">
                  {t("OfficeHours")}
                </p>
              </div>
              <div className="mt-4 md:mt-5">
                <p className="text-body4 text-text-blackSecondary">
                  <span>{t("Copyright")}</span>{" "}
                  <span>{t("CopyrightCompany")}</span>
                </p>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="size-4"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-full lg:justify-end">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 items-start gap-x-6 gap-y-10 lg:gap-10">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="font-medium text-text-blackPrimary mb-4">
                    {t(`Links.${section.key}`)}
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="block text-body4 text-tertiary-700"
                      >
                        {t(`Links.${link}`)}
                      </a>
                    ))}
                    {/* Show contact info directly in Contact column */}
                    {section.key === "Contact" && (
                      <>
                        <a
                          href="tel:+971504243288"
                          className="block text-body4 text-tertiary-700 hover:text-primary-500 transition-colors"
                        >
                          {t("Phone")}
                        </a>
                        <a
                          href="mailto:info@unitechdistribution.com"
                          className="block text-body4 text-tertiary-700 hover:text-primary-500 transition-colors"
                        >
                          {t("Email")}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashedBorderContainer>
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <Image src={vectorFooterImage} alt="Decorative footer background" className="w-full h-full object-cover object-bottom" draggable="false" />
      </div>
    </footer>
  );
}
