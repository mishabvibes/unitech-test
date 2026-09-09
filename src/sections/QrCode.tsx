import DashedBorderContainer from "@/components/DashedBorderContainer";
import Image from "next/image";
import React from "react";
import qrCodeAndroid from "../../public/assets/images/qr-code-android.svg";
import qrCodeIos from "../../public/assets/images/qr-code-ios.svg";
import { useTranslations } from "next-intl";

/* PDF Download Icon — replaces Android/iOS icons */
const PdfDownloadIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 21H17C18.1046 21 19 20.1046 19 19V9.41421C19 8.88378 18.7893 8.37507 18.4142 8L14 3.58579C13.6249 3.21071 13.1162 3 12.5858 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z"
      stroke="#222222"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 11V17M12 17L9 14M12 17L15 14"
      stroke="#222222"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function QrCode() {
  const t = useTranslations("QrCode");
  return (
    <section>
      <DashedBorderContainer showBottom={false}>
        <div>
          <h4 className="text-h4 font-medium text-text-blackSecondary max-w-lg mb-6">
            {t("title")}
          </h4>
        </div>
        <div className="container max-w-xs md:max-w-[44rem] lg:max-w-6xl border-y border-others-santasGray border-dashed"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-3 items-center mt-14">
          <div className="p-3 flex flex-col md:flex-row md:items-center gap-5">
            {/* QR code — [TODO] Update QR code to point to Company Profile PDF URL */}
            <Image src={qrCodeAndroid} alt="QR code for company profile PDF download" className="w-36" />

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 flex items-center justify-center bg-gradientTertiary rounded-lg size-11">
                  <PdfDownloadIcon />
                </div>
                <span className="text-h5 text-text-blackPrimary font-medium">
                  {t("companyProfile.title")}
                </span>
              </div>
              <p className="mt-3 text-body2 text-text-blackSecondary">
                {t("companyProfile.description")}
              </p>
            </div>
          </div>

          <div className="absolute h-72 mt-2 border-x border-others-santasGray border-dashed left-1/2 -translate-x-1/2 hidden lg:block"></div>

          <div className="p-3 flex flex-col md:flex-row md:items-center gap-5">
            {/* QR code — [TODO] Update QR code to point to Product Catalogue PDF URL */}
            <Image src={qrCodeIos} alt="QR code for product catalogue PDF download" className="w-36" />

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="p-2 flex items-center justify-center bg-gradientTertiary rounded-lg size-11">
                  <PdfDownloadIcon />
                </div>
                <span className="text-h5 text-text-blackPrimary font-medium">
                  {t("productCatalogue.title")}
                </span>
              </div>
              <p className="mt-3 text-body2 text-text-blackSecondary">
                {t("productCatalogue.description")}
              </p>
            </div>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
