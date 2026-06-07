import LeaderCard from "./LeaderCard";

export default function CurrentLeadership() {
  const leaders = [
    {
      name: "Abubakar Abdullahi Ibrahim",
      role: "President",
      photo: "/president.png",
      instagram: "",
      facebook: "",
      twitter: "",
    },
  ];
  return (
    <section className="py-8">
      <div className="flex justify-center">
        <span className="inline-block rounded-full border border-primary bg-secondary/20 px-4 py-2.5 text-lg font-montserrat font-medium text-primary">
          Current Leadership
        </span>
      </div>
      <p className="mt-4 text-center text-2xl md:text-[32px] lg:text-4xl text-black font-montserrat font-medium">
        The team driving excellence, leadership, and impact within UDUMSA.
      </p>
      <div className="grid gap-8 mt-12 grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))]">
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
      </div>
    </section>
  );
}
