import logo2 from '../assets/logo2.png';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#0B0F14] text-white overflow-hidden">
      <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Building Scalable Tech <br />
            Solutions for Ambitious <br />
            Businesses
          </h1>

          <p className="text-slate-300 mb-10 max-w-lg leading-relaxed">
            From modern web platforms to AI-powered automation, we help startups and
            organizations turn bold ideas into reliable, production-ready systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-[#D4AF37] text-black px-7 py-3 rounded-lg font-semibold hover:bg-[#F1C232] hover:scale-[1.05] transition shadow-lg shadow-[#D4AF37]/20"
            >
              Get a Free Consultation →
            </a>

            <a
              href="/services"
              className="border border-[#D4AF37] text-[#D4AF37] px-7 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center mt-10 md:mt-0">
          <motion.img
                    src={logo2}
                    alt="Neuricorn Syndicate Logo"
                    className="relative object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.35)]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
        </div>

      </div>
      
      </motion.section>
    </section>
  );
}
