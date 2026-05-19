import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, Gauge, ShieldCheck, Flag, Loader2 } from "lucide-react";
import useMicrolinkImages from "@/hooks/useMicrolinkImages";

const CRUISERS_MODEL_URLS = [
  "https://www.cruisersyachts.com/models/42-gls/",
  "https://www.cruisersyachts.com/models/54-cantius/",
  "https://www.cruisersyachts.com/models/46-cantius/",
  "https://www.cruisersyachts.com/models/60-fly/",
];

const MODEL_FALLBACKS = [
  "https://www.cruisersyachts.com/-/media/images/cruisers-yatchs/cards/1-2-col-card-row/gls-hp-card.jpg",
  "https://www.cruisersyachts.com/-/media/images/cruisers-yatchs/models/50-cantius/thumbnail/50-cantius-modelimagenormal-03242023.jpg",
  "https://www.cruisersyachts.com/-/media/images/cruisers-yatchs/models/60-cantius/thumbnail/60c-modelimagelifestyle-04192923.jpg",
  "https://www.cruisersyachts.com/-/media/images/cruisers-yatchs/og/50-fly-launch-og.jpg",
];

const GALLERY_URLS = [
  "https://www.cruisersyachts.com/",
  "https://www.cruisersyachts.com/about/heritage/",
];

const GALLERY_FALLBACKS = [
  "https://www.cruisersyachts.com/-/media/images/cruisers-yatchs/og/50-fly-launch-og.jpg",
  "https://www.cruisersyachts.com/-/media/images/cruisers-yatchs/cards/1-2-col-card-row/cantius-hp-card.jpg",
];

const models = [
  { slug: "cruisers-42-gls", title: "Cruisers 42 GLS", sub: "Sport Yacht Perfected", className: "md:col-span-7", h: "h-[480px] md:h-[600px]" },
  { slug: "cruisers-54-cantius", title: "Cruisers 54 Cantius", sub: "Luxury Redefined", className: "md:col-span-5", h: "h-[480px] md:h-[600px]" },
  { slug: "cruisers-46-cantius", title: "Cruisers 46 Cantius", sub: "The Versatile Classic", className: "md:col-span-5", h: "h-[400px] md:h-[500px]" },
  { slug: "cruisers-60-fly", title: "Cruisers 60 Fly", sub: "Flagship Freedom", className: "md:col-span-7", h: "h-[400px] md:h-[500px]" },
];

const stats = [
  { icon: Anchor, value: "70+", label: "Years Heritage" },
  { icon: Gauge, value: "28", label: "Knots Max Speed" },
  { icon: ShieldCheck, value: "5 Year", label: "Warranty" },
  { icon: Flag, value: "USA", label: "American Built" },
];

