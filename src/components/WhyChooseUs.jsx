export default function WhyChooseUs() {
  const items = [
    { title: "Eco‑friendly tools and fertilizers", desc: "Lower emissions and soil‑safe products for healthier gardens." },
    { title: "Rainwater‑safe washing methods", desc: "Practices that protect waterways and local ecosystems." },
    { title: "Free seasonal check‑ups", desc: "Complimentary tune‑ups for repeat clients to keep things thriving." },
    { title: "Reminder scheduling", desc: "Helpful reminders so your garden care stays effortless." },
  ];

  return (
    <section id="why" className="py-16 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-950">Why Choose GreenNest</h2>
        <p className="mt-2 text-emerald-900/80">Subtle touches that make a steady difference.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i.title} className="p-5 rounded-xl border border-emerald-100 bg-white shadow-sm">
              <p className="font-medium text-emerald-900">{i.title}</p>
              <p className="text-sm text-emerald-900/75 mt-1">{i.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-emerald-950">Before / After</h3>
          <div className="mt-3 grid md:grid-cols-2 gap-4">
            <div className="aspect-[16/10] rounded-xl bg-[url('https://images.unsplash.com/photo-1465146633011-14f8e0781093?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center border border-emerald-100 shadow-sm" />
            <div className="aspect-[16/10] rounded-xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center border border-emerald-100 shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
