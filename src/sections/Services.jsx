import { Code, Smartphone, GraduationCap, Database, Briefcase, ArrowRight, Check, MoveLeft, X, Volume2, VolumeOff, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services() {

  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [muted, setMuted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const services = [
    {
      title: "Website Development",
      desc: "High-performance, responsive websites built to scale with your business and convert visitors into customers.",
      icon: Code,
      emoji: "🌐",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "App Development",
      desc: "Native and cross-platform mobile apps focused on usability, speed, and long-term maintainability.",
      icon: Smartphone,
      emoji: "📱",
      video: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Training & Placement",
      desc: "Industry-aligned training programs with hands-on projects and career guidance for aspiring professionals.",
      icon: GraduationCap,
      emoji: "🎓",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "IT Consultancy",
      desc: "Expert advice on system architecture, security, cloud adoption, and digital transformation strategies.",
      icon: Database,
      emoji: "💻",
      video: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Business Consultancy",
      desc: "Data-driven strategies to streamline operations, improve efficiency, and accelerate business growth.",
      icon: Briefcase,
      emoji: "📊",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
  ];

  const pulseVariant = {
    rest: { scale: 1, opacity: 0 },
    hover: {
      scale: [1, 1.5, 1.8],
      opacity: [0.6, 0],
      transition: {
        duration: 1.2,
        ease: "easeOut",
        repeat: Infinity
      }
    }
  };

  const toggleVideo = (index) => {
    if (activeVideoIndex === index) {
      setActiveVideoIndex(null);
      setVideoEnded(false);
    } else {
      setActiveVideoIndex(index);
      setVideoEnded(false);
    }
  };

  return (
    <section className="py-24 border-t border-white/10">

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              Our Services
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Practical, scalable solutions designed to support your growth at every stage.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((item, i) => {

              const Icon = item.icon;
              const isActive = activeVideoIndex === i;

              return (

                <motion.div
                  key={i}
                  initial= "rest"
                  whileHover="hover"
                  animated= "rest"
                  className="group relative bg-[#111827]/70 border border-white/10 p-8 rounded-2xl hover:bg-[#111827]
                  hover:border-[#D4AF37]/40 transition hover:scale-1.05 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                >

                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">

                    {/* Service Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center">
                      <Icon className="text-[#D4AF37]" />
                    </div>

                    {/* Arrow + Emoji Trigger */}
                    <div className="relative">

                      {/* <motion.div
                        className="absolute inset-0 rounded-full bg-[#D4AF37]/40 blur-md pointer-events-none"
                        variants={pulseVariant}
                      /> */}

                      {/* <button
                        onClick={() => toggleVideo(i) && setVideoEnded(false)}
                        className="relative z-10 flex items-center gap-2 group"
                      > */}
                        {/* Arrow Icon and watch video*/}
                        {/* <div className="group flex flex-col items-end justify-center items-centre gap-1">
                          <p className="text-sm text-[#D4AF37] font-medium hidden group-hover:block duration-300 ">
                            Watch Video
                          </p>
                          <MoveLeft className="w-7 h-4 text-[#D4AF37] transition-transform duration-300" />
                        </div> */}

                        {/* Emoji */}
                        {/* <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                          {item.emoji}
                        </span>

                      </button> */}

                    </div>

                  </div>

                  <h3 className="text-lg text-white font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Video Overlay */}
                  <AnimatePresence>

                    {isActive && (

                      <motion.div
                        initial={{ opacity: 0, scale: 0.7, x: 120, y: -120 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.7, x: 120, y: -120 }}
                        transition={{ duration: 0.45 }}
                        className="absolute inset-0 z-30 flex items-center justify-center p-6"
                      >

                        <div className="relative w-full aspect-video rounded-xl bg-black border border-[#D4AF37]/40 overflow-hidden shadow-2xl">

                          <button
                            onClick={() => toggleVideo(i) && setVideoEnded(false)}
                            className="absolute top-3 right-3 z-50 p-1 bg-black/60 rounded-md text-[#D4AF37]"
                          >
                            <X className="w-4 h-4" />
                          </button>

                          <video
                            autoPlay
                            muted={muted}
                            onEnded={() => setVideoEnded(true)}
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source src={item.video} type="video/mp4" />
                          </video>

                          <button
                              onClick={() => setMuted(!muted)}
                              className="absolute bottom-3 right-3 z-50 p-1 bg-black/60 rounded-md text-[#D4AF37]"
                            >
                              {muted? <VolumeOff className="w-6 h-6"/> : <Volume2 className="w-6 h-6"/>}
                            </button>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          {videoEnded && (
                                <button
                                  onClick={() => {
                                    const video = document.querySelector("video");
                                    video.currentTime = 0;
                                    video.play();
                                    setVideoEnded(false);
                                  }}
                                  className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-lg font-semibold"
                                >
                                  {videoEnded? <RotateCcw className="w-6 h-6 mr-2 animate-spin-slow"/> : ""}
                                </button>
                              )}
                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </motion.div>

              );
            })}

          </div>

          {/* CTA */}
          <div className="text-center mt-16">

            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold
              hover:bg-[#F1C232] hover:scale-[1.05] transition shadow-lg shadow-[#D4AF37]/20"
            >
              Explore All Services →
            </a>

          </div>

        </div>

      </motion.section>

    </section>
  );
}