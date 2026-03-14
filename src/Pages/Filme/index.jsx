import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api";
import Loading from "../../components/Loading";

function Filme(){
    const { id } = useParams()

    const [filme, setFilme] = useState({})

    const [loading,setLoading] = useState(true)

    useEffect(() => {

        async function loadMovies() {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"dcb76df33091fa15f19b2ad0086ae043",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                
            })
        }
        loadMovies()
    }, [])

    if(loading){
        <Loading/>
    }

    return(
        <div className="flex flex-col max-w-200 px-2 my-0 mx-auto items-center">
            <h1 className="my-3.5 font-bold text-3xl">
                {filme.title}
            </h1>

            <img className="rounded-lg w-225 max-w-full max-h-85 object-cover" 
            src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="" />
            <h3 className="font-bold text-xl mt-2 text-center">
                Sinopse
            </h3>
            <span className="my-2 font-medium text-center">
                {filme.overview}
            </span>
            <strong>Avaliação: {filme.vote_average?.toFixed(1)} / 10</strong>
            
            <div className="mt-3 ml-0 text-xl ">
                <button className="mr-3 mb-3 border-0 p-3 bg-[#116FEB] rounded-sm cursor-pointer  hover:bg-[#085bc7] ease-in-out duration-300">Salvar</button>
                <button className="border-0 p-3 bg-[#116FEB] rounded-sm cursor-pointer hover:bg-[#085bc7] ease-in-out duration-300">
                    <a href={filme.homepage}>Trailer</a>
                </button>
            </div>
                
        </div>
    )
    
}

export default Filme;