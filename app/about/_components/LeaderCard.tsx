import Image from "next/image";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Leader = {
  name: string;
  role: string;
  photo: string;
  instagram: string;
  facebook: string;
  twitter: string;
};

export default function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="p-8 bg-[#F1F1F1] rounded-2xl shadow-[0px_2px_4px_0px_#00000040] text-center">
      <Image
        width={200}
        height={200}
        className="rounded-[50%] w-[200px] h-[200px] object-cover mx-auto"
        src={leader.photo}
        alt=""
      />
      <h4 className="mt-8 text-lg font-bold">{leader.name}</h4>
      <p className="italic text-lg mt-2">{leader.role}</p>
      <div className="flex items-center gap-4 mt-4 justify-center">
        <a href={leader.instagram} target="_blank">
          <FaInstagramSquare
            size={30}
            className="fill-primary text-primary shadow-[0px_2px_4px_0px_#00000040]"
          />
        </a>
        <a
          href={leader.facebook}
          target="_blank"
          className="shadow-[0px_2px_4px_0px_#00000040] bg-white w-[30px] h-[30px] flex items-center justify-center rounded-full"
        >
          <FaFacebookF size={25} className="text-[#0E538C]" />
        </a>
        <a
          href={leader.twitter}
          target="_blank"
          className="shadow-[0px_2px_4px_0px_#00000040] bg-white w-[30px] h-[30px] flex items-center justify-center rounded-full"
        >
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
}
