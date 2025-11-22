export default function Testimonials() {
  const quotes = [
    {
      name: "Marta L.",
      text: "Reliable and tidy. Our lawn finally looks consistent week to week without us chasing anyone.",
    },
    {
      name: "Jamie P.",
      text: "They checked in about small details I would have missed. Friendly crew, fair pricing.",
    },
    {
      name: "Dinesh R.",
      text: "Booked the monthly package—nice to not think about scheduling anymore. Yard looks cared for.",
    },
    {
      name: "Sophie K.",
      text: "Appreciate the eco‑friendly approach. Plants are healthier and it shows in spring.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-950">What Clients Say</h2>
        <p className="mt-2 text-emerald-900/80">Short, honest feedback from local customers.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quotes.map((q) => (
            <div key={q.name} className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/40 shadow-sm">
              <p className="text-sm text-emerald-900/90">“{q.text}”</p>
              <p className="mt-3 text-xs text-emerald-800">— {q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
