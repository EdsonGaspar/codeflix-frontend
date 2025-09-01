import { Info, Play } from "lucide-react";
import Link from "next/link";
import { Banner } from "@/components/banner/banner";
import { Header } from "@/components/header/header";
import { Movies } from "@/components/movies/movies";
import { Button } from "@/components/ui/button";
import { GetFeaturedMovie } from "@/server/move-service";

export default async function Home() {
  const featuredMovies = await GetFeaturedMovie("103");
  return (
    <div>
      <section className="relative flex h-full flex-col md:h-[65vh] md:justify-end lg:h-[80vh]">
        <div>
          <Header />
        </div>
        <div className="container mx-auto space-y-5 px-5 py-52 md:space-y-8 md:px-8 md:py-16 lg:space-y-14">
          <Banner movie={featuredMovies} />
          <aside className="flex flex-col gap-3 md:flex-row">
            <Link href={"../login"}>
              <Button className="h-10 w-full cursor-pointer text-lg md:w-52">
                {" "}
                <Play /> Assistir
              </Button>
            </Link>
            <Button
              className="h-10 cursor-pointer text-lg hover:text-secondary-foreground md:w-52"
              variant={"outline"}
            >
              {" "}
              <Info /> Informações
            </Button>
          </aside>
        </div>
      </section>
      <section className="container mx-auto px-5 py-3.5 md:my-7 md:px-8">
        <Movies />
      </section>
    </div>
  );
}
