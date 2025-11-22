import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-emerald-900/70">© {new Date().getFullYear()} GreenNest Garden Services. All rights reserved.</p>
          <p className="text-sm text-emerald-900/70">Local gardening service • Garden maintenance • Lawn care • Eco‑friendly landscaping</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
