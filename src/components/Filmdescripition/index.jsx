import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "@/service/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Loading from "../Loading";
import Popoverdescripition from "../../components/Popoverdescripition";
import { toast } from "sonner";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardImage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadmovies() {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            language: "pt-BR",
          },
        });

        setMovie(response.data);
      } catch (error) {
        console.error("Erro ao carregar filme:", error);
      } finally {
        setLoading(false);
      }
    }

    loadmovies();
  }, [id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@filmes");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === movie.id,
    );

    if (hasFilme) {
      toast.warning(`🎬 Esse filme já está na sua lista de favoritos.`, {
        id: "alert-movie",
        action: {
          label: "Fechar",
          onClick: () => {},
        },
      });
      return;
    }

    filmesSalvos.push(movie);
    localStorage.setItem("@filmes", JSON.stringify(filmesSalvos));

    toast.success(
      `🎬 ${movie.title} foi salvo com sucesso na sua lista de favoritos!`,
      {
        id: "save-movie",
        action: {
          label: "Fechar",
          onClick: () => {},
        },
      },
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4">
      <Card className="w-full max-w-2xl pt-0">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-50 sm:h-75 object-cover"
        />

        <CardHeader>
          <CardAction>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Badge
                className="text-sm sm:text-base bg-gray-200"
                variant="outline"
              >
                ⭐ Nota {movie.vote_average.toFixed(1)} / 10
              </Badge>
            </div>
          </CardAction>

          <CardTitle className="text-lg sm:text-xl  sm:text-left">
            {movie.title || "Titulo Não disponivel"}
          </CardTitle>

          <CardDescription>
            <Popoverdescripition />
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <div className="w-full flex flex-col sm:flex-row gap-3 sm:justify-around">
            <a
              href={`https://www.youtube.com/results?search_query=${movie.title} Trailer`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-40 bg-[#116FEB] hover:bg-[#085bc7] cursor-pointer">
                Trailer
              </Button>
            </a>

            <Button
              onClick={salvarFilme}
              className="w-full sm:w-40 bg-[#116FEB] hover:bg-[#085bc7] cursor-pointer"
            >
              Salvar Filme
            </Button>

            <Link to={"/"}>
              <Button className="w-full sm:w-40 bg-[#116FEB] hover:bg-[#085bc7] cursor-pointer">
                Página Inicial
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CardImage;
