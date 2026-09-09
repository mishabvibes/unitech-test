"use client";
import { ArrowRightLongIcon } from "../../../public/assets/icons/ArrowRightLongIcon";
import { PhoneWhiteIcon } from "../../../public/assets/icons/PhoneWhiteIcon";
import Button from "@/components/Button";
import Feature from "@/sections/Feature";
import Help from "@/sections/Help";
import Hero from "@/sections/Hero";
import Mission from "@/sections/Mission";
import News from "@/sections/News";
import Partnership from "@/sections/Partnership";
import Priority from "@/sections/Priority";
import Vehicle from "@/sections/Vehicle";
import Videos from "@/sections/Videos";
import { useTranslations } from "next-intl";


export default function Home() {
  const tHero = useTranslations("HomePage.Hero");
  const tFeature = useTranslations("HomePage.Feature");
  const tHelp = useTranslations("HomePage.Help");

  return (
    <>
      <Hero
        title={tHero("title")}
        description={tHero("description")}
        backgroundClass="bg-hero-pattern"
      >
        <>
          <div className="flex flex-col md:flex-row gap-3 mt-11">
            <a href="#solutions">
              <Button variant="secondary">
                {tHero("buttons.exploreSolutions")}
              </Button>
            </a>
            <a href="tel:+971504243288">
              <Button
                variant="primary"
                icon={<PhoneWhiteIcon />}
                iconPosition="right"
              >
                {tHero("buttons.talkToTeam")}
              </Button>
            </a>
          </div>
          <a href="mailto:info@unitechdistribution.com">
            <Button
              variant="secondary"
              icon={<ArrowRightLongIcon />}
              iconPosition="right"
            >
              {tHero("buttons.requestQuote")}
            </Button>
          </a>
        </>
      </Hero>
      <Mission />
      <Videos />
      <Priority />
      <Vehicle />
      <Feature
        tag={tFeature("tag")}
        title={tFeature("title")}
        description={tFeature("description")}
        button={tFeature("button")}
      />
      <News />
      <Partnership />
      <Help
        title={tHelp("title")}
        description={tHelp("description")}
        backgroundClass="bg-help-pattern"
      >
        <a href="tel:+971504243288">
          <Button
            variant="primary"
            icon={<PhoneWhiteIcon />}
            iconPosition="right"
          >
            {tHelp("button")}
          </Button>
        </a>
      </Help>
    </>
  );
}
