import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, Gauge, ShieldCheck, Flag } from "lucide-react";

const heroImg = "https://images.boatsgroup.com/images/1/99/12/2021-cruisers-yachts-54-cantius-power-9939912-20250909133752354-1.jpg";
const storyImg = "https://cdn.mdsbrand.com/mean-strongs-marine/megamenu/cruiserimage.png";
const model1 = "https://images.boatsgroup.com/images/1/12/63/2022-cruisers-yachts-54-cantius-power-10101263-20260305100648427-1.jpg";
const model2 = "https://images.boatsgroup.com/images/1/99/12/2021-cruisers-yachts-54-cantius-power-9939912-20250909133752354-1.jpg";
const model3 = "https://cdn.mdsbrand.com/mean-strongs-marine/yacht-buyer/yacht-buyer-img-2.webp";
const model4 = "https://cdn.mdsbrand.com/mean-strongs-marine/megamenu/exp-img-1.webp";

const models = [
  { img: model1, title: "Cruisers 42 GLS", className: "md:col-span-7", h: "h-[480px] md:h-[600px]" },
  { img: model2, title: "Cruisers 54 Cantius", className: "md:col-span-5", h: "h-[480px] md:h-[600px]" },
  { img: model3, title: "Cruisers 46 Cantius", className: "md:col-span-5", h: "h-[400px] md:h-[500px]" },
  { img: model4, title: "Cruisers 60 Fly", className: "md:col-span-7", h: "h-[400px] md:h-[500px]" },
];

const stats = [
  { icon: Anchor, value: "70+", label: "Years Heritage" },
  { icon: Gauge, value: "28", label: "Knots Max Speed" },
  { icon: ShieldCheck, value: "5 Year", label: "Warranty" },
  { icon: Flag, value: "USA", label: "American Built" },
];

export default function Cruisers() {
  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          alt="Cruisers Yachts on open water"
          className="absolute inset-0 w-full h-full object-cover"
          src={heroImg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141b2c]/70 via-[#141b2c]/30 to-transparent" />
        <div className="absolute bottom-20 left-6 md:left-12 max-w-2xl">
          <h1 className="text-white font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight">
            American <br />Craftsmanship.
          </h1>
          <p className="text-white/80 font-label text-lg mt-6 max-w-lg leading-relaxed">
            Since 1953, Cruisers Yachts has been hand-building luxury sport yachts in Oconto, Wisconsin
            — where timeless quality meets bold American innovation.
          </p>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <span className="font-label text-[#b89a49] font-bold tracking-[0.3em] uppercase text-xs">
              Our Heritage
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mt-6 mb-8 text-on-surface leading-tight">
              Hand-Built. Family-Owned.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              For over seven decades, three generations of the Thompson family have poured their
              passion into every vessel that leaves the Oconto facility. Each Cruisers yacht is
              hand-built by skilled artisans who treat fiberglass, teak, and stainless steel
              the way a sculptor treats marble.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              This is not mass production. It is a commitment to detail that only a family-owned
              builder can sustain — where every hull is inspected by the people whose name
              is on the door.
            </p>
            <div className="flex gap-4 items-center group cursor-pointer">
              <span className="font-label font-bold text-xs uppercase tracking-widest border-b border-[#b89a49]/30 pb-1 group-hover:border-[#b89a49] transition-all text-on-surface">
                Discover the legacy
              </span>
              <ArrowRight className="w-4 h-4 text-[#b89a49]" />
            </div>
          </div>
          <div className="md:col-span-7 relative">
            <div className="aspect-[4/5] md:aspect-[16/10] bg-surface-container-high overflow-hidden rounded-lg">
              <img
                alt="Cruisers Yachts craftsmanship and interior detail"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                src={storyImg}
              />
            </div>
            <div className="hidden md:block absolute -bottom-12 -left-12 bg-[#141b2c] p-8 max-w-xs rounded-lg shadow-2xl">
              <p className="font-headline italic text-xl text-[#b89a49]">
                "Built with pride in the heartland, destined for the open water."
              </p>
              <p className="mt-4 font-label text-[10px] uppercase tracking-widest text-white/60">
                — Cruisers Yachts, Oconto WI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Model Lineup ── */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20">
            <div>
              <span className="font-label text-[#b89a49] font-bold tracking-[0.3em] uppercase text-xs">
                The Lineup
              </span>
              <h2 className="font-headline text-4xl md:text-6xl mt-4 text-on-surface">
                Bold by Design
              </h2>
            </div>
            <div className="hidden md:block text-right max-w-xs">
              <p className="text-on-surface-variant text-sm italic">
                Sport yachts and cantius cruisers built for those who demand more.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {models.map((m) => (
              <ModelCard key={m.title} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Performance Stats ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="font-label text-[#b89a49] font-bold tracking-[0.3em] uppercase text-xs">
            By The Numbers
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mt-4 mb-16 text-on-surface">
            Performance &amp; Pedigree
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#141b2c] flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-[#b89a49]" />
                </div>
                <span className="font-headline text-4xl md:text-5xl font-light text-on-surface">
                  {s.value}
                </span>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-[#141b2c]">
        <div className="max-w-screen-md mx-auto text-center px-6 md:px-12">
          <h2 className="font-headline text-4xl md:text-5xl text-white mb-6">
            Experience Cruisers at Strong's Marine
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Tour the full Cruisers Yachts lineup in person, schedule a sea trial,
            or speak with our team about building your next adventure.
          </p>
          <Link to="/shop">
            <Button className="bg-[#b89a49] hover:bg-[#a08540] text-white font-label text-xs uppercase tracking-widest px-10 py-6 rounded-none">
              Browse Inventory
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ModelCard({ className, h, img, title }) {
  return (
    <div className={`${className} group relative overflow-hidden ${h} rounded-lg cursor-pointer`}>
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={img}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141b2c]/70 via-transparent to-transparent" />
      <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 text-white">
        <h3 className="font-headline text-3xl md:text-4xl font-bold">{title}</h3>
        <div className="mt-3 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="font-label text-[10px] uppercase tracking-widest text-[#b89a49]">
            View Details
          </span>
          <ArrowRight className="w-3 h-3 text-[#b89a49]" />
        </div>
      </div>
    </div>
  );
}
