const services = [
  {
    title: "Lawn Mowing & Edging",
    price: "$35–$60 per visit",
    desc: "Quick, neat cuts and clean edges. Pricing depends on yard size.",
  },
  {
    title: "Seasonal Garden Maintenance",
    price: "$90–$180 per session",
    desc: "Pruning, raking, tidy‑ups, and seasonal care to keep things looking fresh.",
  },
  {
    title: "Planting & Bed Design",
    price: "From $150 (custom $300+)",
    desc: "Basic layouts to custom designs, tailored to soil, light, and style.",
  },
  {
    title: "Hedge Trimming",
    price: "$40–$80",
    desc: "Shaped, healthy hedges—priced by length and height.",
  },
  {
    title: "Weeding & Soil Refresh",
    price: "$45–$120",
    desc: "Hand‑weeding, mulching, and soil conditioning based on bed size.",
  },
  {
    title: "Monthly Care Package",
    price: "$120–$260 / month",
    desc: "Mowing, weeding, and light pruning in one reliable plan.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-emerald-25">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-950">Services & Pricing</h2>
        <p className="mt-2 text-emerald-900/80">Prices are region‑neutral and customizable based on your property.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-emerald-100 bg-white shadow-sm">
              <h3 className="font-medium text-emerald-950">{s.title}</h3>
              <p className="text-sm text-emerald-700 mt-1">{s.price}</p>
              <p className="text-sm text-emerald-900/80 mt-2">{s.desc}</p>
              <a href="#contact" className="inline-block mt-4 text-sm text-emerald-800 hover:text-emerald-900 underline underline-offset-4">Request a quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
