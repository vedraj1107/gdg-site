"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["What is GDG RBU?", "GDG RBU is focused on empowering students through hands-on workshops, tech talks, hackathons, and real-world project collaboration."],
  ["How to join GDG?", "Watch our socials for recruitment drives and fill the application form when it opens."],
  ["What does a GDG Lead do?", "Leads organise events, mentor members, and manage their domain team."],
  ["How is GDG related to Google?", "GDG is a Google-supported community programme run by volunteers."],
  ["How to reach us?", "Email us or DM us on Instagram and LinkedIn."],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-xl">
      <h2 className="font-head mb-6 text-center text-6xl">FAQs</h2>
      <div className="space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={q} className="neo rounded-md bg-[var(--card)]">
            <button
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-4 py-2.5 text-left text-xs font-bold"
            >
              {q}
              <ChevronDown size={14} className={`transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden px-4 pb-3 text-xs"
                >
                  {a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}