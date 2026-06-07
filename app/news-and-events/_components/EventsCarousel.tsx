"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "UDUMSA Medical Outreach",
    date: "July 05 - July 10",
    location: "Sokoto Central",
    image: "/event-7.png",
  },
  {
    id: 2,
    title: "UDUMSA Annual Health Week",
    date: "August 12 - August 18",
    location: "Argungu, Kebbi state",
    image: "/event-7.png",
  },
  {
    id: 3,
    title: "Scientific Conference",
    date: "Sept 20 - Sept 22",
    location: "UDUS Auditorium",
    image: "/event-7.png",
  },
  {
    id: 4,
    title: "Sports Competition",
    date: "Oct 01 - Oct 05",
    location: "University Stadium",
    image: "/event-7.png",
  },
  {
    id: 5,
    title: "Blood Donation Drive",
    date: "Nov 10 - Nov 12",
    location: "Teaching Hospital",
    image: "/event-7.png",
  },
  {
    id: 6,
    title: "Dinner & Awards Night",
    date: "Dec 15 - Dec 16",
    location: "Grand Ballroom",
    image: "/event-7.png",
  },
];

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };
  return (
    <div>
      <div className="flex mt-4 flex-col overflow-hidden rounded-2xl bg-secondary/10 lg:flex-row">
        {/* Image Side */}
        <div className="relative aspect-[1.5] w-full overflow-hidden lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.img
              key={events[currentIndex].id}
              src={events[currentIndex].image}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Content Side */}
        <div className="flex w-full flex-col justify-center p-4 mt-11 lg:w-1/2 md:p-12 lg:p-16">
          {/* Smooth Counter */}
          <div className="flex items-baseline gap-2 text-primary text-5xl md:text-[64px] font-bold">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ y: 20, opacity: 0, filter: "blur(6px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(6px)" }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {currentIndex + 1}
              </motion.span>
            </AnimatePresence>
            <span className="italic">of</span>
            <span>{events.length}:</span>
          </div>

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={events[currentIndex].id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="mt-3 text-lg font-medium text-darkText sm:text-[24px]">
                {events[currentIndex].title}
              </h3>

              {/* Info Boxes */}
              <div className="mt-8 w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
                <motion.div
                  layout
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-[linear-gradient(116.03deg,#DA1C5C_4.6%,#A01E66_97.65%)] p-4 text-center text-white"
                >
                  <Calendar className="mx-auto" size={100} />
                  <p className="text-base mt-4 font-bold">
                    {events[currentIndex].date}
                  </p>
                </motion.div>

                <motion.div
                  layout
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-[linear-gradient(116.03deg,#DA1C5C_4.6%,#A01E66_97.65%)] p-4 text-center text-white"
                >
                  <MapPin className="mx-auto" size={100} />
                  <p className="mt-4 font-bold">
                    {events[currentIndex].location}
                  </p>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="lg:w-fit w-full cursor-pointer rounded-2xl bg-primary px-8 py-4.5 font-medium text-white mt-8"
              >
                Learn more
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="mt-8 flex items-center justify-center lg:justify-end gap-4.5">
        <div className="flex items-center gap-4.5">
          <button
            onClick={prevSlide}
            className="cursor-pointer flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 font-medium text-lg text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <ChevronLeft size={16} />{" "}
            <span className="hidden sm:inline">Prev</span>
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            {events.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 cursor-pointer hover:bg-primary/30 w-2.5 rounded-full transition-all duration-500 border border-secondary ease-out ${
                  idx === currentIndex ? "bg-primary" : ""
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="cursor-pointer flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 font-medium text-lg text-primary transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
