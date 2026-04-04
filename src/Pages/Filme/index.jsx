import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../service/api";
import Loading from "../../components/Loading";
import Filmdescripition from "../../components/Filmdescripition";

function Filme() {
  const { id } = useParams();

  const navegation = useNavigate();

  const [filme, setFilme] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navegation("/", { replace: true });
          return;
        });
    }
    loadMovies();
  }, [navegation, id]);

  if (loading) {
    <Loading />;
  }

  return (
    <>
      <div className="w-full h-153.75 flex justify-center items-center">
        <Filmdescripition />
      </div>
    </>
  );
}

export default Filme;
