"use client";

import { motion } from "framer-motion";
import * as Si from "react-icons/si";
import { Skill } from "@/types";
import { cn } from "@/app/lib/utils";

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  // Mapeo de iconos de react-icons
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    SiPython: Si.SiPython,
    SiJavascript: Si.SiJavascript,
    SiTypescript: Si.SiTypescript,
    SiGo: Si.SiGo,
    SiPhp: Si.SiPhp,
    SiRust: Si.SiRust,
    SiMongodb: Si.SiMongodb,
    SiMysql: Si.SiMysql,
    SiMariadb: Si.SiMariadb,
    SiWordpress: Si.SiWordpress,
    SiDrupal: Si.SiDrupal,
    SiReact: Si.SiReact,
    SiNextdotjs: Si.SiNextdotjs,
    SiTailwindcss: Si.SiTailwindcss,
    SiLinux: Si.SiLinux,
    SiSupabase: Si.SiSupabase,
    SiFirebase: Si.SiFirebase,
  };

  const IconComponent = iconMap[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={cn(
        "group flex flex-col items-center gap-2 p-4 rounded-xl bg-[#14141f] border border-[#262636]",
        "hover:border-[#00d4ff]/50 transition-all duration-300 cursor-pointer"
      )}
    >
      <div className="relative">
        {IconComponent && (
          <IconComponent className="w-10 h-10 text-gray-400 group-hover:text-[#00d4ff] transition-colors duration-300" />
        )}
        {/* Glow effect */}
        <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-[#00d4ff]" />
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}
