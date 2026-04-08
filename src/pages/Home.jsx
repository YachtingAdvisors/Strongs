import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { History, ShieldCheck, MapPin, PlayCircle, Diamond, Wrench, ArrowRight } from "lucide-react";

// Real images from Strong's Marine CDN and inventory
const heroImg = "https://cdn.mdsbrand.com/mean-strongs-marine/yacht-buyer/yacht-buyer-img-1.webp";
const yacht1 = "https://cdn.mdsbrand.com/mean-strongs-marine/yacht-buyer/yacht-buyer-img-3.webp"; // Pearl
const yacht2 = "https://cdn.mdsbrand.com/mean-strongs-marine/yacht-buyer/yacht-buyer-img-2.webp"; // Fairline
const yacht4 = "https://images.boatsgroup.com/images/1/99/12/2021-cruisers-yachts-54-cantius-power-9939912-20250909133752354-1.jpg"; // Cruisers
const pearlInterior = "https://cdn.mdsbrand.com/mean-strongs-marine/yacht-buyer/yacht-buyer-img-5.webp";
const droneShot = "https://cdn.mdsbrand.com/mean-strongs-marine/yacht-buyer/yacht-buyer-img-4.webp";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroImg}
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="inline-block mb-6 text-white/80 font-label tracking-[0.4em] text-xs uppercase">
            Est. 1945 — New York's Premier Marina
          </span>
          <h1 className="font-headline text-5xl md:text-8xl text-white font-extrabold tracking-tighter leading-none mb-8">
            The Standard for <br />
            <span className="text-surface-variant">Northeast Yachting.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Curating the world's finest vessels for the distinguished mariner. Experience the pinnacle of maritime luxury on the Long Island Sound.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/shop">
              <Button className="w-full md:w-auto bg-white text-on-primary-fixed px-10 py-5 rounded font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:text-white transition-all duration-300 h-auto">
                Explore Inventory
              </Button>
            </Link>
            <Link to="/pearl-yachts">
              <Button variant="outline" className="w-full md:w-auto border-white/30 text-white backdrop-blur-sm px-10 py-5 rounded font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-on-primary-fixed transition-all duration-300 h-auto bg-transparent">
                View Pearl Yachts
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll to Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      {/* The Collection — 3 Brands */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-secondary font-label font-bold tracking-widest text-xs uppercase mb-4 block">The Collection</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-on-surface">Curated Fleet</h2>
            </div>
            <p className="text-on-surface-variant text-sm max-w-xs text-right hidden md:block">Three world-class brands. One trusted destination.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <BrandCard
              className="md:col-span-7"
              img={yacht1}
              brand="Pearl Yachts"
              tagline="Boutique British Excellence"
              desc="Bespoke interiors by Kelly Hoppen. Artisanal craftsmanship at its finest."
              href="/pearl-yachts"
            />
            <BrandCard
              className="md:col-span-5"
              img={yacht2}
              brand="Fairline"
              tagline="British Precision Engineering"
              desc="55+ years of iconic design by Alberto Mancini, built in Oundle, England."
              href="/fairline"
            />
            <BrandCard
              className="md:col-span-12"
              img={yacht4}
              brand="Cruisers Yachts"
              tagline="American Craftsmanship Since 1953"
              desc="Hand-built in Wisconsin. Family-owned heritage meets modern innovation."
              href="/cruisers"
              wide
            />
          </div>
        </div>
      </section>

      {/* Pearl Yachts Partnership */}
      <section className="py-24 md:py-32 bg-on-primary-fixed relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative z-10">
              <img alt="Pearl Yacht Interior" className="w-full h-full object-cover" src={pearlInterior} />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/10 hidden md:block z-0" />
          </div>
          <div className="w-full md:w-1/2 text-white">
            <span className="text-secondary font-label font-bold tracking-widest text-xs uppercase mb-6 block">Exclusive Partnership</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
              Boutique Excellence: Pearl Yachts Joins the Fleet.
            </h2>
            <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
              Experience the zenith of boutique shipbuilding. Strong's Marine is proud to present Pearl Yachts—where technical British engineering meets the iconic, world-renowned interior artistry of Kelly Hoppen.
            </p>
            <div className="space-y-6 mb-12">
              <FeatureItem icon={<Diamond className="w-5 h-5 text-secondary" />} title="Kelly Hoppen Interior Design" desc="A palette of calm, luxury, and bespoke texture in every cabin." />
              <FeatureItem icon={<Wrench className="w-5 h-5 text-secondary" />} title="Boutique Customization" desc="Every Pearl is a unique reflection of its captain's vision." />
            </div>
            <Link to="/pearl-yachts">
              <Button className="bg-secondary text-white px-10 py-5 rounded font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-on-primary-fixed transition-all duration-300 h-auto">
                Discover the Pearl Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expert Brokerage */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-on-primary-container font-label font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Proven Expertise</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tighter">New York's Trusted Yacht Authority</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <ExpertiseItem icon={<History className="w-8 h-8" />} title="Established 1945" desc="Nearly eight decades of maritime heritage and deep-rooted community trust across the Northeast." />
            <ExpertiseItem icon={<ShieldCheck className="w-8 h-8" />} title="Certified Brokerage" desc="Our brokers are industry leaders, ensuring every transaction is as seamless as the open sea." />
            <ExpertiseItem icon={<MapPin className="w-8 h-8" />} title="Local Logistics" desc="With 10 locations across Long Island, we provide hyper-local expertise for regional docking and service." />
          </div>
        </div>
      </section>

      {/* Digital Concierge */}
      <section className="py-24 md:py-32 relative group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 bg-on-primary-fixed group-hover:scale-105 transition-transform duration-1000">
          <img alt="Yacht from above" className="w-full h-full object-cover opacity-40" src={droneShot} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">Virtual Tours. Real Depth.</h2>
          <p className="text-white/80 text-xl font-light mb-12">
            Can't make it to the marina? Explore our fleet with high-definition virtual walkthroughs and cinematic drone previews.
          </p>
          <button className="bg-white text-on-primary-fixed px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-4 mx-auto hover:bg-secondary hover:text-white transition-all group-hover:scale-110">
            <PlayCircle className="w-6 h-6" />
            Launch Digital Concierge
          </button>
        </div>
      </section>
    </main>
  );
}

function BrandCard({ className, img, brand, tagline, desc, href, wide }) {
  return (
    <Link to={href} className={`${className} group relative overflow-hidden rounded-lg block`}>
      <div className={`${wide ? "aspect-[21/9]" : "aspect-[4/3]"} overflow-hidden relative`}>
        <img alt={brand} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className="font-label text-[10px] tracking-[0.3em] uppercase text-white/60 block mb-2">{tagline}</span>
          <h3 className="font-headline text-2xl md:text-4xl font-bold text-white mb-2">{brand}</h3>
          <p className="text-white/70 text-sm max-w-md mb-4 hidden md:block">{desc}</p>
          <span className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1 group-hover:border-secondary group-hover:text-secondary transition-colors">
            Explore Collection
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className="font-headline font-bold text-lg">{title}</h4>
        <p className="text-white/50 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function ExpertiseItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm text-on-primary-fixed">
        {icon}
      </div>
      <h3 className="font-headline text-xl font-bold mb-4">{title}</h3>
      <p className="text-on-surface-variant font-light leading-relaxed">{desc}</p>
    </div>
  );
}
