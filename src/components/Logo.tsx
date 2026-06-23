import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export default function Logo({ className = "", invert = false }: LogoProps) {
  const primaryColor = "#7A1F2B"; // Burgundy
  const contentColor = invert ? "#121212" : "#F5F5F7"; // Charcoal or light off-white

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Animated abstract geometric icon representation */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 md:w-11 md:h-11 filter drop-shadow-[0_0_12px_rgba(122,31,43,0.4)]"
      >
        {/* Layer 1: Elegant outer diamond frame rotating slightly */}
        <motion.path
          d="M50 10 L90 50 L50 90 L10 50 Z"
          stroke={primaryColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0, rotate: -15 }}
          animate={{ pathLength: 1, opacity: 0.7, rotate: 0 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Layer 2: Middle offset container */}
        <motion.path
          d="M32 50 L50 32 L68 50 L50 68 Z"
          stroke={contentColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0, scale: 0.8 }}
          animate={{ pathLength: 1, opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Layer 3: XXIII Roman layered columns nested inner representing "23 Layers" */}
        <motion.path
          d="M44 42 V58 M50 42 V58 M56 42 V58"
          stroke={primaryColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
        />
      </svg>

      {/* Typography group */}
      <div className="flex flex-col text-left">
        <motion.span
          className="font-sans text-xs md:text-sm font-extrabold tracking-[0.35em] leading-none"
          style={{ color: contentColor }}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          XXIII
        </motion.span>
        <motion.span
          className="font-mono text-[7.5px] md:text-[8px] font-bold tracking-[0.25em] uppercase mt-1"
          style={{ color: primaryColor }}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          Layers NYC
        </motion.span>
      </div>
    </div>
  );
}
