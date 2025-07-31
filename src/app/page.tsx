import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container relative mx-auto h-screen">
      <main className="flex h-full flex-col md:h-[65vh] md:justify-end lg:h-[80vh]">
        <div className="space-y-5 px-4 py-5 md:space-y-8 lg:space-y-14">
          <div className="space-y-2.5">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl">
              The Witcher
            </h2>
            <p className="md:w-xl lg:w-3xl">
              Geralt of Rivia, a solitary monster hunter, struggles to find his
              place in a world where people often prove more wicked than beasts.
            </p>
          </div>
          <div>
            <Button>Assistir</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
