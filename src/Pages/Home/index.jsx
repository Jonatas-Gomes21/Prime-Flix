import api from '../../service/api'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Loading from '../../components/Loading'


function Home(){

    const [filme,setFilme] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes() {
            
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "dcb76df33091fa15f19b2ad0086ae043",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilme(response.data.results.slice(0,8))
            setLoading(false)

        }

        loadFilmes()
    }, [])
    
    if(loading){
        return(
            <Loading/>
        )
    }

    return(
        <div className="flex flex-col justify-center items-center w-full">
            {filme.map((filme) => {
                return(
                <div key={filme.id} className="max-w-200 my-3.5 mx-auto">
                    <article className="w-full bg-white rounded-sm p-3.75 "> 
                            <span className="block text-center mb-3.5 text-[22px] uppercase font-medium">
                                {filme.title}
                            </span>
                        <img className="w-225 max-w-full max-h-85 object-cover rounded-t-lg" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                        <Link className="flex justify-center items-center py-2.5 text-2xl bg-[#116FEB] text-white rounded-b-lg hover:bg-[#085bc7]" to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                 </div>
                )
            })}
        </div>
    )
}

export default Home;