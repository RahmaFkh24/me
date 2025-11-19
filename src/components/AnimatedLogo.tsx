import { motion } from 'framer-motion';
import { useState } from 'react';

export const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
    >
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="drop-shadow-2xl"
      >
        {/* R Letter */}
        <motion.path
          d="M 30 30 L 30 90 M 30 30 L 60 30 Q 75 30 75 45 Q 75 60 60 60 L 30 60 M 60 60 L 75 90"
          stroke="url(#gradient)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: isHovered ? 0 : 1,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* { } Brackets */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.path
            d="M 40 30 Q 25 30 25 45 L 25 75 Q 25 90 40 90"
            stroke="url(#gradient2)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            animate={{
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M 80 30 Q 95 30 95 45 L 95 75 Q 95 90 80 90"
            stroke="url(#gradient2)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            animate={{
              rotate: isHovered ? -360 : 0,
            }}
            transition={{ duration: 1 }}
          />
        </motion.g>

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B61FF" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 blur-xl opacity-50"
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0.3,
        }}
        style={{
          background: 'radial-gradient(circle, #7B61FF 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};
