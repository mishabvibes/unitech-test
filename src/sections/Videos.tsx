import DashedBorderContainer from "@/components/DashedBorderContainer";
import Image from "next/image";
import thumbnailVideo from "../../public/assets/images/video-image.png";

export default function Videos() {
  return (
    <section>
      <DashedBorderContainer showTop={false}>
        <div className="relative">
          <Image
            src={thumbnailVideo}
            alt="Unitech Distribution — datacenter and structured cabling infrastructure"
            className="w-full md:h-[536px] object-cover xl:rounded-[32px]"
          />
          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent xl:rounded-b-[32px] p-6 md:p-10">
            <p className="text-text-whitePrimary text-body1 font-medium">
              Engineering reliable infrastructure, project after project.
            </p>
          </div>
        </div>
      </DashedBorderContainer>
    </section>
  );
}
