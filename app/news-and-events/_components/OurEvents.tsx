const events = [
  {
    photo: "/event-7.png",
    title: "Medical Quiz Competitions",
    description:
      "Medical Quiz Competitions organized by UDUMSA are academic events designed to challenge and enhance the knowledge base of medical students across various levels. These competitions bring together participants in a stimulating and intellectually engaging environment where they are tested on a wide range of medical subjects, clinical scenarios, and problem-solving exercises. ",
  },
  {
    photo: "/event-7.png",
    title: "Medical Quiz Competitions 2",
    description:
      "Medical Quiz Competitions organized by UDUMSA are academic events designed to challenge and enhance the knowledge base of medical students across various levels. These competitions bring together participants in a stimulating and intellectually engaging environment where they are tested on a wide range of medical subjects, clinical scenarios, and problem-solving exercises. ",
  },
];
export default function OurEvents() {
  return (
    <section className="py-8">
      <h2 className="font-montserrat text-[32px] font-medium">Our Events</h2>
      <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-8">
        {events.map((evt, index) => {
          if (index % 2 == 1) {
            return (
              <div
                key={evt.title}
                className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr] xl:grid-cols-[3fr_1fr] gap-4 sm:gap-8"
              >
                <div>
                  <h3 className="font-medium text-secondary text-2xl">
                    {evt.title}
                  </h3>
                  <p className="mt-2.5 text-black text-lg">{evt.description}</p>
                </div>
                <img
                  src={evt.photo}
                  alt=""
                  className="block aspect-square w-full rounded-lg"
                />
              </div>
            );
          }
          return (
            <div
              key={evt.title}
              className="grid sm:grid-cols-2 lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr] gap-4 sm:gap-8"
            >
              <img
                src={evt.photo}
                alt=""
                className="block aspect-square w-full rounded-lg"
              />
              <div>
                <h3 className="font-medium text-secondary text-2xl">
                  {evt.title}
                </h3>
                <p className="mt-2.5 text-black text-lg">{evt.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
