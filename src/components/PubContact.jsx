import { useState } from "react";

export default function PubContact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! Your booking request has been received. We'll ring back shortly to confirm.");
  }

  return (
    <section id="contact" className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl text-[#0b1c2a]">Contact & Reservations</h2>
          <p className="mt-2 text-[#0b1c2a]/80">Open 7 days a week – Kitchen until 9:00 PM.</p>
          <div className="mt-6 space-y-2 text-[#0b1c2a]">
            <p><strong>Address:</strong> 14 Mariners Lane, Whitestone, WS2 7BT</p>
            <p><strong>Phone:</strong> 01234 778 990</p>
            <p><strong>Email:</strong> hello@whaleboneinn.co.uk</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block text-sm text-[#0b1c2a]/80">Name</label>
            <input required className="w-full mt-1 border border-[#0b1c2a]/20 rounded-md px-3 py-2" placeholder="Your full name" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#0b1c2a]/80">Phone</label>
              <input required className="w-full mt-1 border border-[#0b1c2a]/20 rounded-md px-3 py-2" placeholder="Mobile or landline" />
            </div>
            <div>
              <label className="block text-sm text-[#0b1c2a]/80">Email</label>
              <input type="email" required className="w-full mt-1 border border-[#0b1c2a]/20 rounded-md px-3 py-2" placeholder="you@example.com" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#0b1c2a]/80">Booking Date & Time</label>
              <input type="datetime-local" required className="w-full mt-1 border border-[#0b1c2a]/20 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-[#0b1c2a]/80">Party Size</label>
              <input type="number" min="1" max="20" defaultValue="2" className="w-full mt-1 border border-[#0b1c2a]/20 rounded-md px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#0b1c2a]/80">Notes</label>
            <textarea className="w-full mt-1 border border-[#0b1c2a]/20 rounded-md px-3 py-2" rows="3" placeholder="Occasion, dietary needs, seating preference" />
          </div>
          <button className="rounded-full bg-[#0b1c2a] text-cream px-5 py-2">Send Request</button>
          {status && <p className="text-sm text-green-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}
