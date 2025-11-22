const Section = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="font-serif text-2xl text-[#0b1c2a]">{title}</h3>
    <div className="grid gap-4">{children}</div>
  </div>
);

const Item = ({ name, price, desc }) => (
  <div className="flex items-start justify-between gap-6 border-b border-[#0b1c2a]/10 pb-3">
    <div>
      <p className="font-medium text-[#0b1c2a]">{name}</p>
      {desc && <p className="text-sm text-[#0b1c2a]/70 mt-1">{desc}</p>}
    </div>
    <span className="text-[#0b1c2a] font-semibold">{price}</span>
  </div>
);

export default function PubMenu() {
  return (
    <section id="menu" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-[#0b1c2a]">Our Menu</h2>
          <p className="text-[#0b1c2a]/70">Traditional pub dining with a coastal twist—hearty plates, fresh seafood, and steaks cooked your way.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <Section title="Starters & Sharing Plates">
              <Item name="Garlic & Herb Bread" price="£4.50" desc="Stone-baked, brushed with parsley butter." />
              <Item name="Crispy Salt & Pepper Squid" price="£7.95" desc="Lemon aioli and charred lemon." />
              <Item name="Loaded Nacho Sharing Plate (v)" price="£11.50" desc="Cheddar, salsa, jalapeños, sour cream, guacamole." />
              <Item name="Breaded Brie Wedges (v)" price="£6.75" desc="Warm cranberry dip and dressed leaves." />
              <Item name="Chicken Wings (BBQ or Spicy)" price="£7.50 / £12 sharing" desc="Celery sticks and ranch dip." />
            </Section>

            <Section title="Jacket Potatoes">
              <p className="text-sm text-[#0b1c2a]/70">All served with a side salad.</p>
              <Item name="Cheddar & Beans" price="£6.95" />
              <Item name="Tuna Mayo" price="£7.50" />
              <Item name="Chicken & Bacon Melt" price="£7.95" />
              <Item name="Chilli Con Carne" price="£8.25" />
            </Section>
          </div>

          <div className="space-y-10">
            <Section title="Pub Classics">
              <Item name="Beer-Battered Cod & Chips" price="£13.95" desc="Skin-on fries, tartare, mushy peas, lemon." />
              <Item name="Steak & Ale Pie with Mash" price="£12.95" desc="Shortcrust, rich gravy, buttered greens." />
              <Item name="Scampi Basket with Fries" price="£11.50" desc="Tartare sauce and lemon." />
              <Item name="Classic Beef Burger with Chips" price="£12.50" desc="Brioche bun, house relish, lettuce, tomato." />
              <Item name="Veggie Mushroom & Halloumi Stack (v)" price="£11.25" desc="Grilled flat cap, halloumi, pesto mayo." />
            </Section>

            <Section title="Steaks">
              <p className="text-sm text-[#0b1c2a]/70">Sourced from trusted local butchers. Cooked to your preference with chips, roasted tomato, and field mushroom.</p>
              <Item name="8oz Rump" price="£15.95" />
              <Item name="10oz Sirloin" price="£19.50" />
              <Item name="8oz Ribeye" price="£21.95" />
              <Item name="16oz T-Bone" price="£27.50" />
              <div className="pt-2 text-sm text-[#0b1c2a]/80">Add-ons: Peppercorn Sauce £2.50, Garlic Butter £1.75, Onion Rings £2.50</div>
            </Section>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="rounded-full bg-[#0b1c2a] text-cream px-6 py-3 inline-block shadow hover:shadow-md">Reserve a Table</a>
        </div>
      </div>
    </section>
  );
}
