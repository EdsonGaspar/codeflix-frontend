import Image from "next/image";
import type { Movie } from "@/types/movie";

export function Banner({ movie }: { movie: Movie }) {
  return (
    <aside className="space-y-2.5">
      <Image
        alt={movie.title}
        className="-z-10 object-cover object-top"
        fill
        src={movie.bannerFileURL}
      />
      <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
        {movie.title}
      </h2>
      <p className="md:w-xl lg:w-xl">{movie.description}</p>
    </aside>
  );
}
