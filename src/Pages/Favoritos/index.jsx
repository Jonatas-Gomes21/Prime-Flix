import Cardfavorite from "@/components/Cardfavorite";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Emptyfavorites from "@/components/Emptyfavorite";
import { toast } from "sonner";

function Favoritos() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const lista = localStorage.getItem("@filmes");
    setMovies(JSON.parse(lista) || []);
  }, []);

  function removerFilme(movie) {
    const novaLista = movies.filter((item) => item.id !== movie.id);
    setMovies(novaLista);
    localStorage.setItem("@filmes", JSON.stringify(novaLista));

    toast.success(
      `🎬 ${movie.title} foi excluído com sucesso da sua lista de favoritos!`,
      {
        id: "remove-movie",
        action: {
          label: "Fechar",
          onClick: () => {},
        },
      },
    );
  }

  if (movies.length === 0) {
    return <Emptyfavorites />;
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 my-4">
      <div className="flex justify-center items-center w-full mb-4">
        <Badge className="py-4 px-3 text-xl bg-white text-black font-bold">
          🎬 Meus filmes favoritos
        </Badge>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
        {movies.map((movie) => (
          <Cardfavorite key={movie.id} movie={movie} onRemove={removerFilme} />
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
