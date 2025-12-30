import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./pages/Master";
import Home from "./pages/Home";
import Listadedesejos from "./pages/Listadedesejos";
import Perguntasfrequentes from "./pages/Perguntasfrequentes";
import Grupos from "./pages/Grupos";
import Notfound from "./pages/Notfound";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route index element={<Home />} />
            <Route path="/Listadedesejos" element={<Listadedesejos />} />
            <Route
              path="/Perguntasfrequentes"
              element={<Perguntasfrequentes />}
            />
            <Route path="/Grupos" element={<Grupos />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
