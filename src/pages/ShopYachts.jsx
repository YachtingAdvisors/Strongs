import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, ArrowRight, Loader2, Wifi, WifiOff } from "lucide-react";
import useYapListings from "@/hooks/useYapListings";

const conditionFilters = ["All", "New", "Pre-Owned"];

export default function ShopYachts() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeMake, setActiveMake] = useState("All Makes");

  const { listings, loading, source } = useYapListings();

  const makes = useMemo(() => {
    const uniqueMakes = [...new Set(listings.map((l) => l.make).filter(Boolean))].sort();
    return ["All Makes", ...uniqueMakes];
  }, [listings]);

  const filtered = listings.filter((l) => {
    if (activeFilter !== "All" && l.condition !== activeFilter) return false;
    if (activeMake !== "All Makes" && l.make !== activeMake) return false;
    return true;
  });

  return (
    <main className="pt-24">
      <section className="px-6 md:px-12 py-16 md:py-24 bg-on-primary-fixed">
        <div className="max-w-7xl mx-auto">
          <span className="text-secondary font-label font-bold tracking-widest text-xs uppercase mb-4 block">Inventory</span>
          <h1 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tighter text-white leading-none">
            Shop Yachts
          </h1>
          <p className="text-white/60 text-lg mt-6 max-w-xl">
            Browse our curated collection of new and pre-owned luxury vessels. 50-88 ft range available.
          </p>
          <div className="flex items-center gap-2 mt-4">
            {source === "yap" ? (
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-[10px] font-label uppercase tracking-widest">
                <Wifi className="w-3 h-3" /> Live from YAP
              </span>
            ) : source === "fallback" ? (
              <span className="inline-flex items-center gap-1.5 text-amber-400 text-[10px] font-label uppercase tracking-widest">
                <WifiOff className="w-3 h-3" /> Cached Inventory
              </span>
            ) : null}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-8 bg-surface border-b border-outline-variant/30 sticky top-24 z-40 glass-nav">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <SlidersHorizontal className="w-4 h-4 text-on-surface-variant" />
            {conditionFilters.map((f) => (
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

      <section className="px-6 md:px-12 py-16 bg-surface">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <Loader2 className="w-8 h-8 text-secondary animate-spin" />
              <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest">Loading inventory...</p>
            </div>
          ) : (
            <>
              <p className="text-on-surface-variant text-sm mb-8">{filtered.length} vessels found</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((yacht) => (
                  <YachtCard key={yacht.id} yacht={yacht} />
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-on-surface-variant text-lg">No vessels match your current filters.</p>
                  <button
                    onClick={() => { setActiveFilter("All"); setActiveMake("All Makes"); }}
                    className="mt-4 text-secondary font-label text-xs uppercase tracking-widest font-bold"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}

function YachtCard({ yacht }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-surface-container-low rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-500">
      <div className="aspect-[4/3] overflow-hidden relative bg-surface-container-high">
        {!imgError && yacht.img ? (
          <img
            alt={yacht.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={yacht.img}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-headline text-2xl text-on-surface-variant/30">{yacht.make}</span>
          </div>
        )}
        <span className={`absolute top-4 left-4 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest shadow-md ${
          yacht.condition === "New" ? "bg-secondary text-white" : "bg-on-primary-fixed text-white"
        }`}>
          {yacht.condition}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-headline text-xl font-bold text-on-surface mb-1">{yacht.title}</h3>
        <p className="text-secondary font-headline font-bold text-lg mb-4">{yacht.price}</p>
        <div className="grid grid-cols-2 gap-2 text-xs text-on-surface-variant font-label mb-6">
          {yacht.length && <span>Length: {yacht.length}</span>}
          {yacht.cabins && <span>Cabins: {yacht.cabins}</span>}
          {yacht.engine && <span className="col-span-2">Engine: {yacht.engine}</span>}
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
  );
}
