import { Info, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header/header";
import { Movies } from "@/components/movies/movies";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section className="relative flex h-full flex-col md:h-[65vh] md:justify-end lg:h-[80vh]">
        <div>
          <Header />
        </div>
        <div className="container mx-auto space-y-5 px-5 py-52 md:space-y-8 md:px-8 md:py-16 lg:space-y-14">
          <aside className="space-y-2.5">
            <Image
              alt="The Wicther"
              className="-z-10 object-cover object-top"
              fill
              src={"/assets/the-witcher.jpeg"}
            />
            <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
              The Witcher
            </h2>
            <p className="md:w-xl lg:w-xl">
              Geralt of Rivia, a solitary monster hunter, struggles to find his
              place in a world where people often prove more wicked than beasts.
            </p>
          </aside>
          <aside className="flex flex-col gap-3 md:flex-row">
            <Link href={"../login"}>
              <Button className="h-10 cursor-pointer text-lg md:w-52">
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
