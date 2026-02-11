"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Code2, Terminal, Cpu, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { NeonButton } from "@/app/components/NeonButton";
import { personalInfo } from "@/app/lib/data";

// Posiciones pre-calculadas para evitar hydration mismatch
const particlePositions = [
  { left: 15, top: 20, duration: 3.5, delay: 0 },
  { left: 85, top: 15, duration: 4, delay: 0.5 },
  { left: 25, top: 45, duration: 3.2, delay: 1 },
  { left: 75, top: 35, duration: 4.5, delay: 0.3 },
  { left: 10, top: 70, duration: 3.8, delay: 0.8 },
  { left: 90, top: 60, duration: 3.3, delay: 1.2 },
  { left: 40, top: 25, duration: 4.2, delay: 0.2 },
  { left: 60, top: 80, duration: 3.6, delay: 0.6 },
  { left: 5, top: 50, duration: 4, delay: 0.9 },
  { left: 95, top: 40, duration: 3.4, delay: 0.4 },
  { left: 30, top: 75, duration: 3.7, delay: 1.1 },
  { left: 70, top: 55, duration: 4.1, delay: 0.7 },
  { left: 20, top: 90, duration: 3.9, delay: 0.1 },
  { left: 80, top: 85, duration: 3.5, delay: 0.8 },
  { left: 45, top: 10, duration: 4.3, delay: 0.5 },
  { left: 55, top: 65, duration: 3.6, delay: 1.3 },
  { left: 35, top: 95, duration: 4, delay: 0.2 },
  { left: 65, top: 30, duration: 3.8, delay: 0.9 },
  { left: 12, top: 60, duration: 3.4, delay: 0.6 },
  { left: 88, top: 75, duration: 4.2, delay: 0.3 },
];

// Componente de partículas flotantes
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particlePositions.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "#00d4ff" : "#ff00ff",
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

// Componente de grid animado
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

// Componente de texto con efecto de escritura
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Parpadear el cursor después de terminar
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="inline-block w-[3px] h-[1em] bg-[#00d4ff] ml-1 align-middle"
      />
    </span>
  );
}

// Componente de badge flotante
function FloatingBadge({ 
  icon: Icon, 
  text, 
  position, 
  delay 
}: { 
  icon: React.ElementType; 
  text: string; 
  position: { top?: string; bottom?: string; left?: string; right?: string };
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="absolute hidden lg:flex items-center gap-2 px-4 py-2 bg-[#14141f]/80 backdrop-blur-sm rounded-full border border-[#262636] shadow-lg"
      style={position}
      whileHover={{ scale: 1.1 }}
    >
      <Icon className="w-5 h-5 text-[#00d4ff]" />
      <span className="text-sm font-medium text-white">{text}</span>
    </motion.div>
  );
}

// Componente de líneas de código flotantes
function FloatingCodeLines() {
  const lines = [
    "const dev = new Developer();",
    "await dev.createAwesome();",
    "import { Innovation } from 'future';",
    "export const solution = magic();",
  ];

  return (
    <>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: [0.1, 0.3, 0.1], x: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.5,
          }}
          className="absolute hidden xl:block font-mono text-xs text-[#00d4ff]/30"
          style={{
            top: `${20 + i * 15}%`,
            left: i % 2 === 0 ? "5%" : "auto",
            right: i % 2 !== 0 ? "5%" : "auto",
          }}
        >
          {line}
        </motion.div>
      ))}
    </>
  );
}

export function Hero() {
  // Movimiento suave del mouse para efecto parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 50);
    mouseY.set((clientY - innerHeight / 2) / 50);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      onMouseMove={handleMouseMove}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs con movimiento */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00d4ff]/20 rounded-full blur-[120px]"
          style={{ x, y }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff00ff]/20 rounded-full blur-[120px]"
          style={{ 
            x: useTransform(x, v => -v), 
            y: useTransform(y, v => -v) 
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00d4ff]/5 to-[#ff00ff]/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid animado */}
      <AnimatedGrid />
      
      {/* Partículas flotantes */}
      <FloatingParticles />
      
      {/* Líneas de código flotantes */}
      <FloatingCodeLines />

      {/* Badges flotantes */}
      <FloatingBadge 
        icon={Code2} 
        text="Clean Code" 
        position={{ top: "25%", left: "10%" }}
        delay={1.2}
      />
      <FloatingBadge 
        icon={Terminal} 
        text="Full Stack" 
        position={{ top: "35%", right: "10%" }}
        delay={1.4}
      />
      <FloatingBadge 
        icon={Cpu} 
        text="Modern Tech" 
        position={{ bottom: "30%", left: "12%" }}
        delay={1.6}
      />
      <FloatingBadge 
        icon={Zap} 
        text="High Performance" 
        position={{ bottom: "35%", right: "8%" }}
        delay={1.8}
      />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge con animación de pulso */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14141f]/80 backdrop-blur-sm border border-[#00d4ff]/30 mb-8 shadow-[0_0_20px_rgba(0,212,255,0.2)]"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={18} className="text-[#00d4ff]" />
          </motion.div>
          <span className="text-sm font-medium text-gray-300">{personalInfo.availability}</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </motion.div>

        {/* Main heading con efecto de glitch y sombra */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
            <motion.span 
              className="inline-block text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hola, soy
            </motion.span>
            <br />
            <motion.span 
              className="inline-block gradient-text neon-text-blue mt-2"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(0, 212, 255, 0.5)",
                  "0 0 40px rgba(0, 212, 255, 0.8)",
                  "0 0 20px rgba(0, 212, 255, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {personalInfo.name}
            </motion.span>
          </h1>
        </motion.div>

        {/* Title con efecto de typing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono">
            <span className="text-[#00d4ff]">&gt;</span>{" "}
            <span className="text-[#ff00ff]">
              <TypewriterText text={personalInfo.title} delay={800} />
            </span>
          </h2>
        </motion.div>

        {/* Tagline con animación de fade in */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons con más impacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <NeonButton variant="gradient" size="lg" href="#projects">
            <span className="flex items-center gap-2">
              Ver Proyectos
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </NeonButton>
          <NeonButton variant="blue" size="lg" href="#contact">
            <span className="flex items-center gap-2">
              Contactar
              <Zap size={18} />
            </span>
          </NeonButton>
        </motion.div>

        {/* Tech stack preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500"
        >
          <span>Tech Stack:</span>
          {["Next.js", "TypeScript", "React", "Node.js", "Python"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              className="px-3 py-1 rounded-full bg-[#14141f] border border-[#262636] text-gray-400 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>


      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-[#00d4ff]/20 rounded-tl-3xl" />
      <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-[#ff00ff]/20 rounded-tr-3xl" />
      <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-[#ff00ff]/20 rounded-bl-3xl" />
      <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-[#00d4ff]/20 rounded-br-3xl" />
    </section>
  );
}
