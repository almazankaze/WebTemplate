import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound from "./pages/errors/NotFound";

import Navigation from "./components/nav/Navigation";
import ScrollToTop from "./utils/ScrollToTop";
import Spinner from "./components/spinner/Spinner";

import "./App.scss";

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
