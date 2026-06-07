"use client";
import MedicalEquipmentIcon from "@/app/_components/MedicalEquipmentIcon";
import { motion } from "framer-motion";

interface CardProps {
  index: number;
  title: string;
  description: string;
}

const InfoCard: React.FC<CardProps> = ({ index, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="rounded-2xl bg-white shadow-[0px_4px_4px_0px_#00000040] p-4"
    >
      <div className="mx-auto">
        <div className="flex items-center gap-3">
          <MedicalEquipmentIcon />

          <h3 className="text-lg font-medium text-secondary">
            {title}
          </h3>
        </div>

        <p className="text-base mt-4 leading-[150%] text-darkText md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default InfoCard