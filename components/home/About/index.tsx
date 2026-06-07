"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Image configuration
const images = [
  {
    id: 1,
    src: "/image4.jpg",
    alt: "UDUMSA Landmark",
    border: "rounded-tl-[100px] ",
  },
  {
    id: 2,
    src: "/image5.png",
    alt: "Campus greenery",
    border: "rounded-tr-[100px]",
  },
  {
    id: 3,
    src: "/image2.jpg",
    alt: "Building facade",
    border: "rounded-bl-[100px]",
  },
  {
    id: 4,
    src: "/image3.jpg",
    alt: "UDUMSA Monument",
    border: "rounded-br-[100px] ",
  },
];

const About: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-100px)] bg-white lg:py-0 py-16 px-6 flex flex-col justify-center md:px-12 lg:px-24">
      {/* Bottom-left quarter circle */}
      <div className="lg:block hidden absolute bottom-0 left-0 z-0 h-1/2 w-1/2 max-w-lg rounded-tr-full bg-secondary/20"></div>

      <div className="relative z-10 mx-auto flex lg:flex-row flex-col max-w-7xl items-center gap-12 lg:gap-20">
        {/*SECTION TEXT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <div className="flex justify-center lg:justify-start">
            <span className="rounded-full border border-primary bg-secondary/20 px-4 py-2.5 text-lg font-montserrat font-medium text-primary">
              About Us
            </span>
          </div>

          <h2 className="mt-6 mb-6 text-4xl font-semibold font-montserrat text-gray-900 md:text-4xl">
            Where Future Doctors Grow
          </h2>
          <div className="my-12 lg:hidden block">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                },
              }}
              className="grid grid-cols-2 gap-4 relative"
            >
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/30 blur-3xl backdrop-blur-3xl" />

              {images.map((img, index) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  className={`z-10 overflow-hidden ${img.border}`}
                >
                  <Image
                    width={300}
                    height={300}
                    src={img.src}
                    alt={img.alt}
                    className="object-cover aspect-square w-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <p className="text-lg mb-8 text-darkText max-w-[650px]">
            The Usmanu Danfodiyo University Medical Students' Association
            (UDUMSA) is a group of passionate and driven medical students
            dedicated to excellence in training, research, and service. We are
            committed to fostering academic growth, professional development,
            and leadership among our members.
            <br /> Through collaboration, innovation, and community engagement,
            we strive to make a meaningful impact on healthcare delivery while
            preparing future doctors to serve with competence, compassion, and
            integrity.
          </p>

          <Link
            href="/about"
            className="hover:scale-[1.05] active:scale-[0.98] hover:translate-y-[-3px] rounded-2xl font-montserrat bg-primary px-8 py-4.5 font-medium text-white transition-all hover:bg-[#851d50]"
          >
            More About Udumsa
          </Link>
        </motion.div>

        {/* RIGHT SIDE (IMAGES) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            },
          }}
          className="hidden lg:grid grid-cols-2 gap-4 relative"
        >
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/30 blur-3xl backdrop-blur-3xl" />

          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
              className={`z-10 overflow-hidden ${img.border}`}
            >
              <Image
                width={230}
                height={230}
                src={img.src}
                alt={img.alt}
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
