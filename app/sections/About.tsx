"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Code2, Briefcase, Users, Award } from "lucide-react";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { personalInfo } from "@/app/lib/data";

const stats = [
  { icon: Briefcase, label: "Años de Experiencia", value: personalInfo.stats.yearsExperience },
  { icon: Code2, label: "Proyectos Completados", value: personalInfo.stats.projectsCompleted },
  { icon: Users, label: "Clientes Satisfechos", value: personalInfo.stats.happyClients },
  { icon: Award, label: "Tecnologías", value: personalInfo.stats.technologies },
];

export function About() {
  return (
    <SectionWrapper id="about" className="relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff00ff]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-sm font-medium text-[#00d4ff] bg-[#00d4ff]/10 rounded-full border border-[#00d4ff]/20 mb-4">
            Sobre Mí
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Conóceme mejor
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un desarrollador apasionado por la tecnología y la innovación
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#ff00ff] rounded-3xl blur-2xl opacity-30" />

              {/* Image container */}
              <div className="relative bg-[#14141f] rounded-3xl overflow-hidden border border-[#262636]">
                <Image
                  src="/images/yo.jpg"
                  alt={personalInfo.name}
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Desarrollador Full Stack con pasión por la innovación tecnológica
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {personalInfo.description}
            </p>

            <p className="text-gray-400 leading-relaxed">
              Me especializo en crear aplicaciones web modernas y escalables,
              utilizando las últimas tecnologías y mejores prácticas de la industria.
              Mi objetivo es transformar ideas complejas en soluciones elegantes y funcionales.
            </p>

            {/* Info badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#14141f] rounded-full border border-[#262636]">
                <MapPin size={16} className="text-[#00d4ff]" />
                <span className="text-sm text-gray-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#14141f] rounded-full border border-[#262636]">
                <Mail size={16} className="text-[#ff00ff]" />
                <span className="text-sm text-gray-300">{personalInfo.email}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#14141f] rounded-2xl p-6 border border-[#262636] hover:border-[#00d4ff]/30 transition-all duration-300 text-center group"
            >
              <stat.icon className="w-8 h-8 text-[#00d4ff] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
