import Image from "next/image";
import explained from "../../../public/assets/explained.png";
import intoTheNight from "../../../public/assets/into-the-night.png";
import lastKingdom from "../../../public/assets/last-kingdom.png";
import lockKey from "../../../public/assets/lock-key.png";
import peakyBlinders from "../../../public/assets/peaky-blinders.png";
import queensGambit from "../../../public/assets/queens-gambit.png";
import socialDilemma from "../../../public/assets/social-dilemma.png";
import theCrown from "../../../public/assets/the-crown.png";
import theFive from "../../../public/assets/the-five.png";
import theUniverse from "../../../public/assets/the-universe.png";
import untitled from "../../../public/assets/Untitled.png";
import you from "../../../public/assets/you.png";

const file = [
  { name: "Explained", image: explained },
  { name: "Untitled", image: untitled },
  { name: "Into the night", image: intoTheNight },
  { name: "last Kingdom", image: lastKingdom },
  { name: "Lock key", image: lockKey },
  { name: "Peaky Blinders", image: peakyBlinders },
  { name: "Queens Gambit", image: queensGambit },
  { name: "Social Dilemma", image: socialDilemma },
  { name: "The Crown", image: theCrown },
  { name: "The Five", image: theFive },
  { name: "The Universe", image: theUniverse },
  { name: "You", image: you },
];
export function Movies() {
  return (
    <div>
      <ul className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {file.map((items) => {
          return (
            <li
              className="group relative flex cursor-pointer flex-col items-center border transition-all duration-300"
              key={items.name}
            >
              <span className=" absolute bottom-1 left-3 hidden group-hover:block">
                {items.name}
              </span>
              <Image alt="some" className="w-full md:w-fit" src={items.image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
