import EventsCarousel from "./_components/EventsCarousel";
import OurEvents from "./_components/OurEvents";

export default function NewsAndEvents() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <section>
        <h1 className="font-montserrat font-semibold text-black text-[32px]">
          Upcoming Events
        </h1>
        <EventsCarousel />
      </section>
      <OurEvents />
    </main>
  );
}
