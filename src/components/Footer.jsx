import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-black text-zinc-300 py-20 px-6 md:px-12 w-full font-mono text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-zinc-900 overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-zinc-200 via-zinc-600 to-zinc-800 rounded-full blur-[160px] opacity-10 pointer-events-none" />

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-bold relative z-10">
        <div className="flex flex-col gap-2">
          <p className="text-white text-sm font-black tracking-wider">Strategic Focus</p>
          <p className="text-zinc-100 font-semibold">Global Marketing & Comms</p>
          <p className="text-zinc-200 font-semibold">GTM Strategy, PR & Branding</p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-center">
          <p className="text-white text-sm font-black tracking-wider">Location</p>
          <p className="text-zinc-100 font-semibold">Dubai, UAE (Open to Immediate Relocation)</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-2 text-zinc-100 font-semibold">View Works</a>
        </div>
        
        <div className="flex flex-col gap-2 md:items-end">
          <p className="text-white text-sm font-black tracking-wider">Connect</p>
          <div className="flex items-center gap-4 mt-1">
            {/* LinkedIn Link with SVG Logo */}
            <a 
              href="https://in.linkedin.com/in/pushpeshgarikpati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition-colors p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
          <p className="text-zinc-100 font-semibold mt-1">+91 997 041 5160</p>
        </div>
      </div>

      {/* Middle Huge Text with Hover Glow */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden relative z-10">
        <motion.h2 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="text-[14vw] md:text-[12vw] leading-none font-black tracking-tighter uppercase select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-700 w-full text-center cursor-default"
        >
          Pushpesh
        </motion.h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-bold relative z-10">
        <div className="flex flex-col gap-4">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-2 font-black text-white text-sm">Contact Transmission</a>
          <p className="text-zinc-300 font-mono text-[11px] font-semibold">
            &copy; {new Date().getFullYear()} Pushpesh Garikpati | Global Marketing Leader
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:pushpesh@outlook.in" className="underline hover:text-white transition-colors underline-offset-4 decoration-2 lowercase text-zinc-100 font-semibold">
            pushpesh@outlook.in
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#home" className="underline hover:text-white transition-colors underline-offset-4 decoration-2 text-zinc-100 font-semibold">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;