import { CheckCircle2 } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

export default function OurMissionVisionAndValues() {
  return (
    <section className="py-8 md:py-16">
      <div className="flex justify-center">
        <span className="inline-block rounded-full border border-primary bg-secondary/20 px-4 py-2.5 text-lg font-montserrat font-medium text-primary">
          Our Mission, Vision & Values
        </span>
      </div>
      <p className="mt-4 text-center text-2xl md:text-[32px] lg:text-4xl text-black font-montserrat font-medium">
        The foundation that shapes our purpose, direction, and commitment to
        impact.
      </p>
      <div className="grid lg:grid-cols-2 gap-[42px] mt-12 items-center">
        <VideoPlayer />
        <div>
          <div>
            <h3 className="font-montserrat text-lg md:text-2xl text-black font-medium">
              Our Mission
            </h3>
            <p className="md:text-lg font-normal text-black mt-6">
              To promote academic excellence, professional development, and
              community service among medical students.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="font-montserrat text-lg md:text-2xl text-black font-medium">
              Our Vision
            </h3>
            <p className="md:text-lg font-normal text-black mt-6">
              To raise a generation of highly skilled, compassionate, and
              impactful healthcare professionals.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:mt-12">
        <h3 className="font-montserrat text-lg md:text-2xl text-black font-medium">
          Our Core Values
        </h3>
        <p className="md:text-lg font-normal text-black mt-6">
          The principles that guide our actions, shape our culture, and define
          our commitment to excellence in medicine and service.
        </p>
        <ul className="mt-8 space-y-4">
          <li className="text-lg">
            <span className="items-center gap-2 text-secondary font-bold inline-flex pr-1">
              <CheckCircle2 className="fill-secondary text-white" size={18} />
              Excellence
            </span>
            - Striving for the highest standards in medical education
          </li>
          <li className="text-lg">
            <span className="items-center gap-2 text-secondary font-bold inline-flex pr-1">
              <CheckCircle2 className="fill-secondary text-white" size={18} />
              Service
            </span>
            - Commitment to improving community health
          </li>
          <li className="text-lg">
            <span className="items-center gap-2 text-secondary font-bold inline-flex pr-1">
              <CheckCircle2 className="fill-secondary text-white" size={18} />
              Integrity
            </span>
            - Upholding ethical and professional conduct
          </li>
          <li className="text-lg">
            <span className="items-center gap-2 text-secondary font-bold inline-flex pr-1">
              <CheckCircle2 className="fill-secondary text-white" size={18} />
              Leadership
            </span>
            - Developing future leaders in healthcare
          </li>
        </ul>
      </div>
    </section>
  );
}
