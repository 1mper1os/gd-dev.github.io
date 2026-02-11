"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { SkillBadge } from "@/app/components/SkillBadge";
import { skills } from "@/app/lib/data";

const categories = {
  languages: "Lenguajes de Programación",
  databases: "Bases de Datos",
  cms: "CMS",
  frontend: "Frontend",
  systems: "Sistemas",
};

export function Skills() {
  return (
    <SectionWrapper id="skills" className="relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-sm font-medium text-[#00d4ff] bg-[#00d4ff]/10 rounded-full border border-[#00d4ff]/20 mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Habilidades & Tecnologías
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologías que domino y utilizo para crear soluciones innovadoras
          </p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-12">
          {Object.entries(categories).map(([category, title], categoryIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#ff00ff]" />
                  {title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBadge key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-[#14141f] to-[#1a1a2e] rounded-2xl border border-[#262636]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                ¿Buscas un desarrollador versátil?
              </h3>
              <p className="text-gray-400">
                Estoy siempre aprendiendo nuevas tecnologías y adaptándome a las necesidades del proyecto.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#ff00ff] text-white font-semibold rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Hablemos de tu proyecto
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
