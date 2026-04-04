import { useEffect, useState } from "react";
import api from "@/service/api";
import { Link } from "react-router-dom";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

function Marqueeloads() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function loadGenres() {
      const response = await api.get("genre/movie/list", {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          language: "pt-BR",
        },
      });

      setGenres(response.data.genres);
    }
    loadGenres();
  }, []);

  return (
    <>
      <Marquee className="flex size-full items-center justify-center bg-blue-400">
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {genres.map((genre) => (
            <MarqueeItem
              className="mx-4 px-3 py-2 font-medium text-white"
              key={genre.id}
            >
              <Link to={`/filmgenre/${genre.id}/${genre.name}`}>
                {genre.name}
              </Link>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </>
  );
}

export default Marqueeloads;
