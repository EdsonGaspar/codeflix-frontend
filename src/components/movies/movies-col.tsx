import Image from "next/image";
import { file } from "@/utils/imagens";
import type { TitleSectionMoviesProps } from "@/utils/title-section";
import { H2 } from "../h2";

export function MoviesCol({ title }: TitleSectionMoviesProps) {
  return (
    <div>
      <H2>{title}</H2>
      <ul className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {file.map((items) => {
          return (
            <li
              className="group relative flex cursor-pointer flex-col items-center border transition-all duration-300"
              key={items.name}
            >
              <span className=" absolute bottom-1 left-3 z-10 hidden group-hover:block">
                {items.name}
              </span>
              <Image
                alt="some"
                className="w-full transition-all duration-300 ease-in hover:scale-105 md:w-fit"
                src={items.image}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
