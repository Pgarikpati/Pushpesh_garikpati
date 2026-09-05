import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EducationAndCourses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const educationData = [
    {
      period: "Nov 2010",
      title: "Master of International Business and Management",
      institution: "De Montfort University, Leicester UK",
      description: "Recipient of Dean's Outstanding Achievement Award."
    },
    {
      period: "Apr 2009",
      title: "Bachelor of Commerce with Marketing",
      institution: "Symbiosis College, Pune University, Pune, India",
      description: "Focused on core marketing dynamics, commerce fundamentals, and business strategies."
    }
  ];

  const coursesData = [
    {
      period: "Aug 2020",
      title: "Leadership and Emotional Intelligence",
      institution: "Indian School of Business, Hyderabad",
      description: "Advanced executive education focusing on emotional intelligence, adaptive leadership, and high-performance team management."
    },
    {
      period: "Jan 2021",
      title: "Integrated Marketing Communications",
      institution: "IE Business School, Madrid",
      description: "Comprehensive strategic program covering multi-channel brand positioning, digital campaigns, and integrated communications."
    }
  ];

  return (
    <section id="certifications" ref={ref} className="relative bg-black py-32 px-6 md:px-12 w-full overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Cinematic Ambient Background Dynamic Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
          x: ['-50%', '-45%', '-50%'],
          y: ['-50%', '-55%', '-50%']
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-zinc-700/20 via-white/10 to-zinc-500/10 rounded-full blur-[180px] pointer-events-none" 
      />

      {/* Floating Ambient Light Particles */}
      <motion.div 
        animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-72 h-72 bg-white/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [20, -20, 20], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-zinc-400/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4 shadow-xl"
          >
            <motion.span 
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} 
              transition={{ duration: 2, repeat: Infinity }} 
              className="w-2 h-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]" 
            />
            <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">Academic & Executive Background</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Education, Certifications & Courses
          </motion.h2>
        </div>

        {/* EDUCATION SECTION */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-bold text-zinc-300 mb-8 font-mono tracking-wider uppercase border-b border-zinc-800 pb-3 flex items-center gap-3"
          >
            <span className="w-1.5 h-6 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            Education
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80, scale: 0.9, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.25 + index * 0.2, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Always-Visible Pulsing Cinematic Outer Glow Border */}
                <motion.div 
                  animate={{ 
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.01, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className="absolute -inset-0.5 bg-gradient-to-r from-zinc-400 via-white to-zinc-600 rounded-[2.4rem] blur-[6px] pointer-events-none" 
                />

                {/* Card Container */}
                <div className="relative rounded-3xl p-8 bg-zinc-950 border border-zinc-800/80 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between h-full">
                  
                  {/* Subtle Ambient Shimmer Effect */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 1.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" 
                  />

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-zinc-200 font-mono text-sm font-bold tracking-wider uppercase bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {item.period}
                      </span>
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1], boxShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 15px rgba(255,255,255,0.8)', '0 0 0px rgba(255,255,255,0)'] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                        className="w-3 h-3 rounded-full bg-white border border-white" 
                      />
                    </div>

                    <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h4>

                    <p className="text-xs font-mono tracking-wide mb-4 text-zinc-400">
                      {item.institution}
                    </p>

                    <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* COURSES & CERTIFICATIONS SECTION */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl font-bold text-zinc-300 mb-8 font-mono tracking-wider uppercase border-b border-zinc-800 pb-3 flex items-center gap-3"
          >
            <span className="w-1.5 h-6 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            Executive Programs & Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coursesData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80, scale: 0.9, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.5 + index * 0.2, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Always-Visible Pulsing Cinematic Outer Glow Border */}
                <motion.div 
                  animate={{ 
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.01, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: (index + 2) * 0.5 }}
                  className="absolute -inset-0.5 bg-gradient-to-r from-zinc-400 via-white to-zinc-600 rounded-[2.4rem] blur-[6px] pointer-events-none" 
                />

                {/* Card Container */}
                <div className="relative rounded-3xl p-8 bg-zinc-950 border border-zinc-800/80 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between h-full">
                  
                  {/* Subtle Ambient Shimmer Effect */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: (index + 2) * 1.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" 
                  />

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-zinc-200 font-mono text-sm font-bold tracking-wider uppercase bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {item.period}
                      </span>
                      <motion.div 
                        animate={{ scale: [1, 1.3, 1], boxShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 15px rgba(255,255,255,0.8)', '0 0 0px rgba(255,255,255,0)'] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: (index + 2) * 0.4 }}
                        className="w-3 h-3 rounded-full bg-white border border-white" 
                      />
                    </div>

                    <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                      {item.title}
                    </h4>

                    <p className="text-xs font-mono tracking-wide mb-4 text-zinc-400">
                      {item.institution}
                    </p>

                    <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default EducationAndCourses;