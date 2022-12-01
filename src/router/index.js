import { Route, BrowserRouter, Routes, Switch } from "react-router-dom";
import Inicio from '../pages/inicio';
import Planos from '../pages/planos';


function Router () {
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/"  element = { <Inicio /> } />
                <Route  path="/planos" element = { <Planos /> } />
            </Routes>
        </BrowserRouter>
    )
 }

 export default Router;