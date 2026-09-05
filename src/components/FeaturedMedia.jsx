import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import podcastImage from '../assets/podcasts/image.png';

const FeaturedMedia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isPlaying, setIsPlaying] = useState(false);

  const publications = [
    {
      title: "Latvia's Euro Adoption Strategy: A Wise Move?",
      reference: "The Case Centre, Reference no. 113-057-1",
      date: "November 18, 2013",
      link: "https://www.thecasecentre.org/products/view?id=118587#!"
    },
    {
      title: "Samsung: The Smartphone Maker Makes A Smart Move In Finland",
      reference: "The Case Centre, Reference no. 313-287-1",
      date: "December 06, 2013",
      link: "https://www.thecasecentre.org/products/view?id=119010#!"
    },
    {
      title: "Google: A Game Changing Shift in Email Marketing Strategy?",
      reference: "The Case Centre, Reference no. 513-109-1",
      date: "December 17, 2013",
      link: "https://www.thecasecentre.org/educators/products/view%26%26id%3D119100#!"
    },
    {
      title: "BMW's Move To Electric Car Segment: Driving On Competition",
      reference: "The Case Centre, Reference no. 314-035-1",
      date: "January 31, 2014",
      link: "https://www.thecasecentre.org/educators/products/view%26%26id%3D119871"
    },
    {
      title: "Indian Hospitality Industry: Declining Fortunes?",
      reference: "The Case Centre, Reference no. 314-057-1",
      date: "March 07, 2014",
      link: "https://www.thecasecentre.org/educators/products/view%26%26id%3D120342"
    }
  ];

  return (
    <section id="featured-media" ref={ref} className="relative bg-black py-32 px-6 md:px-12 w-full overflow-hidden font-sans border-t border-zinc-900">
      
      {/* Cinematic Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-4 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
            <span className="text-zinc-300 text-xs font-mono tracking-widest uppercase">Spotlight</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Featured Media & Publications
          </motion.h2>
        </div>

        {/* Top Feature Grid: Embedded YouTube Video & LinkedIn Award Post */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Embedded YouTube Video Card with custom thumbnail overlay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative rounded-3xl p-6 bg-zinc-950 border border-zinc-800/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 via-white to-zinc-700 rounded-[2.4rem] opacity-15 group-hover:opacity-60 transition duration-700 blur-sm pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-zinc-400 font-mono text-xs font-bold tracking-wider uppercase bg-white/5 px-3 py-1 rounded-md border border-white/5 inline-block mb-4 self-start">
                 Recent Video & Podcast
              </span>
              <h3 className="text-xl font-black text-white tracking-tight mb-3">
                Episode One — Behind the Brand
              </h3>
              
              {/* Responsive YouTube Embed Container with Thumbnail Preview */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-4 shadow-inner">
                {!isPlaying ? (
                  <div 
                    className="relative w-full h-full cursor-pointer group/thumb"
                    onClick={() => setIsPlaying(true)}
                  >
                    <img 
                      src={podcastImage} 
                      alt="Episode One — Behind the Brand" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover/thumb:bg-black/20">
                      <div className="w-16 h-16 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl transition-transform group-hover/thumb:scale-110">
                        <svg className="w-7 h-7 fill-current translate-x-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/5KSMZGe3Jsc?autoplay=1"
                    title="Episode One — Behind the Brand"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Discussion on manufacturing excellence, scale, brand creation, and human-centric strategy.
              </p>

              <a 
                href="https://youtu.be/5KSMZGe3Jsc?feature=shared" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-extrabold text-xs hover:bg-zinc-200 transition-all shadow-lg self-start"
              >
                Watch it on Video →
              </a>
            </div>
          </motion.div>

          {/* GEC 40Under40 Award Card with Embedded LinkedIn Video / Post */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group relative rounded-3xl p-6 bg-zinc-950 border border-zinc-800/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-500 via-white to-zinc-700 rounded-[2.4rem] opacity-15 group-hover:opacity-60 transition duration-700 blur-sm pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="text-zinc-400 font-mono text-xs font-bold tracking-wider uppercase bg-white/5 px-3 py-1 rounded-md border border-white/5">
                   Jan 2025 - Present
                </span>
                <span className="text-emerald-400 font-mono text-xs font-bold">Awardee</span>
              </div>
              <h3 className="text-xl font-black text-white tracking-tight mb-3">
                GEC 40Under40 Award
              </h3>

              {/* Embedded LinkedIn Post / Video Container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-4 flex items-center justify-center">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7284559833897328643"
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title="Embedded LinkedIn post"
                  className="w-full h-full"
                ></iframe>
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                Awarded by a distinguished jury for achievements in Marketing, Communications, Sustainability, and Leadership.
              </p>

              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://peoplefirsthrmagazine.com/viewarticle/377" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-zinc-300 underline hover:text-white transition-colors"
                >
                  People First HR Magazine Feature ↗
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Research Publications List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-3xl p-8 md:p-10 bg-zinc-950 border border-zinc-800/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        >
          <h3 className="text-2xl font-black text-white tracking-tight mb-6">
            Research Publications & Case Studies (The Case Centre)
          </h3>

          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <div 
                key={idx}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-500 transition-all group"
              >
                <div>
                  <h4 className="text-white font-bold text-base mb-1 group-hover:translate-x-1 transition-transform">
                    {pub.title}
                  </h4>
                  <p className="text-zinc-400 font-mono text-xs">
                    {pub.reference} • {pub.date}
                  </p>
                </div>
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white hover:text-black text-white text-xs font-extrabold transition-all self-start md:self-auto shrink-0 text-center"
                >
                  View Case →
                </a>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom subtle divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none z-30" />
    </section>
  );
};

export default FeaturedMedia;