export default function Cruisers() {
  const { images: modelImages, loading: modelsLoading } = useMicrolinkImages(CRUISERS_MODEL_URLS, MODEL_FALLBACKS);
  const { images: galleryImages } = useMicrolinkImages(GALLERY_URLS, GALLERY_FALLBACKS);

  const heroImg = galleryImages[0]?.src || GALLERY_FALLBACKS[0];
  const storyImg = galleryImages[1]?.src || GALLERY_FALLBACKS[1];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img alt="Cruisers Yachts on open water" className="absolute inset-0 w-full h-full object-cover" src={heroImg} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141b2c]/70 via-[#141b2c]/30 to-transparent" />
        <div className="absolute bottom-20 left-6 md:left-12 max-w-2xl">
          <p className="font-label text-white/60 text-xs uppercase tracking-[0.4em] mb-4">
            Est. 1953 -- Oconto, Wisconsin
          </p>
          <h1 className="text-white font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight">
            American <br />Craftsmanship.
          </h1>
          <p className="text-white/80 font-label text-lg mt-6 max-w-lg leading-relaxed">
            Since 1953, Cruisers Yachts has been hand-building luxury sport yachts in Oconto, Wisconsin -- where timeless quality meets bold American innovation.
          </p>
          <Link to="/shop">
            <Button className="mt-10 bg-[#b89a49] hover:bg-[#a08540] text-white rounded-none px-8 py-3 font-label text-xs uppercase tracking-widest">
              Explore the Fleet <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <span className="font-label text-[#b89a49] font-bold tracking-[0.3em] uppercase text-xs">Our Heritage</span>
            <h2 className="font-headline text-4xl md:text-5xl mt-6 mb-8 text-on-surface leading-tight">
              Hand-Built. Family-Owned.
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              For over seven decades, three generations of the Thompson family have poured their passion into every vessel that leaves the Oconto facility. Each Cruisers yacht is hand-built by skilled artisans who treat fiberglass, teak, and stainless steel the way a sculptor treats marble.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              This is not mass production. It is a commitment to detail that only a family-owned builder can sustain -- where every hull is inspected by the people whose name is on the door.
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
              <img alt="Cruisers Yachts craftsmanship" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src={storyImg} />
            </div>
            <div className="hidden md:block absolute -bottom-12 -left-12 bg-[#141b2c] p-8 max-w-xs rounded-lg shadow-2xl">
              <p className="font-headline italic text-xl text-[#b89a49]">"Built with pride in the heartland, destined for the open water."</p>
              <p className="mt-4 font-label text-[10px] uppercase tracking-widest text-white/60">-- Cruisers Yachts, Oconto WI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Lineup */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20">
            <div>
              <span className="font-label text-[#b89a49] font-bold tracking-[0.3em] uppercase text-xs">The Lineup</span>
              <h2 className="font-headline text-4xl md:text-6xl mt-4 text-on-surface">Bold by Design</h2>
            </div>
            <div className="hidden md:block text-right max-w-xs">
              <p className="text-on-surface-variant text-sm italic">Sport yachts and cantius cruisers built for those who demand more.</p>
            </div>
          </div>

          {modelsLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 text-[#b89a49] animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {models.map((m, i) => (
                <ModelCard
                  key={m.title}
                  {...m}
                  img={modelImages[i]?.src || MODEL_FALLBACKS[i]}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="font-label text-[#b89a49] font-bold tracking-[0.3em] uppercase text-xs">By The Numbers</span>
          <h2 className="font-headline text-4xl md:text-5xl mt-4 mb-16 text-on-surface">Performance &amp; Pedigree</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#141b2c] flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-[#b89a49]" />
                </div>
                <span className="font-headline text-4xl md:text-5xl font-light text-on-surface">{s.value}</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#141b2c]">
        <div className="max-w-screen-md mx-auto text-center px-6 md:px-12">
          <h2 className="font-headline text-4xl md:text-5xl text-white mb-6">
            Experience Cruisers at Strong's Yachts
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Tour the full Cruisers Yachts lineup in person, schedule a sea trial, or speak with our team about building your next adventure.
          </p>
          <Link to="/shop">
            <Button className="bg-[#b89a49] hover:bg-[#a08540] text-white font-label text-xs uppercase tracking-widest px-10 py-6 rounded-none">
              Browse Inventory <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ModelCard({ className, h, img, title, sub, slug }) {
  return (
    <Link to={`/model/${slug}`} className={`${className} group relative overflow-hidden ${h} rounded-lg block`}>
      <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141b2c]/70 via-transparent to-transparent" />
      <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 text-white">
        <h3 className="font-headline text-3xl md:text-4xl font-bold">{title}</h3>
        <p className="font-label uppercase tracking-widest text-xs mt-2 opacity-80">{sub}</p>
        <div className="mt-3 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="font-label text-[10px] uppercase tracking-widest text-[#b89a49]">View Details</span>
          <ArrowRight className="w-3 h-3 text-[#b89a49]" />
        </div>
      </div>
    </Link>
  );
}
