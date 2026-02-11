"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0f] border-t border-[#262636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#hero"
              className="text-2xl font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              George.dev
            </motion.a>
            <p className="text-gray-500 text-sm">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras.
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-[#262636] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} George.dev. Hecho con
            <Heart size={14} className="text-[#ff00ff] fill-[#ff00ff]" />
            y mucho café.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#00d4ff] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-[#00d4ff] transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
