import { BrowserRouter,Route, Routes } from "react-router-dom";
import HouseDetailsPages from "./pages/HouseDetailsPages";
import CharactersPage from "./pages/CharactersPage";


const App = () => {
    return (


                <BrowserRouter>
                    <Routes>
                            <Route  path='/*' element={<CharactersPage />}/>
                            <Route path='/house' element={<HouseDetailsPages />}/>
                    </Routes>
                </BrowserRouter>
    );
}

export default App;
