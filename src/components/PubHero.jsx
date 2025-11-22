export default function PubHero() {
  return (
    <section id="home" className="relative bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1c2a]/80 via-[#0b1c2a]/70 to-[#0b1c2a]/80" />
      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
        <h1 className="font-serif text-4xl md:text-6xl text-cream drop-shadow-lg">The Whalebone Inn</h1>
        <p className="mt-4 text-cream/90 text-lg md:text-2xl">Good ales, great food, and a warm welcome.</p>
        <p className="mt-6 max-w-2xl mx-auto text-cream/80">A friendly, locally loved inn serving hearty meals and coastal classics in a relaxed, family-friendly atmosphere.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#menu" className="rounded-full bg-[#c7a97b] text-[#0b1c2a] px-6 py-3 font-medium shadow hover:shadow-md">View Menu</a>
          <a href="#contact" className="rounded-full border border-cream/40 text-cream px-6 py-3 font-medium hover:bg-cream/10">Reserve a Table</a>
        </div>
      </div>
    </section>
  );
}
