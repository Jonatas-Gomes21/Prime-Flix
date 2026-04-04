import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "@/service/api";
import Loading from "../Loading";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardImage() {
  const [loading, setLoading] = useState(true);
  const [card, setcard] = useState([]);

  useEffect(() => {
    async function loadCard() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          language: "pt-BR",
        },
      });

      const allmovies = response.data.results;

      const validmovie = allmovies.filter(
        (movie) => movie.overview && movie.overview.trim() !== "",
      );

      setcard(validmovie.slice(0, 9));
      setLoading(false);
    }
    loadCard();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {card.map((movie) => (
        <Card
          key={movie.id}
          className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full overflow-hidden"
        >
          <img
            className="object-cover w-full"
            src={
              `https://image.tmdb.org/t/p/w500/${movie.poster_path}` ||
              "Imagem Não Disponivel"
            }
            alt={movie.title}
          />

          <CardHeader className="grow">
            <CardAction>
              <Badge variant="secondary">
                ⭐ Nota {movie.vote_average.toFixed(1)} / 10
              </Badge>
            </CardAction>
            <CardTitle className="text-[15px]">
              {movie.title || "Titulo não disponível."}
            </CardTitle>
            <CardDescription className="line-clamp-4">
              {movie.overview || "Sinopse Não Disponivel"}
            </CardDescription>
          </CardHeader>

          <CardFooter className="mt-auto">
            <Link to={`/filme/${movie.id}`} className="w-full">
              <Button className="w-full text-[15px] bg-[#116FEB] cursor-pointer hover:bg-[#085bc7]">
                Ver Filme
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardImage;
