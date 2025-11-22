export default function PubGallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1532634896-26909d0d4b6a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541795795328-2169569180f1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441123694162-e54a981ceba3?q=80&w=2070&auto=format&fit=crop",
  ];
  return (
    <section id="gallery" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-[#0b1c2a]">Gallery</h2>
          <p className="text-[#0b1c2a]/70">A glimpse of our rustic interior, pub garden, and hearty dishes.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <img key={i} src={src} alt="Pub scene" className="w-full h-52 object-cover rounded-xl shadow" />
          ))}
        </div>
      </div>
    </section>
  );
}
