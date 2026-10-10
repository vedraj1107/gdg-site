"use client";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <section id="events">
      <h2 className="font-head text-center text-5xl">Upcoming Event</h2>
      <span className="mx-auto mb-8 mt-2 block h-1 w-16 bg-yellow-400" />
      <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
        <motion.article
          whileHover={{ y: -4 }}
          className="neo flex min-h-72 flex-col justify-end gap-2 rounded-2xl bg-gradient-to-b from-gray-300 to-black p-6 text-white"
        >
          <span className="neo w-fit rounded-full bg-white px-3 py-0.5 text-[10px] font-bold text-black">UPCOMING</span>
          <h3 className="font-head text-2xl">GDG ORIENTATION</h3>
          <p className="text-xs text-gray-200">
            Google Developer Groups RBU: Student Chapter is a community of students passionate about technology, innovation, and learning, with workshops, projects and events.
          </p>
        </motion.article>

        <motion.article
          whileHover={{ y: -4 }}
          className="neo flex flex-col gap-6 rounded-2xl bg-yellow-400 p-6 text-black"
        >
          <h3 className="font-head text-5xl leading-[0.9]">New<br />Event</h3>

          <div className="mt-auto font-[family-name:var(--font-sans)]">
            <p className="text-[11px] font-semibold uppercase tracking-wider opacity-70">Date &amp; Time</p>
            <p className="mt-1 text-lg font-bold leading-snug">Oct 7, 2025</p>
            <p className="text-lg font-bold leading-snug">3:00 PM</p>
          </div>

          <button className="rounded bg-black py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:opacity-90">
            Register Now
          </button>
        </motion.article>
      </div>
    </section>
  );
}