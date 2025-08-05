import { MoviesCol } from "./movies-col";
import { MoviesRow } from "./movies-row";

export function Movies() {
  return (
    <div className="space-y-10">
      <MoviesRow title="Recomendados" />
      <MoviesCol title="Novos Lançamentos" />
    </div>
  );
}
