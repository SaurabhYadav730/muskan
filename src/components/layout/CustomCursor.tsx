import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface CursorState {
  type: 'default' | 'view' | 'play' | 'drag' | 'close';
  text?: string;
}

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on fine pointer (mouse/trackpad), not touch
    const checkPointer = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      setIsPointerDevice(hasFinePointer);
      if (hasFinePointer) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    checkPointer();
    window.addEventListener('resize', checkPointer);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkPointer);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!isPointerDevice || !isHovered) return null;

  const isSpecial = cursorState.type !== 'default';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower / Expanding Circle */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full"
        animate={{
          x: mousePosition.x - (isSpecial ? 36 : 16),
          y: mousePosition.y - (isSpecial ? 36 : 16),
          width: isSpecial ? 72 : 32,
          height: isSpecial ? 72 : 32,
          backgroundColor: isSpecial
            ? cursorState.type === 'play'
              ? 'rgba(232, 153, 94, 0.85)'
              : 'rgba(212, 175, 55, 0.85)'
            : 'rgba(255, 255, 255, 0.08)',
          borderColor: isSpecial ? 'transparent' : 'rgba(255, 255, 255, 0.3)',
          borderWidth: isSpecial ? 0 : 1,
          backdropFilter: isSpecial ? 'blur(8px)' : 'blur(2px)',
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 300,
          mass: 0.4,
        }}
      >
        {isSpecial && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#0a0a0c]"
          >
            {cursorState.text || cursorState.type}
          </motion.span>
        )}
      </motion.div>

      {/* Tiny Center Dot (only on default state) */}
      {!isSpecial && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#d4af37] rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
          }}
          transition={{
            type: 'spring',
            damping: 40,
            stiffness: 600,
            mass: 0.1,
          }}
        />
      )}
    </div>
  );
};
