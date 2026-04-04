import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Cardfavorite({ movie, onRemove }) {
  return (
    <Card className="w-full max-w-50 mx-auto">
      <CardHeader>
        <CardTitle className="text-sm text-center line-clamp-2">
          {movie.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="rounded-xl w-full h-60 object-cover"
        />
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Link to={`/filme/${movie.id}`} className="w-full">
          <Button className="w-full bg-[#116FEB] hover:bg-[#085bc7] text-xs">
            Ver detalhes
          </Button>
        </Link>

        <Button
          onClick={() => onRemove(movie)}
          className="w-full bg-red-500 hover:bg-red-700 text-xs"
        >
          Excluir
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Cardfavorite;
