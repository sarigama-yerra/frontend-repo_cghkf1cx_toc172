export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-wide text-emerald-700/80">GreenNest Garden Services</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-emerald-950">
            Care for your outdoor space, crafted with skill and heart.
          </h1>
          <p className="mt-4 text-emerald-900/80 leading-relaxed">
            A local gardening service focused on clean, modern results you can trust. We bring steady care, eco‑friendly practices, and a friendly team to every visit.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-5 py-3 shadow-sm hover:bg-emerald-700 transition-colors">
              Get a Free Quote
            </a>
            <a href="#services" className="inline-flex items-center rounded-full border border-emerald-200 text-emerald-900 px-5 py-3 hover:bg-emerald-50">
              Explore Services
            </a>
          </div>
          <p className="mt-3 text-xs text-emerald-800/70">Average reply time: under 12 hours</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl shadow-emerald-900/5 border border-emerald-100" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-emerald-200/60 blur-2xl" />
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-emerald-300/60 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
