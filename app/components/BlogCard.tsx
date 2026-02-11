"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-[#14141f] rounded-2xl overflow-hidden border border-[#262636] hover:border-[#00d4ff]/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14141f] via-transparent to-transparent" />
        
        {/* Read time badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-gray-300">
          <Clock size={12} />
          {post.readTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-[#00d4ff] bg-[#00d4ff]/10 rounded border border-[#00d4ff]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00d4ff] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Read more link */}
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 text-[#ff00ff] font-medium text-sm hover:gap-3 transition-all"
          whileHover={{ x: 5 }}
        >
          Leer más
          <ArrowRight size={16} />
        </motion.a>
      </div>
    </motion.article>
  );
}
