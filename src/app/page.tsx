import Image from "next/image";
import { Header } from "@/components/header/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container relative mx-auto border">
      <section className="relative flex h-full flex-col md:h-[65vh] md:justify-end lg:h-[80vh]">
        <div>
          <Header />
        </div>
        <div className="space-y-5 px-5 py-52 md:space-y-8 md:px-8 md:py-16 lg:space-y-14">
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
            <Button>Assistir</Button>
            <Button variant={"outline"}>Informações</Button>
          </aside>
        </div>
      </section>
      <section>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
        aspernatur repellendus adipisci assumenda, porro possimus amet esse
        fuga? Ad earum doloremque obcaecati eligendi autem distinctio,
        necessitatibus quod aliquid inventore animi? Lorem ipsum dolor sit amet
        consectetur, <br /> adipisicing elit. Assumenda porro obcaecati error
        natus recusandae neque dicta eligendi? Quos minus sed accusantium alias
        delectus eos est incidunt rem. Veritatis, porro <br /> iusto!Lorem Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Magnam consequuntur
        alias necessitatibus et in voluptas recusandae consectetur temporibus
        error natus a, sunt ea corrupti, optio nam! Labore alias doloremque
        officia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
        aspernatur repellendus adipisci assumenda, porro possimus amet esse
        fuga? Ad earum doloremque obcaecati eligendi autem distinctio,
        necessitatibus quod aliquid inventore animi? Lorem ipsum dolor sit amet
        consectetur, <br /> adipisicing elit. Assumenda porro obcaecati error
        natus recusandae neque dicta eligendi? Quos minus sed accusantium alias
        delectus eos est incidunt rem. Veritatis, porro <br /> iusto!Lorem Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Magnam consequuntur
        alias necessitatibus et in voluptas recusandae consectetur temporibus
        error natus a, sunt ea corrupti, optio nam! Labore alias doloremque
        officia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
        aspernatur repellendus adipisci assumenda, porro possimus amet esse
        fuga? Ad earum doloremque obcaecati eligendi autem distinctio,
        necessitatibus quod aliquid inventore animi? Lorem ipsum dolor sit amet
        consectetur, <br /> adipisicing elit. Assumenda porro obcaecati error
        natus recusandae neque dicta eligendi? Quos minus sed accusantium alias
        delectus eos est incidunt rem. Veritatis, porro <br /> iusto!Lorem Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Magnam consequuntur
        alias necessitatibus et in voluptas recusandae consectetur temporibus
        error natus a, sunt ea corrupti, optio nam! Labore alias doloremque
        officia.
      </section>
    </div>
  );
}
