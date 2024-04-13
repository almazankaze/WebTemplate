import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/errors/NotFound";

import Navigation from "./components/nav/Navigation";
import ScrollToTop from "./utils/ScrollToTop";
import DisableContainer from "./components/disable/DisableContainer";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";
import Spinner from "./components/spinner/Spinner";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <ScrollToTop>
        <DisableContainer />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <Footer />
        <ScrollUp />
      </ScrollToTop>
    </div>
  );
}

export default App;
