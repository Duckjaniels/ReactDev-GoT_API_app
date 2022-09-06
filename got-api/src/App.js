import { BrowserRouter,Route, Routes } from "react-router-dom";
import HouseDetailsPages from "./pages/HouseDetailsPages";
import CharactersPage from "./pages/CharactersPage";


const App = () => {
    return (


                <BrowserRouter>
                    <Routes>
                            <Route  path='/characters' element={<CharactersPage />}/>
                            <Route path='/houses' element={<HouseDetailsPages />}/>
                    </Routes>
                </BrowserRouter>
    );
}

export default App;
