import React from 'react';

interface HeaderProps {
  onEnterHover: (text: string) => void;
  onLeaveHover: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onEnterHover, onLeaveHover }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-5 flex items-center justify-between pointer-events-none">
      {/* Clean Brand */}
      <div className="flex items-center pointer-events-auto">
        <a
          href="#"
          className="group"
          onMouseEnter={() => onEnterHover('HOME')}
          onMouseLeave={onLeaveHover}
        >
          <span className="font-serif italic text-2xl md:text-3xl tracking-tight text-white group-hover:text-[#d4af37] transition-colors duration-300">
            Muskan
          </span>
        </a>
      </div>
    </header>
  );
};
