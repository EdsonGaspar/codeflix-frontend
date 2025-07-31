import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container relative mx-auto h-screen">
      <main className="relative flex h-full flex-col md:h-[65vh] md:justify-end lg:h-[80vh]">
        <div className="space-y-5 px-5 py-52 md:space-y-8 md:px-8 md:py-16 lg:space-y-14">
          <div className="space-y-2.5">
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
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Button>Assistir</Button>
            <Button variant={"outline"}>Informações</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
