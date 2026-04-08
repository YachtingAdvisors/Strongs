import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import PearlYachts from "@/pages/PearlYachts";
import ShopYachts from "@/pages/ShopYachts";
import VesselDetail from "@/pages/VesselDetail";
import Cruisers from "@/pages/Cruisers";
import Fairline from "@/pages/Fairline";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pearl-yachts" element={<PearlYachts />} />
          <Route path="/shop" element={<ShopYachts />} />
          <Route path="/vessel/:id" element={<VesselDetail />} />
          <Route path="/cruisers" element={<Cruisers />} />
          <Route path="/fairline" element={<Fairline />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
