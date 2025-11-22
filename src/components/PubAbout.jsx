export default function PubAbout() {
  return (
    <section id="about" className="bg-cream text-[#0b1c2a]">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl">About the Pub</h2>
          <p className="text-[#0b1c2a]/80">A cozy, historic inn with a subtle maritime character—think brass details, weathered wood, and a hint of sea air. We cook with locally sourced ingredients and serve generous portions fresh from the kitchen.</p>
          <ul className="grid sm:grid-cols-2 gap-3 text-[#0b1c2a]/80">
            <li>• Rotating real ales, ciders, and classic pub beverages</li>
            <li>• Family-friendly dining and relaxed nooks</li>
            <li>• Seasonal specials and coastal favorites</li>
            <li>• Warm service and a community spirit</li>
          </ul>
        </div>
        <div>
          <img className="w-full h-72 object-cover rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2069&auto=format&fit=crop" alt="Rustic pub interior" />
        </div>
      </div>
    </section>
  );
}
