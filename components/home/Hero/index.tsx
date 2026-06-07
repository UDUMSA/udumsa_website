import React from "react";
import { Users, Heart, BookOpen } from "lucide-react";
import InfoCard from "./InfoCard";
import Link from "next/link";
import InfoCardMobile from "./InfoCardMobile";



const Hero: React.FC = () => {
  const cardData = [
    {
      title: "Academic Excellence",
      description:
        "Supporting students with resources, mentorship, guidance and opportunities to excel in medical education and research.",
      icon: BookOpen,
    },
    {
      title: "Unity & Collaboration",
      description:
        "Building unity, collaboration, and leadership among medical students across all levels through innovative programs.",
      icon: Users,
    },
    {
      title: "Healthcare Impact",
      description:
        "Driving initiatives that improve healthcare awareness, community outreach, and service to humanity.",
      icon: Heart,
    },
  ];

  return (
    <div>
      <div className="hero-background lg:min-h-[calc(100vh-100px)] lg:py-0 py-8 md:py-16 flex flex-col justify-center md:px-12 px-6">
        <main className="w-full mx-auto max-w-7xl">
          <div className="">
            <h1
              className="text-[32px] md:text-[48px] leading-[130%] lg:text-[64px] font-black lg:leading-[150%] font-montserrat text-white animate-[fade-down_0.8s_ease-out_forwards]"
            >
              Usmanu Danfodiyo University
              Medical Students' Association
            </h1>
            <p
              className="mt-6 text-white font-medium text-base md:text-lg lg:text-2xl animate-[fade-down_0.6s_ease-out_0.2s_forwards]"
            >
              Shaping the future of healthcare through excellence, unity, and service.
            </p>

            <div
              className="mt-6 flex flex-wrap gap-[26px] animate-[fade-down_0.6s_ease-out_0.3s_forwards]"
            >
              <a
                href="https://portal.udumsa.com"
                className="rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-white shadow-lg md:px-8 md:py-4.5 md:text-base"
              >
                Membership
              </a>

              <Link
                href="/news-and-events"
                className="rounded-2xl bg-secondary px-6 py-3.5 text-sm font-medium text-white md:px-8 md:py-4.5 md:text-base"
              >
                News & Events
              </Link>
            </div>
          </div>
        </main>

        <section className="mt-16 px-6 pb-10 md:px-16 lg:px-24 lg:block hidden">
          <div className="mx-auto grid max-w-7xl gap-[51px] md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <InfoCard key={index} description={card.description} title={card.title} index={index} />
            ))}
          </div>
        </section>
      </div>
      <div className="bg-white flex lg:hidden md:px-12 px-6 items-center flex-wrap justify-center gap-[25px] py-8">
        {cardData.map((card, index) => (
          <InfoCardMobile key={index} description={card.description} title={card.title} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Hero;