"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

type Msg = { from: "user" | "bot"; text: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: "Hi! Ask me anything about GDG RBU." }]);
  const [loading, setLoading] = useState(false);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMsgs((m) => [...m, { from: "user", text }]);
    setLoading(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const { reply } = await r.json();
      setMsgs((m) => [...m, { from: "bot", text: reply }]);
    } catch {
      setMsgs((m) => [...m, { from: "bot", text: "Network error." }]);
    }
    setLoading(false);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16 }}
            className="neo mb-3 flex h-80 w-72 flex-col rounded-lg bg-[var(--card)] sm:w-80"
          >
            <div className="flex items-center justify-between border-b-2 border-[var(--ink)] bg-yellow-400 px-3 py-2 text-xs font-bold text-black">
              Ask GDG AI
              <button aria-label="Close chat" onClick={() => setOpen(false)}><X size={14} /></button>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto p-3 text-xs">
              {msgs.map((m, i) => (
                <p key={i} className={`max-w-[85%] rounded px-2 py-1 ${m.from === "user" ? "ml-auto bg-blue-400 text-black" : "bg-black/10 dark:bg-white/10"}`}>
                  {m.text}
                </p>
              ))}
              {loading && <p className="opacity-60">Thinking...</p>}
            </div>
            <div className="flex gap-2 border-t-2 border-[var(--ink)] p-2">
              <input
                value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type here..." className="min-w-0 flex-1 bg-transparent text-xs outline-none"
              />
              <button aria-label="Send" onClick={send}><Send size={16} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        aria-label="Open chat" onClick={() => setOpen(!open)}
        className="neo ml-auto grid h-12 w-12 place-items-center rounded-full bg-yellow-400 text-black transition hover:-translate-y-1"
      >
        <MessageCircle size={20} />
      </button>
    </div>
  );
}