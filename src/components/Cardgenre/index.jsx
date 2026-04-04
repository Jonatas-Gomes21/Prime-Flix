import { useState, useEffect } from "react";
import api from "@/service/api";
import { useParams, Link } from "react-router-dom";
import Loading from "../Loading";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Cardgenre() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function loadgenre() {
      const response = await api.get("discover/movie", {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          language: "pt-BR",
          with_genres: id,
        },
      });

      setFilmes(response.data.results.slice(0, 6));
      setLoading(false);
    }

    loadgenre();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {filmes.map((filme) => (
          <Card
            key={filme.id}
            className="flex flex-col overflow-auto mx-auto w-full max-w-sm h-full"
          >
            <img
              className="object-cover h-137.5"
              src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
              alt={filme.title}
            />

            <CardHeader className="flex flex-col gap-3 flex-1">
              <Badge variant="secondary" className="w-fit">
                ⭐ Nota {filme.vote_average.toFixed(1)} / 10
              </Badge>

              <CardTitle className="text-[15px] line-clamp-2">
                {filme.title}
              </CardTitle>

              <CardDescription className="text-sm line-clamp-4">
                {filme.overview || "Sinopse não disponível."}
              </CardDescription>
            </CardHeader>

            <CardFooter className="mt-auto">
              <Link to={`/filme/${filme.id}`} className="w-full">
                <Button className="w-full text-[15px] bg-[#116FEB] hover:bg-[#085bc7] cursor-pointer">
                  Ver Filme
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
        <div className="w-335 max-w-full flex justify-center m-2">
          <Link to={"/"}>
            <Button
              variant={"default"}
              className="py-3.5 px-4 cursor-pointer bg-white text-black uppercase font-bold text-[15px]"
            >
              Retorna a pagina inicial
            </Button>
          </Link>
        </div>
    </>
  );
}

export default Cardgenre;
