import React from "react";
import ActivityCard from "./ActivityCard";

const activities = [
  {
    title: "Medical Quiz Competitions",
    description:
      "Interactive quiz sessions designed to challenge knowledge, reinforce learning, and promote healthy academic competition among students.",
    image: "/event-1.png",
  },
  {
    title: "Medical Outreach Programs",
    description:
      "Community-focused initiatives delivering health education, screenings, interventions, and basic medical services to improve public health awareness.",
    image: "/event-2.png",
  },
  {
    title: "Lecture Presentations",
    description:
      "Structured academic sessions and group discussions led by experienced professionals to enhance understanding of key medical concepts and practices.",
    image: "/event-3.png",
  },
  {
    title: "Orientation Programs",
    description:
      "Introductory sessions designed to guide new and junior students, helping them adapt to medical school and understand academic expectations.",
    image: "/event-4.png",
  },
  {
    title: "Mentorship Programs",
    description:
      "Supportive networks connecting students with experienced peers, alumni and professionals for guidance, growth, networking, and career development.",
    image: "/event-5.png",
  },
  {
    title: "Social & Networking Events",
    description:
      "Engaging activities that foster connection, relaxation, and a strong sense of community among medical students, alumni, teachers and community.",
    image: "/event-6.png",
  },
];

const Activities: React.FC = () => {
  return (
    <section className="relative w-full bg-primary py-[62px] px-6 md:px-12">
      {/* Background Blurry Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-250 w-250 rounded-full bg-white opacity-30 blur-[120px] z-0"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-[66px] text-center text-white">
          <p className="animate-[scale-up_0.6s_ease-out_0.3s_forwards] inline-block rounded-full border border-white bg-white/10 px-4 py-2.5 text-lg font-medium mb-4">
            Our Activities
          </p>
          <h2 className="animate-[fade-up_0.6s_ease-out_0.3s_forwards] text-3xl text-medium font-montserrat text-nav-white md:text-3xl lg:text-4xl">
            Academic Events and Community Engagement{" "}
            <br className="hidden md:block" /> Activities
          </h2>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((item, index) => (
            <ActivityCard key={index} index={index} activity={item} />
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-20 text-center">
          <button className="hover:scale-[1.05] active:scale-[0.95] rounded-full bg-linear-to-r from-[#E91E63] to-black px-10 py-4 text-lg font-bold text-white shadow-2xl transition-all">
            Explore more activities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Activities;
