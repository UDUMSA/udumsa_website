import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Activities from "@/components/home/Activities";
import Hero from "@/components/home/Hero";
import News from "@/components/home/News";
import Questions from "@/components/home/Questions";
import Testimonials from "@/components/home/Testimonials";
import Upcoming from "@/components/home/Upcoming";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <About />
      <Activities />
      <Upcoming />
      <News />
      <Testimonials />
      <Questions />
      <Contact />
    </main>
  );
}
