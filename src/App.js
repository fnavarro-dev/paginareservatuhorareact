import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoPage, HomePage, HomePage2 } from "./pages";

const App = () => {
    return (
        //Desde el navegador
        <BrowserRouter>
            {/* Tendremos distintas rutas */}
            <Routes>
                {/* Especificamos cada ruta */}
                <Route path="/" element={<HomePage2 />} />
                <Route path="/Auto" element={<AutoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
