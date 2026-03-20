import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { value: "5", suffix: "+", label: "Projects Completed" },
    { value: "20", suffix: "+", label: "Team Members" },
    { value: "24", suffix: "/7", label: "Support & Uptime" },
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#111827]/70 border border-white/10 rounded-2xl py-10 px-6
                       hover:border-[#D4AF37]/40 hover:scale-[1.05] hover:shadow-[0_0_10px_rgba(212,175,55,0.5)] transition"
          >
            <h3 className="text-4xl font-bold text-[#D4AF37] mb-2">
              <CountUp end={item.value} suffix={item.suffix} duration={2} enableScrollSpy scrollSpyOnce/>
            </h3>
            <p className="text-slate-300 text-lg tracking-wide">
              {item.label}
            </p>
          </div>
        ))}

      </div>
      </motion.section>
    </section>
  );
}
