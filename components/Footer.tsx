import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="neo mx-auto max-w-3xl rounded-lg bg-[var(--card)] p-5 text-center">
        <Logo size={52} className="mx-auto" />
        <h2 className="font-head mt-2 text-3xl">Google Developer Groups</h2>
        <p className="text-[11px]">On Campus - Ramdeobaba University</p>
        <hr className="my-4 border-t-2 border-dashed border-[var(--ink)]" />
        <div className="grid gap-3 text-left text-[11px] sm:grid-cols-[2fr_1fr]">
          <div className="space-y-3">
            <address className="neo flex gap-2 rounded bg-blue-400 p-3 not-italic text-black">
              <MapPin size={14} className="shrink-0" />
              <span><b>Ramdeobaba University</b><br />Ramdas Peth, Katol Road, Nagpur-440013</span>
            </address>
            <a href="mailto:gdsc@rknec.edu" className="neo flex gap-2 rounded bg-yellow-400 p-3 font-bold text-black">
              <Mail size={14} /> gdsc@rknec.edu
            </a>
          </div>
          <div className="neo rounded bg-indigo-400 p-3 text-center font-bold text-black">Follow Us:</div>
        </div>
      </div>
      <Image src="/shapes.png" alt="" width={1440} height={80} className="mt-6 h-auto w-full" />
    </footer>
  );
}