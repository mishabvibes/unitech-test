type HeroProps = {
  title: string;
  description: string;
  backgroundClass: string;
  children: React.ReactNode;
};

export default function Hero({
  title,
  description,
  backgroundClass,
  children,
}: HeroProps) {
  return (
    <section className="xl:px-7 xl:pt-7">
      <div
        className={`relative container lg:px-16 w-full h-[42.5rem] bg-cover bg-center xl:rounded-[2rem] hero-bg-animate overflow-hidden ${backgroundClass}`}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full mx-auto">
          <h1
            className="text-text-whitePrimary text-h2 md:text-h1 font-semibold mt-20 w-full md:w-[600px] hero-animate"
            style={{ "--hero-delay": "100ms" } as React.CSSProperties}
          >
            {title}
          </h1>
          <p
            className="mt-4 text-body1 text-text-whiteSecondary w-full md:w-[600px] hero-animate"
            style={{ "--hero-delay": "250ms" } as React.CSSProperties}
          >
            {description}
          </p>
          <div
            className="flex items-end justify-between w-full mt-8 hero-animate"
            style={{ "--hero-delay": "400ms" } as React.CSSProperties}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="container max-w-xs md:max-w-[44rem] lg:max-w-6xl pb-10 border-x border-others-santasGray border-dashed"></div>
    </section>
  );
}
