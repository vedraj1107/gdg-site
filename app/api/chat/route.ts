import { NextResponse } from "next/server";

const CONTEXT = `You are the assistant for Google Developer Groups (GDG) on campus at Ramdeobaba University, Nagpur. Answer briefly about GDG RBU, its upcoming event (GDG Orientation, Oct 7, 2025, 3:00 PM), how to join, and contact (gdsc@rknec.edu). If unsure, say so.`;

const MODELS = ["gemini-flash-latest", "gemini-2.5-flash", "gemini-2.5-flash-lite"];

async function ask(model: string, message: string) {
  return fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": process.env.GEMINI_API_KEY as string,
    },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: CONTEXT }] },
      contents: [{ role: "user", parts: [{ text: message.slice(0, 500) }] }],
    }),
  });
}

export async function POST(req: Request) {
  const { message } = await req.json();
  if (!message || typeof message !== "string") {
    return NextResponse.json({ reply: "Ask me something!" }, { status: 400 });
  }
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ reply: "Server error: GEMINI_API_KEY missing." });
  }

  for (const model of MODELS) {
    for (let attempt = 0; attempt < 2; attempt++) {
      const res = await ask(model, message);
      if (res.ok) {
        const data = await res.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) return NextResponse.json({ reply });
      }
      if (res.status !== 503 && res.status !== 429 && res.status !== 404) break;
      await new Promise((r) => setTimeout(r, 800));
    }
  }
  return NextResponse.json({ reply: "The AI is busy right now. Please try again in a minute." });
}s