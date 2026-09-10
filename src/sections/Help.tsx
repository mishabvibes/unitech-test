"use client";

import Image from "next/image";
import bulletIcon from "../../public/assets/images/bullet-icon.svg";
import ScrollReveal from "@/components/ScrollReveal";

type HelpProps = {
  title: string;
  description: string;
  backgroundClass: string;
  children: React.ReactNode;
};

export default function Help({
  title,
  description,
  backgroundClass,
  children,
}: HelpProps) {
  return (
    <section className="xl:px-7 pb-20" id="contact">
      <ScrollReveal variant="scroll-reveal-fade">
        <div
          className={`relative container lg:px-16 w-full h-[32rem] bg-cover bg-center xl:rounded-[2rem] overflow-hidden ${backgroundClass}`}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full mx-auto max-w-2xl text-center">
            <h1 className="text-text-whitePrimary text-h2 md:text-h1 font-semibold">
              {title}
            </h1>
            <p className="mt-4 text-body1 text-text-whiteSecondary">
              {description}
            </p>
            <div className="flex items-end justify-center w-full mt-8">
              {children}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
