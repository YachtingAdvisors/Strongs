import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, ArrowRight } from "lucide-react";

const listings = [
  {
    id: "fairline-phantom-65",
    title: "2024 Fairline Phantom 65",
    price: "Contact for Price",
    length: "65 ft",
    year: 2024,
    make: "Fairline",
    cabins: 3,
    engine: "Twin Volvo Penta IPS 1200",
    condition: "New",
    img: "https://cdn.callersiq.com/inventory_uploads/attachment-1724943670109438022866d08d36da501.jpg",
    hasDetail: true,
  },
  {
    id: "pearl-82",
    title: "2024 Pearl 82",
    price: "$4,200,000",
    length: "82 ft",
    year: 2024,
    make: "Pearl",
    cabins: 4,
    engine: "Twin MAN V12",
    condition: "New",
    img: "https://cdn.mdsbrand.com/mean-strongs-marine/yacht-buyer/yacht-buyer-img-8.webp",
  },
  {
    id: "sunseeker-65",
    title: "2023 Sunseeker Predator 65",
    price: "$2,850,000",
    length: "65 ft",
    year: 2023,
    make: "Sunseeker",
    cabins: 3,
    engine: "Twin MTU M96L",
    condition: "Pre-Owned",
    img: "https://images.boatsgroup.com/images/1/93/69/2020-sunseeker-predator-74-xps-power-9669369-20250130064026142-1_XLARGE.jpg",
  },
  {
    id: "azimut-50",
    title: "2024 Azimut 50 Flybridge",
    price: "$1,950,000",
    length: "50 ft",
    year: 2024,
    make: "Azimut",
    cabins: 3,
    engine: "Twin Volvo Penta D8",
    condition: "New",
    img: "https://images.boatsgroup.com/images/1/79/13/2019-azimut-atlantis-51-power-9817913-20250602164519112-1_XLARGE.jpg",
  },
  {
    id: "princess-v55",
    title: "2024 Princess V55",
    price: "$1,750,000",
    length: "55 ft",
    year: 2024,
    make: "Princess",
    cabins: 3,
    engine: "Twin Volvo Penta IPS 950",
    condition: "New",
    img: "https://images.boatsgroup.com/images/1/76/83/2017-princess-56-power-9727683-20250325120120769-1_XLARGE.jpg",
  },
  {
    id: "pearl-63",
    title: "2024 Pearl 63",
    price: "$2,100,000",
    length: "63 ft",
    year: 2024,
    make: "Pearl",
    cabins: 3,
    engine: "Twin Volvo Penta IPS 1050",
    condition: "New",
    img: "https://cdn.mdsbrand.com/mean-strongs-marine/yacht-buyer/yacht-buyer-img-7.webp",
  },
];

const filters = ["All", "New", "Pre-Owned"];
const makes = ["All Makes", "Fairline", "Pearl", "Sunseeker", "Azimut", "Princess"];

export default function ShopYachts() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeMake, setActiveMake] = useState("All Makes");

  const filtered = listings.filter((l) => {
    if (activeFilter !== "All" && l.condition !== activeFilter) return false;
    if (activeMake !== "All Makes" && l.make !== activeMake) return false;
    return true;
  });

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-on-primary-fixed">
        <div className="max-w-7xl mx-auto">
          <span className="text-secondary font-label font-bold tracking-widest text-xs uppercase mb-4 block">Inventory</span>
          <h1 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tighter text-white leading-none">
            Shop Yachts
          </h1>
          <p className="text-white/60 text-lg mt-6 max-w-xl">
            Browse our curated collection of new and pre-owned luxury vessels. 50–88 ft range available.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 md:px-12 py-8 bg-surface border-b border-outline-variant/30 sticky top-24 z-40 glass-nav">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <SlidersHorizontal className="w-4 h-4 text-on-surface-variant" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                  activeFilter === f
                    ? "bg-on-primary-fixed text-white"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative">
            <select
              value={activeMake}
              onChange={(e) => setActiveMake(e.target.value)}
              className="appearance-none bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-2 pr-10 text-xs font-bold uppercase tracking-widest cursor-pointer"
            >
              {makes.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 py-16 bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="text-on-surface-variant text-sm mb-8">{filtered.length} vessels found</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((yacht) => (
              <div key={yacht.id} className="group bg-surface-container-low rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-500">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img alt={yacht.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={yacht.img} />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                    yacht.condition === "New" ? "bg-secondary text-white" : "bg-white/90 text-on-surface"
                  }`}>
                    {yacht.condition}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">{yacht.title}</h3>
                  <p className="text-secondary font-headline font-bold text-lg mb-4">{yacht.price}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-on-surface-variant font-label mb-6">
                    <span>Length: {yacht.length}</span>
                    <span>Cabins: {yacht.cabins}</span>
                    <span className="col-span-2">Engine: {yacht.engine}</span>
                  </div>
                  {yacht.hasDetail ? (
                    <Link to={`/vessel/${yacht.id}`}>
                      <Button className="w-full bg-on-primary-fixed text-white hover:bg-secondary transition-colors h-auto py-3 text-xs uppercase tracking-widest font-bold">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full bg-on-primary-fixed text-white hover:bg-secondary transition-colors h-auto py-3 text-xs uppercase tracking-widest font-bold">
                      Request Info <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
