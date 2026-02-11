"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { BlogCard } from "@/app/components/BlogCard";
import { blogPosts } from "@/app/lib/data";

export function Blog() {
  return (
    <SectionWrapper id="blog" className="relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-sm font-medium text-[#ff00ff] bg-[#ff00ff]/10 rounded-full border border-[#ff00ff]/20 mb-4">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Últimos Artículos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compartiendo conocimientos y experiencias sobre desarrollo y tecnología
          </p>
        </motion.div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View all posts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 text-[#ff00ff] border border-[#ff00ff]/50 rounded-full hover:bg-[#ff00ff] hover:text-white transition-all duration-300"
          >
            Ver todos los artículos
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
