import React from 'react';
import { motion } from 'motion/react';

interface LiveBorderCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  delay?: number;
  key?: any;
}

export default function LiveBorderCard({ children, className = "", onClick, delay = 0 }: LiveBorderCardProps) {
  return (
    <motion.div
      className={`live-border-wrapper cursor-pointer group ${className}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      onClick={onClick}
    >
      <div className="live-border-inner flex flex-col h-full bg-[#0B0B0C] p-0.5">
        <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 bg-[#0D0D0E] group-hover:bg-[#121215] transition-colors duration-500 rounded-[10px]">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
