import { Routes, Route, Link } from "react-router-dom";
import PubNavbar from './components/PubNavbar';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import DrinksPage from './pages/Drinks';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0b1c2a]">
      <PubNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer className="border-t border-[#0b1c2a]/10 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center space-y-2">
          <p className="font-serif text-lg text-[#0b1c2a]">The Whalebone Inn</p>
          <p className="text-sm text-[#0b1c2a]/70">Traditional pub dining • Local pub food • Steakhouse • Seafood pub • Family-friendly inn</p>
          <p className="text-xs text-[#0b1c2a]/50">© {new Date().getFullYear()} The Whalebone Inn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
