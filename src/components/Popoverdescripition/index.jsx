import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "@/service/api";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

function Popoverdescripition() {
  const { id } = useParams();
  const [description, setDescripiton] = useState({});

  useEffect(() => {
    async function loaddescripition() {
      const response = await api.get(`/movie/${id}`, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          language: "pt-BR",
        },
      });

      setDescripiton(response.data);
    }

    loaddescripition();
  }, [id]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="mt-2.5 text-white bg-[#116FEB] hover:bg-[#085bc7] cursor-pointer"
          variant="default"
        >
          Clique aqui para ver a Sinopse
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-full max-w-xs p-4 max-h-75 overflow-y-auto sm:max-w-sm md:max-w-md"
      >
        <PopoverHeader>
          <PopoverTitle>
            <div className="text-sm font-semibold uppercase">
              {description.title}
            </div>
          </PopoverTitle>
          <PopoverDescription className="text-sm leading-relaxed wrap-break-word text-black">
            {description.overview || "Descrição não disponível."}
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

export default Popoverdescripition;
