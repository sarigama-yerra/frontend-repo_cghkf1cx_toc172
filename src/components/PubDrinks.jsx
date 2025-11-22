export default function PubDrinks() {
  return (
    <section id="drinks" className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-[#0b1c2a]">Drinks</h2>
          <p className="text-[#0b1c2a]/70">Rotating local ales and ciders, classic lagers, a thoughtful wine list, and soft drinks for all ages.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl text-[#0b1c2a]">Ales & Ciders</h3>
            <ul className="mt-3 space-y-2 text-[#0b1c2a]/80">
              <li>• Local Real Ales (rotating)</li>
              <li>• Guest Cider (dry or medium)</li>
              <li>• Seasonal Amber & Pale</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-[#0b1c2a]">Lagers & Wines</h3>
            <ul className="mt-3 space-y-2 text-[#0b1c2a]/80">
              <li>• Classic Lagers on Draft</li>
              <li>• House Red, White & Rosé</li>
              <li>• Sparkling (by the glass)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-[#0b1c2a]">Softs & Hot Drinks</h3>
            <ul className="mt-3 space-y-2 text-[#0b1c2a]/80">
              <li>• Pressed Juices & Fizz</li>
              <li>• Zero-alcohol options</li>
              <li>• Tea & Barista Coffee</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 p-5 border border-[#0b1c2a]/10 rounded-xl bg-white/60 text-center">
          <p className="text-[#0b1c2a]">Guest Ale of the Week: <span className="font-semibold">Ask at the bar</span> for today's pick.</p>
        </div>
      </div>
    </section>
  );
}
