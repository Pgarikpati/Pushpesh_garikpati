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
      
      {/* Cinematic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
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
        <div className="mb-16">
          <h3 className="text-xl font-bold text-zinc-300 mb-8 font-mono tracking-wider uppercase border-b border-zinc-800 pb-3">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.15 + index * 0.15, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 via-white to-zinc-700 rounded-[2.4rem] opacity-20 group-hover:opacity-100 transition duration-700 blur-sm pointer-events-none" />

                <div className="relative rounded-3xl p-8 bg-zinc-950 border border-zinc-800/80 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between h-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-zinc-200 font-mono text-sm font-bold tracking-wider uppercase bg-white/5 px-3 py-1 rounded-md border border-white/5">
                        {item.period}
                      </span>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-300" />
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
          <h3 className="text-xl font-bold text-zinc-300 mb-8 font-mono tracking-wider uppercase border-b border-zinc-800 pb-3">
            Executive Programs & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coursesData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3 + index * 0.15, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 via-white to-zinc-700 rounded-[2.4rem] opacity-20 group-hover:opacity-100 transition duration-700 blur-sm pointer-events-none" />

                <div className="relative rounded-3xl p-8 bg-zinc-950 border border-zinc-800/80 transition-all duration-500 overflow-hidden backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between h-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-zinc-200 font-mono text-sm font-bold tracking-wider uppercase bg-white/5 px-3 py-1 rounded-md border border-white/5">
                        {item.period}
                      </span>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-700 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,1)] transition-all duration-300" />
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