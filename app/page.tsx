import ChatWidget from "@/components/ChatWidget";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-16 px-4 py-8">
        <Hero />
        <Events />
        <Team />
        <Faq />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}