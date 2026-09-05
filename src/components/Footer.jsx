import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-zinc-300 py-16 px-6 md:px-12 w-full font-mono text-xs tracking-widest flex flex-col justify-between border-t border-zinc-900 overflow-hidden">
      
      {/* Ambient Background Glow */}
      
        
        

      {/* Copyright Bottom Bar */}
      <div className="w-full pt-10 mt-10 border-t border-zinc-900/80 text-center relative z-10">
        <p className="text-zinc-400 font-mono text-[11px] font-semibold tracking-wider">
          &copy; {new Date().getFullYear()} Pushpesh Garikpati. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;