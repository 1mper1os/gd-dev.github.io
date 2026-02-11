"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-white" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-[#0077b5]" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-[#1da1f2]" },
  { name: "Email", icon: Mail, href: "mailto:contacto@alexdev.com", color: "hover:text-[#00d4ff]" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target={social.name !== "Email" ? "_blank" : undefined}
          rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.2, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className={`p-3 rounded-xl bg-[#14141f] border border-[#262636] text-gray-400 ${social.color} transition-all duration-300 hover:border-[#00d4ff]/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]`}
          aria-label={social.name}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </div>
  );
}
