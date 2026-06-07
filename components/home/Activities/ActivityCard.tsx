import Image from "next/image";

type Props = {
  index: number;
  activity: Activity;
};

interface Activity {
  image: string;
  title: string;
  description: string;
}

export default function ActivityCard({ activity, index }: Props) {
  return (
    <div
      className={`flex flex-col font-inter items-center animate-[fade-up_0.6s_ease-out_0.3s_forwards]`}
    >
      <Image
        src={activity.image}
        alt={activity.title}
        className="object-cover rounded-2xl border-2 border-secondary"
        width={350}
        height={199}
      />

      <div className="activity-card -mt-20 max-w-full w-[330px] hover:-translate-y-1 duration-200 rounded-2xl p-4 text-center">
        <h3 className="text-base font-semibold text-secondary">
          {activity.title}
        </h3>
        <p className="mt-4 text-black">{activity.description}</p>
      </div>
    </div>
  );
}
