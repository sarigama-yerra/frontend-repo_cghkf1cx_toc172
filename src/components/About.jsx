export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="prose prose-emerald max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight text-emerald-950">About Us</h2>
          <p className="text-emerald-900/85 leading-relaxed">
            GreenNest is a small, community‑focused gardening service with over 8 years of hands‑on experience. We believe in reliability, thoughtful attention to detail, and eco‑friendly landscaping that keeps your garden healthy and rainwater‑safe.
          </p>
          <p className="text-emerald-900/85 leading-relaxed">
            Our friendly, fully vetted team treats every yard like our own. If something isn’t right, our satisfaction guarantee means we’ll make it right—no fuss.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "8+ Years Experience", desc: "Steady, proven care for all kinds of outdoor spaces." },
            { title: "Eco‑Friendly", desc: "Low‑emission tools and safe fertilizers for healthy soil." },
            { title: "Reliable & On‑Time", desc: "Clear communication and reminder scheduling system." },
            { title: "Satisfaction Guarantee", desc: "We’ll fix any issues promptly—your peace of mind first." },
          ].map((item) => (
            <li key={item.title} className="p-5 rounded-xl border border-emerald-100 shadow-sm bg-emerald-50/30">
              <p className="font-medium text-emerald-900">{item.title}</p>
              <p className="text-sm text-emerald-900/75 mt-1">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
