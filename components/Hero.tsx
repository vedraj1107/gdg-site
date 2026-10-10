"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="grid items-center gap-10 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="font-head text-6xl leading-[0.95] sm:text-7xl">
          <span className="block">GOOGLE DEVELOPER</span>
          <span className="block">GROUPS, RBU</span>
        </h1>
        <p className="mt-5 max-w-sm text-sm leading-relaxed">
          Empowering students with cutting-edge tech skills, community, and resources for a future in technology
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#team" className="neo rounded bg-[var(--card)] px-4 py-1.5 text-xs font-bold transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--ink)]">LEARN MORE</a>
          <a href="#portfolio" className="neo rounded bg-[var(--card)] px-4 py-1.5 text-xs font-bold transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--ink)]">PROJECTS</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto w-full max-w-md md:ml-auto md:mr-0" aria-hidden
      >
        <motion.svg
          viewBox="0 0 545 256" className="h-auto w-full"
          animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            style={{ fill: "var(--ink)" }}
            d="M159 0H521A24 24 0 0 1 545 24V130A24 24 0 0 1 521 154H432A24 24 0 0 0 408 178V232A24 24 0 0 1 384 256H24A24 24 0 0 1 0 232V126A24 24 0 0 1 24 102H111A24 24 0 0 0 135 78V24A24 24 0 0 1 159 0Z"
          />
          <rect x="68" y="170" width="272" height="12" rx="6" style={{ fill: "var(--bg)" }} />
        </motion.svg>
      </motion.div>
    </section>
  );
}