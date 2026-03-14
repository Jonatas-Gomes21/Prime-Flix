import {Link} from 'react-router-dom'

function Header() {
    return(
        <header className="bg-black w-full h-16 flex justify-between items-center max-md:w-auto">
            <Link className="w-60 cursor-pointer ml-3.5 hover:animate-pulse" to={'/'}><img src="/src/assets/Logo.png" alt="" /></Link>
            <Link to={'/favoritos'} className="bg-white py-1.5 px-3.5 mr-6 rounded-4xl cursor-pointer text-black font-medium hover:bg-gray-200 ease-in-out duration-200 ">Meus Filmes</Link>
        </header>
    )
    
}

export default Header;