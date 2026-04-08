import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { History, ShieldCheck, MapPin, PlayCircle, Diamond, Wrench } from "lucide-react";

const heroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDaBb-recNpR1aF8Ie6rS15u4i_4WjeEP164XnHyf2PwgreoAnQbrJV-nphf-wroPJLAUMoWUB6yf3b0zHgta5E4MhC6FrbLM6NOTOjg0KDu0il24O9xCdJqps3_iLv25ljvsy3v58pS7LZ5eBzUGfzLLiNkaTpQ0oFtaID_2zkoVU6_V5xaWCO8RbtknHXXKo4FKGMeptrSO1ngvxeY1MsjTsXx0bAY0Ng0I-XyhKymCd-tiQENlydknruYUgcgqAhCUAcgSBvhf4";
const yacht1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBuMIagXq4QbZSLc0R6wkN79zLV6wzS2tY3b_IvcxYeGyBWLapd6l6ZllRLwf5Mhu5M5fkIrkVOPYXo8ISERZqxis3z2l2f3b1mShk_oJROtjZs3Y0ouum5klwZYneYE2GFIx0xvatWoXggDTPMUxl_XtucI5QKOGlMZvbHuEP7eIPRLgeOPIELvdfMkRiL_j_ORzElwAowt5dLfMD0JXPiCbQfwZJ1NgZelzDLzIQQlzuGk7XsRsRW165r_hnTgNaQNnEWXa4DIBk";
const yacht2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4_sK9F-cp4rBp7llRVrAohIKRYnD1dQUo0euIXuoTR1eXwP9_xB3TWEd7etp0i1xjsUTk1u05WPBPj5UZFyf87g1nm4MForPE7Zc2EF1x4i5iuS_sNCsbo-Vwkznebj2HSVHGT0dSNqe-puABiDrrIaK3TplSLwgQz2SFUm6GFVvmgSzqYRIxfmmacOD6KO81hcpR5esvrKQS5VN85kG1Wy3mzHiMMg4TC0HcJBJ9r2rRYX5zVmmaGeGpjGsHRmf-zfqvWkeMYY";
const yacht3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCVKsa1NuvUI7x_iUzVBfLguWc6gvdcD3rLhETzhChZuoB-vFN8ajh8NdeoWl-3-3gWDwcaZfUH7i673lPiGMFF2VbTygdVMaKxcEcHXFqXybuI0tzyLi-IXTG_jD-WZF6eY2RBRFiMQ_igQqwrIPwi1u_ZjgYZbRtUBxJ3zDMFeOGvbdup5jOI-HDstS4bBzxKqAyDhNW1nb29OeOdAgXIP_m_YhRZ3e5BMcFJ1yHzE3OWhhxbs-KDv83f1H2oeh5pzsLJCxnzT64";
const yacht4 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDkmf9l3euQKVuLnGlMauWKnUvsFM7OXvtXoR9hiQi0twi8yZTFYArgyE9i2OGy2Ej-NZxaLn6dI6at8g1SGVlglfc_nPFytQPmrw7JbwRtrwHijDMmEPvKVG6Pf18TSKM-fRmXp689_TDKvNsG8FNsXphDup99lrAHVitRMEBckQBBlaxD1W8sCqgEJ7idtkf2z61khxRuz2QjtN0BQfHWNWr5tLtiMs8XCylF-LkLGOxSmmohjnWSodQjXZcbjZ8onCy1wpzAP5I";
const pearlInterior = "https://lh3.googleusercontent.com/aida-public/AB6AXuDynvE48Atu_vWr53UivCvfJhSUQ8C0ho83yV7SZmz1VsYqUXINgvC91ORadKiMlBza3MuajVKNbUzJZXQobO2ByFFshIlFWV708q8jhOdKu2Z5PZRiOLP2fOnVqu4sDPxYWWxdLPYV3oe9AGFX8jxHiRxiOBdAwtBB8xG0gVV5SkY71bDcL8u5NxJ2GznuB-SOM1oT8xjZ33KZ0wwVt-WRZphEY5jaaSm-_gV1AgYLOEhM6fC7UMeW4c946D9xUOb91xsRH3KpFQI";
const droneShot = "https://lh3.googleusercontent.com/aida-public/AB6AXuBGD979AUFyBoOZcg3dpWNCZqEe4Jk1yHKnzajSBL29LeXz6G64pOoVWvL8nkEIHltPYr3wFT-NXeeo7BUqZUZArRoEqZtleFparh1GYYHheP_NjnfIQqvdN07nk0x_lvjg0QaXIgvtbljhlK_VNZT8ew8hIYG_WHIMjUNouwbermOTrka__ORbVedqUJR4GUo34t24rCL96lpjz7ZZtBJbPOYm__-CGBajv0kBqmlEKi52iqAnE7t3zVeCB2CbxunW51e8Pqf_bbA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Luxury yacht on open water" className="w-full h-full object-cover" src={heroImg} />
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

      {/* The Collection */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-secondary font-label font-bold tracking-widest text-xs uppercase mb-4 block">The Collection</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-on-surface">Curated Fleet</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <YachtCard className="md:col-span-8" img={yacht1} title="Sunseeker Predator 65" specs="65ft • 3 Cabins • 35 Knots" aspect="aspect-[16/9]" showDetails />
            <YachtCard className="md:col-span-4" img={yacht2} title="Fairline Targa 45" specs="45ft • 2 Cabins" aspect="aspect-square" />
            <YachtCard className="md:col-span-4" img={yacht3} title="Azimut 50 Flybridge" specs="50ft • 3 Cabins" aspect="aspect-square" />
            <YachtCard className="md:col-span-8" img={yacht4} title="Princess V55" specs="55ft • Sport Performance" aspect="aspect-[16/9]" showDetails />
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

function YachtCard({ className, img, title, specs, aspect, showDetails }) {
  return (
    <div className={`${className} group relative overflow-hidden bg-surface-container-low rounded-lg`}>
      <div className={`${aspect} overflow-hidden`}>
        <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} />
      </div>
      <div className="p-6 md:p-8 flex justify-between items-center">
        <div>
          <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface">{title}</h3>
          <p className="text-on-surface-variant font-label text-sm mt-1">{specs}</p>
        </div>
        {showDetails && (
          <a className="font-label text-xs font-bold uppercase tracking-widest border-b-2 border-secondary pb-1 hover:text-secondary transition-colors" href="#">
            View Details
          </a>
        )}
      </div>
    </div>
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
