"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const points = [
  ["Passionate Community Leaders", "Our organizers build an inclusive environment where developers can connect, share knowledge, and grow together."],
  ["Empowering Developers", "We host meetups and codelabs to help developers stay current with modern tools and best practices."],
];

export default function Team() {
  return (
    <motion.section
      id="team"
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="neo grid overflow-hidden rounded-xl bg-[var(--card)] md:min-h-[26rem] md:grid-cols-2"
    >
      <div className="flex flex-col justify-center p-6 font-[family-name:var(--font-sans)] sm:p-10">
        <h2 className="font-head text-6xl leading-[0.95]">
          Meet the<br />Google<br />Developer<br />Group Team
        </h2>
        <p className="mt-6 text-sm leading-relaxed">
          Google Developer Groups (GDG) are open and volunteer-run communities for developers interested in Google technologies. Our team focuses on learning, networking, and collaboration through events and hands-on sessions.
        </p>
        <ul className="mt-6 space-y-5">
          {points.map(([t, d]) => (
            <li key={t} className="flex gap-3">
              <CircleCheck size={18} className="mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-bold">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed opacity-80">{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative min-h-80 border-t-2 border-[var(--ink)] md:border-l-2 md:border-t-0">
        <Image
          src="/team.png" alt="GDG RBU team" fill priority
          className="object-cover object-center" sizes="(min-width:768px) 50vw, 100vw"
        />
      </div>
    </motion.section>
  );
}