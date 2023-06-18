import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Navigation from "./components/Navigation";


interface IRouterProps {
    
}

function Router({}: IRouterProps) {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Coins />} />
                <Route path="/:coinId/*" element={<Coin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;