import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const heroImg = "https://www.pearlyachts.com/wp-content/uploads/2025/02/home-slide-01.jpg";
const atelierImg = "https://www.pearlyachts.com/wp-content/uploads/2025/02/home-slide-02.jpg";
const pearl100 = "https://www.pearlyachts.com/wp-content/uploads/2025/02/home-slide-03.jpg";
const pearl63 = "https://www.pearlyachts.com/wp-content/uploads/2025/02/63-barca.png";
const pearl82 = "https://www.pearlyachts.com/wp-content/uploads/2024/11/Pearl-82-Running-2.jpg";
const pearl73 = "https://www.pearlyachts.com/wp-content/uploads/2026/01/Pearl-73_Exterior_Side.jpg";
const engineImg = "https://www.pearlyachts.com/wp-content/uploads/2020/12/PEARL-82-DRONE-203.jpeg";

export default function PearlYachts() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img alt="Pearl Yacht sailing" className="absolute inset-0 w-full h-full object-cover" src={heroImg} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-20 left-6 md:left-12 max-w-2xl">
          <h1 className="text-white font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight">
            Beyond The <br />Horizon.
          </h1>
          <p className="text-white/80 font-body text-lg mt-6 max-w-lg leading-relaxed">
            Introducing the 2024 Collection. A masterclass in nautical architecture and the bespoke "Atelier of Yachting" philosophy.
          </p>
        </div>
      </section>

      {/* Philosophy: The Atelier */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <span className="font-label text-pearl-primary font-bold tracking-[0.3em] uppercase text-xs">Philosophy</span>
            <h2 className="font-headline text-4xl md:text-5xl mt-6 mb-8 text-on-surface leading-tight">The Atelier of Yachting</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Every Pearl is a unique masterpiece. Unlike production-line vessels, our yachts are curated in an artisanal environment where master craftsmen and world-renowned designers Kelly Hoppen CBE and Bill Dixon collaborate to realize your personal vision of the sea.
            </p>
            <div className="flex gap-4 items-center group cursor-pointer">
              <span className="font-label font-bold text-xs uppercase tracking-widest border-b border-pearl-primary/20 pb-1 group-hover:border-pearl-primary transition-all">
                Discover the craft
              </span>
              <ArrowRight className="w-4 h-4 text-pearl-primary" />
            </div>
          </div>
          <div className="md:col-span-7 relative">
            <div className="aspect-[4/5] md:aspect-[16/10] bg-surface-container-high overflow-hidden rounded-lg">
              <img alt="Luxury yacht interior materials" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src={atelierImg} />
            </div>
            <div className="hidden md:block absolute -bottom-12 -left-12 glass-panel p-8 max-w-xs rounded-lg shadow-2xl">
              <p className="font-headline italic text-xl text-pearl-primary">"Design is not just what it looks like, it's how it feels on the water."</p>
              <p className="mt-4 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">— Bill Dixon, Naval Architect</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Collection Grid */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20">
            <div>
              <span className="font-label text-pearl-primary font-bold tracking-[0.3em] uppercase text-xs">The Collection</span>
              <h2 className="font-headline text-4xl md:text-6xl mt-4">Nautical Excellence</h2>
            </div>
            <div className="hidden md:block text-right max-w-xs">
              <p className="text-on-surface-variant text-sm italic">Engineered for performance. Styled for the elite.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <ModelCard className="md:col-span-8" h="h-[500px] md:h-[600px]" img={pearl100} title="Pearl 100 Hybrid" sub="The Sustainable Flagship" showBtn />
            <ModelCard className="md:col-span-4" h="h-[500px] md:h-[600px]" img={pearl63} title="Pearl 63" sub="Agile Sophistication" />
            <ModelCard className="md:col-span-5" h="h-[400px] md:h-[500px]" img={pearl82} title="Pearl 82" sub="The New Standard" />
            <ModelCard className="md:col-span-7" h="h-[400px] md:h-[500px]" img={pearl73} title="Pearl 73" sub="Artisanal Balance" />
          </div>
        </div>
      </section>

      {/* Performance Specs */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-4xl mb-12">Performance <br />Engineered.</h2>
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              <Stat value="32" label="Max Knots (P100)" />
              <Stat value="05" label="Bespoke Cabins" />
              <Stat value="Hybrid" label="Engine System" />
              <Stat value="5yr" label="Industry Warranty" />
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-square rounded-full border border-pearl-primary/10 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-surface-container opacity-20" />
            <img alt="Yacht engineering" className="w-full h-full object-cover rounded-full mix-blend-multiply opacity-80" src={engineImg} />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32 bg-zinc-950 text-white">
        <div className="max-w-screen-md mx-auto text-center px-6 md:px-12">
          <h2 className="font-headline text-4xl md:text-5xl mb-8">Join the Vanguard.</h2>
          <p className="text-white/60 mb-12 text-lg">Receive exclusive invitations to private viewings and new launch premieres.</p>
          <form className="flex flex-col md:flex-row gap-4 border-b border-white/20 pb-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="bg-transparent border-none focus-visible:ring-0 text-white placeholder:text-white/30 w-full py-4 font-label text-xs tracking-widest uppercase rounded-none"
            />
            <button className="font-label text-xs tracking-widest uppercase font-bold text-pearl-primary px-8 whitespace-nowrap" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function ModelCard({ className, h, img, title, sub, showBtn }) {
  return (
    <div className={`${className} group relative overflow-hidden ${h} rounded-lg`}>
      <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 text-white">
        <h3 className="font-headline text-3xl md:text-4xl font-bold">{title}</h3>
        <p className="font-label uppercase tracking-widest text-xs mt-2 opacity-80">{sub}</p>
        {showBtn && (
          <button className="mt-8 px-6 py-2 border border-white/30 hover:bg-white hover:text-pearl-primary transition-all text-xs uppercase tracking-widest font-bold">
            Explore Model
          </button>
        )}
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <span className="block font-headline text-4xl md:text-5xl text-pearl-primary font-light">{value}</span>
      <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-2">{label}</span>
    </div>
  );
}
