import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Emptyfavorites() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col items-center w-full max-w-lg">
        <div className="text-6xl mb-4 animate-pulse">🍿</div>

        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-white">
          Nenhum filme salvo ainda
        </h1>

        <p className="text-gray-300 mb-6 max-w-md">
          Você ainda não adicionou filmes aos favoritos. Explore e salve seus
          filmes preferidos para ver aqui.
        </p>

        <Link to="/">
          <Button className="bg-[#116FEB] hover:bg-[#085bc7] px-6 py-2 text-white">
            Explorar filmes
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Emptyfavorites;
