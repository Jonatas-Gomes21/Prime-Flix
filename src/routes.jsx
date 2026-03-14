import { BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home'
import Filmes from './Pages/Filme'
import Header from './components/Header'
import Favoritos from './Pages/Favoritos'

import Error from './Pages/Error'

function RouteApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/favoritos" element={<Favoritos/>} />
                <Route path="/filme/:id" element={<Filmes/>} />

                
                
                
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp