"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "UDUMSA Medical Outreach",
    date: "July 05 - July 10",
    location: "Sokoto Central",
    image: "/event-7.png"
  },
  {
    id: 2,
    title: "UDUMSA Annual Health Week",
    date: "August 12 - August 18",
    location: "Argungu, Kebbi state",
    image: "/event-7.png"
  },
  { id: 3, title: "Scientific Conference", date: "Sept 20 - Sept 22", location: "UDUS Auditorium", image: "/event-7.png" },
  { id: 4, title: "Sports Competition", date: "Oct 01 - Oct 05", location: "University Stadium", image: "/event-7.png" },
  { id: 5, title: "Blood Donation Drive", date: "Nov 10 - Nov 12", location: "Teaching Hospital", image: "/event-7.png" },
  { id: 6, title: "Dinner & Awards Night", date: "Dec 15 - Dec 16", location: "Grand Ballroom", image: "/event-7.png" }
];

const Upcoming: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen w-full bg-[#FFF5F8] px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-[#F8BBD0] bg-[#FCE4EC] px-6 py-2">
            <span className="text-sm font-bold text-[#C2185B]">Upcoming events</span>
          </div>

          <h2 className="mx-auto max-w-4xl text-3xl font-bold text-gray-900 md:text-5xl">
            Be Part of Our Next Events and Activities
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="flex flex-col overflow-hidden rounded-4xl bg-white shadow-2xl md:flex-row">
          
          {/* Image Side */}
          <div className="relative h-64 w-full overflow-hidden md:h-auto md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.img
                key={events[currentIndex].id}
                src={events[currentIndex].image}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Content Side */}
          <div className="flex w-full flex-col justify-center bg-[#FCE4EC]/50 p-8 md:w-1/2 md:p-12 lg:p-16">
            
            {/* Smooth Counter */}
            <div className="mb-4 flex items-baseline gap-2 text-[#9D225E]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -20, opacity: 0, filter: "blur(6px)" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="text-5xl font-black"
                >
                  {currentIndex + 1}
                </motion.span>
              </AnimatePresence>

              <span className="text-3xl font-bold text-[#9D225E]/70">
                of {events.length}:
              </span>
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
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <h3 className="mb-8 text-2xl font-bold text-gray-800 md:text-3xl">
                  {events[currentIndex].title}
                </h3>

                {/* Info Boxes */}
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <motion.div
                    layout
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl bg-[#D81B60] p-6 text-center text-white"
                  >
                    <Calendar className="mx-auto mb-3 h-10 w-10" />
                    <p className="text-sm font-bold leading-tight">
                      {events[currentIndex].date}
                    </p>
                  </motion.div>

                  <motion.div
                    layout
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl bg-[#D81B60] p-6 text-center text-white"
                  >
                    <MapPin className="mx-auto mb-3 h-10 w-10" />
                    <p className="text-sm font-bold leading-tight">
                      {events[currentIndex].location}
                    </p>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-fit rounded-xl bg-[#9D225E] px-8 py-3 font-bold text-white shadow-lg"
                >
                  Learn more
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-12 flex items-center justify-end gap-6">
          <div className="flex items-center gap-6">

            <button 
              onClick={prevSlide}
              className="flex items-center gap-2 rounded-xl border-2 border-[#9D225E] px-6 py-2 font-bold text-[#9D225E] transition-all duration-300 hover:bg-[#9D225E] hover:text-white"
            >
              <ChevronLeft size={20} /> Prev
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {events.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                    idx === currentIndex
                      ? 'w-6 bg-[#9D225E]'
                      : 'w-2.5 bg-[#9D225E]/30'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="flex items-center gap-2 rounded-xl border-2 border-[#9D225E] px-6 py-2 font-bold text-[#9D225E] transition-all duration-300 hover:bg-[#9D225E] hover:text-white"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Upcoming;