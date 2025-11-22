import { Link } from "react-router-dom";
import PubHero from "../components/PubHero";
import PubAbout from "../components/PubAbout";

export default function Home() {
  return (
    <div>
      <PubHero />
      <PubAbout />

      {/* Highlights strip */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-[#0b1c2a]/10 bg-cream/50">
            <h3 className="font-serif text-xl text-[#0b1c2a]">Chef's Specials</h3>
            <ul className="mt-3 space-y-2 text-[#0b1c2a]/80 text-sm">
              <li>• Pan-seared Sea Bass with lemon caper butter</li>
              <li>• Homemade Steak & Ale Pie (limited daily)</li>
              <li>• Sunday Roast from 12–4 PM</li>
            </ul>
            <Link to="/menu" className="inline-block mt-4 text-[#0b1c2a] hover:text-[#c7a97b] font-medium">View full menu →</Link>
          </div>
          <div className="p-6 rounded-xl border border-[#0b1c2a]/10 bg-cream/50">
            <h3 className="font-serif text-xl text-[#0b1c2a]">Real Ales & Ciders</h3>
            <p className="mt-3 text-[#0b1c2a]/80 text-sm">A rotating line-up from local breweries plus classic lagers, wines, and softs.</p>
            <Link to="/drinks" className="inline-block mt-4 text-[#0b1c2a] hover:text-[#c7a97b] font-medium">Explore drinks →</Link>
          </div>
          <div className="p-6 rounded-xl border border-[#0b1c2a]/10 bg-cream/50">
            <h3 className="font-serif text-xl text-[#0b1c2a]">Family-Friendly Inn</h3>
            <p className="mt-3 text-[#0b1c2a]/80 text-sm">Highchairs, kids’ portions, and cosy corners. Dogs welcome in the bar area.</p>
            <Link to="/contact" className="inline-block mt-4 text-[#0b1c2a] hover:text-[#c7a97b] font-medium">Book a table →</Link>
          </div>
        </div>
      </section>

      {/* Menu & Drinks teasers */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-serif text-3xl text-[#0b1c2a]">Favourites from the Kitchen</h2>
            <ul className="mt-4 space-y-3 text-[#0b1c2a]">
              <li className="flex items-center justify-between border-b border-[#0b1c2a]/10 pb-2"><span>Beer-Battered Cod & Chips</span><span className="font-semibold">£13.95</span></li>
              <li className="flex items-center justify-between border-b border-[#0b1c2a]/10 pb-2"><span>Classic Beef Burger</span><span className="font-semibold">£12.50</span></li>
              <li className="flex items-center justify-between border-b border-[#0b1c2a]/10 pb-2"><span>8oz Ribeye</span><span className="font-semibold">£21.95</span></li>
            </ul>
            <Link to="/menu" className="inline-block mt-5 rounded-full bg-[#0b1c2a] text-cream px-5 py-2 shadow hover:shadow-md">See full menu</Link>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-[#0b1c2a]">From the Bar</h2>
            <div className="mt-4 p-5 border border-[#0b1c2a]/10 rounded-xl bg-white/70">
              <p className="text-[#0b1c2a]">Guest Ale of the Week: <span className="font-semibold">Ask at the bar</span> for today’s pick.</p>
            </div>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-[#0b1c2a]/90 text-sm">
              <li>• Local real ales (rotating)</li>
              <li>• Draft lagers</li>
              <li>• House wines</li>
              <li>• Zero-alcohol options</li>
            </ul>
            <Link to="/drinks" className="inline-block mt-5 rounded-full border border-[#0b1c2a] text-[#0b1c2a] px-5 py-2 hover:bg-[#0b1c2a] hover:text-cream">Browse drinks</Link>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-3xl text-[#0b1c2a]">Hours & Location</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[#0b1c2a]/80 text-sm">
              <span>Mon–Thu</span><span className="text-right">12:00 – 23:00</span>
              <span>Fri–Sat</span><span className="text-right">12:00 – 00:00</span>
              <span>Sunday</span><span className="text-right">12:00 – 22:00</span>
              <span>Kitchen</span><span className="text-right">until 21:00 daily</span>
            </div>
            <p className="mt-4 text-[#0b1c2a]">14 Mariners Lane, Whitestone, WS2 7BT</p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="rounded-full bg-[#0b1c2a] text-cream px-5 py-2">Reserve a Table</Link>
              <a href="#" className="rounded-full border border-[#0b1c2a]/30 text-[#0b1c2a] px-5 py-2">Get Directions</a>
            </div>
          </div>
          <div>
            <img className="w-full h-72 object-cover rounded-xl shadow" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop" alt="Map placeholder" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl text-[#0b1c2a] text-center">What Guests Say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["Best fish and chips in town!","Cosy, friendly, and great ales.","Perfect Sunday roast for the family."].map((quote, i) => (
              <div key={i} className="rounded-xl bg-white p-6 shadow border border-[#0b1c2a]/10">
                <p className="text-[#0b1c2a]">“{quote}”</p>
                <p className="mt-3 text-sm text-[#0b1c2a]/60">— Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0b1c2a]">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="font-serif text-3xl text-cream">Book Your Table</h2>
          <p className="mt-2 text-cream/80">Traditional pub dining, local pub food, and a warm welcome.</p>
          <Link to="/contact" className="inline-block mt-6 rounded-full bg-[#c7a97b] text-[#0b1c2a] px-6 py-3 font-medium shadow hover:shadow-md">Reserve now</Link>
        </div>
      </section>
    </div>
  );
}
