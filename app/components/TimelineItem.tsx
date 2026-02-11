"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types";
import { cn } from "@/app/lib/utils";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-4 md:gap-8"
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full bg-[#00d4ff] border-2 border-[#0a0a0f] z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
        />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-[#00d4ff] to-[#ff00ff] mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 md:pb-12">
        <motion.div
          className="bg-[#14141f] rounded-xl p-5 md:p-6 border border-[#262636] hover:border-[#00d4ff]/30 transition-all duration-300 group"
          whileHover={{ x: 5 }}
        >
          {/* Period */}
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-[#00d4ff]/20 to-[#ff00ff]/20 text-[#00d4ff] rounded-full mb-3">
            {experience.period}
          </span>

          {/* Company & Position */}
          <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
            {experience.position}
          </h3>
          <p className="text-[#ff00ff] font-medium mb-3">{experience.company}</p>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base mb-4">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-[#262636] text-gray-300 rounded border border-[#262636] hover:border-[#ff00ff]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
