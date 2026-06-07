import { CheckCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import OurMissionVisionAndValues from "./_components/OurMissionVisionAndValues";
import CurrentLeadership from "./_components/CurrentLeadership";

export default function About() {
  return (
    <main className="lg:px-0 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="lg:block hidden absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-0 w-screen aspect-square max-w-[800px] 2xl:max-w-[1000px] rounded-[50%] bg-secondary/10"></div>
      <section className="py-8 md:py-16">
        <div className="xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-[32px] md:text-[48px] text-darkText font-semibold font-montserrat">
              Who we are
            </h1>
            <p className="mt-4 md:text-lg text-darkText max-w-2xl">
              The Usmanu Danfodiyo University Medical Students' Association
              (UDUMSA) is a group of passionate and driven medical students
              dedicated to excellence in training, research, and service. We are
              committed to fostering academic growth, professional development,
              and leadership among our members.
              <br />
              Through collaboration, innovation, and community engagement, we
              strive to make a meaningful impact on healthcare delivery while
              preparing future doctors to serve with competence, compassion, and
              integrity.
            </p>
          </div>
          <div className="relative my-8 grid grid-cols-2 gap-4">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/30 blur-3xl backdrop-blur-3xl" />
            <Image
              src="/image4.jpg"
              alt=""
              width={318}
              height={318}
              className="xl:w-[200px] xl:h-[200px] w-full aspect-square rounded-tl-[100px]"
            />
            <Image
              src="/image5.png"
              alt=""
              width={318}
              height={318}
              className="xl:w-[200px] xl:h-[200px] w-full aspect-square rounded-tr-2xl"
            />
            <Image
              src="/image2.jpg"
              alt=""
              width={318}
              height={318}
              className="xl:w-[200px] xl:h-[200px] w-full aspect-square rounded-bl-2xl"
            />
            <Image
              src="/image3.jpg"
              alt=""
              width={318}
              height={318}
              className="xl:w-[200px] xl:h-[200px] w-full aspect-square rounded-br-[100px]"
            />
          </div>
        </div>

        <p className="text-base text-darkText md:text-lg xl:mt-8">
          As the representative body of medical students within the university,
          UDUMSA serves as a unifying platform that brings together individuals
          with a shared passion for advancing healthcare and making meaningful
          contributions to society. At its core, the association is dedicated to
          fostering an environment that supports both academic and personal
          growth. Through a wide range of structured programs, including
          academic seminars, clinical skill workshops, mentorship initiatives,
          and research-focused activities, UDUMSA equips its members with the
          knowledge and practical competencies required to thrive in the
          ever-evolving field of medicine. Beyond the classroom, the association
          encourages critical thinking, collaboration, and innovation—qualities
          essential for modern healthcare professionals.
          <br /> UDUMSA is equally committed to community engagement and public
          health advancement. The association actively organizes medical
          outreach programs, health awareness campaigns, and initiatives aimed
          at improving access to basic healthcare services. These efforts not
          only contribute to the well-being of underserved communities but also
          provide students with invaluable real-world experience, reinforcing
          the importance of compassion, empathy, and service in medical
          practice. Leadership development is another cornerstone of the
          association. UDUMSA provides numerous opportunities for students to
          take on leadership roles, participate in decision-making processes,
          and develop essential skills such as communication, teamwork, and
          organizational management. Through these experiences, members are
          prepared to become not only competent clinicians but also influential
          leaders capable of driving positive change within the healthcare
          system.
          <br /> Over the years, UDUMSA has built a strong reputation for its
          commitment to excellence and its impactful contributions to both the
          university and the wider community. The association continues to
          evolve, adapting to new challenges and opportunities while remaining
          grounded in its core values of integrity, service, and
          professionalism.
          <br /> More than just an association, UDUMSA represents a مجتمع of
          motivated individuals united by a common goal—to learn, to serve, and
          to shape the future of healthcare. It is a place where students are
          inspired to grow, empowered to lead, and encouraged to make a lasting
          difference in the lives of others.
        </p>
      </section>
      <OurMissionVisionAndValues />
      <CurrentLeadership />
    </main>
  );
}
