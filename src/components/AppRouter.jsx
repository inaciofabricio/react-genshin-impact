import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Personagens from "../pages/Personagens";
import Personagem from "../pages/Personagem";
import Armas from "../pages/Armas";
import Arma from "../pages/Arma";
import Artefatos from "../pages/Artefatos";
import Artefato from "../pages/Artefato";
import Alimentos from "../pages/Alimentos";
import Alimento from "../pages/Alimento";
import Materiais from "../pages/Materiais";
import Material from "../pages/Material";
import Nacoes from "../pages/Nacoes";
import Nacao from "../pages/Nacao";

const AppRouters = () => {
    let routes = useRoutes([
        { path: "/", element: <Personagens /> },
        { path: "/personagem/:id", element: <Personagem /> },
        { path: "/armas", element: <Armas /> },
        { path: "/arma/:id", element: <Arma /> },
        { path: "/artefatos", element: <Artefatos /> },
        { path: "/artefato/:id", element: <Artefato /> },
        { path: "/alimentos", element: <Alimentos /> },
        { path: "/alimento/:id", element: <Alimento /> },
        { path: "/materiais", element: <Materiais /> },
        { path: "/material/:id", element: <Material /> },
        { path: "/nacoes", element: <Nacoes /> },
        { path: "/nacao/:id", element: <Nacao /> }
    ]);
    return routes;
  };

const AppRouter = () => {

    return (
        <Router>
            <Header />
            <main>
                <AppRouters />
            </main>
            <Footer />
        </Router>
    )
};

export default AppRouter;