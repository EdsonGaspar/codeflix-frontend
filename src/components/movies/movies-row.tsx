import Image from "next/image";
import { file } from "@/utils/imagens";
import type { TitleSectionMoviesProps } from "@/utils/title-section";
import { H2 } from "../h2";

export function MoviesRow({ title }: TitleSectionMoviesProps) {
  return (
    <ul className="overflow-x-auto scroll-smooth whitespace-nowrap bg-transparent">
      <H2>{title}</H2>
      {file.map((items) => {
        return (
          <li className="inline-block " key={items.name}>
            <Image alt={items.name} src={items.image} />
          </li>
        );
      })}
    </ul>
  );
}
