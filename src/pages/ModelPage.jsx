import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Loader2, Wifi, WifiOff } from "lucide-react";
import { getModelBySlug, BRANDS } from "@/data/models";
import useMicrolinkImages from "@/hooks/useMicrolinkImages";
import useYapListings from "@/hooks/useYapListings";
import { useState } from "react";

export default function ModelPage() {
  const { slug } = useParams();
  const model = getModelBySlug(slug);

  if (!model) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-headline text-4xl mb-4">Model Not Found</h1>
          <Link to="/shop" className="text-secondary underline">Browse all yachts</Link>
        </div>
      </main>
    );
  }

  return <ModelDetail model={model} />;
}

function ModelDetail({ model }) {
  const brand = BRANDS[model.brand];

  const { images: heroImages } = useMicrolinkImages(
    [model.heroUrl],
    [model.heroFallback]
  );
  const { images: galleryImages } = useMicrolinkImages(
    model.galleryUrls,
    model.galleryFallbacks
  );

  const { listings, loading: listingsLoading, source } = useYapListings({
    make: model.make,
    searchTerms: model.yapSearchTerms,
  });

  const matchingListings = listings.filter((l) => {
    const haystack = `${l.title} ${l.make} ${l.model || ""}`.toLowerCase();
    return model.yapSearchTerms.some((t) => haystack.includes(t.toLowerCase()));
  });

  const heroImg = heroImages[0]?.src || model.heroFallback;
  const accentClass = brand.accent.startsWith("[") ? `text-${brand.accent}` : `text-${brand.accent}`;
  const accentBgClass = brand.accent.startsWith("[") ? `bg-${brand.accent}` : `bg-${brand.accent}`;

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img alt={model.title} className="absolute inset-0 w-full h-full object-cover" src={heroImg} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-16 left-6 md:left-12 max-w-2xl">
          <Link
            to={`/${brand.slug}`}
            className="inline-flex items-center gap-2 text-white/60 font-label text-xs uppercase tracking-widest mb-4 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            {brand.name}
          </Link>
          <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
            {model.title}
          </h1>
          <p className="text-white/70 font-label text-sm uppercase tracking-widest mt-3">
            {model.tagline}
          </p>
        </div>
      </section>

      {/* Overview + Specs */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <span className={`font-label font-bold tracking-[0.3em] uppercase text-xs ${accentClass}`}>
              Overview
            </span>
            <h2 className="font-headline text-3xl md:text-4xl mt-4 mb-8 text-on-surface leading-tight">
              {model.title}
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              {model.description}
            </p>
            <Button
              className="text-white font-label text-xs uppercase tracking-widest px-8 py-3 rounded-none"
              style={{ backgroundColor: brand.accentHex }}
            >
              Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="md:col-span-7">
            <div className="bg-surface-container-low rounded-lg p-8 md:p-10">
              <h3 className="font-headline text-xl font-bold mb-8">Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
                {Object.entries(model.specs).map(([key, val]) => (
                  <SpecItem key={key} label={formatSpecLabel(key)} value={val} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <span className={`font-label font-bold tracking-[0.3em] uppercase text-xs ${accentClass}`}>
            Highlights
          </span>
          <h2 className="font-headline text-3xl md:text-4xl mt-4 mb-12 text-on-surface">
            What Sets Her Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {model.highlights.map((h) => (
              <div key={h.title} className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="font-headline text-lg font-bold mb-3">{h.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery from Microlink */}
      {galleryImages.length > 0 && galleryImages.some((g) => g?.src) && (
        <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <span className={`font-label font-bold tracking-[0.3em] uppercase text-xs ${accentClass}`}>
              Gallery
            </span>
            <h2 className="font-headline text-3xl md:text-4xl mt-4 mb-12 text-on-surface">
              Design & Detail
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.filter((g) => g?.src).map((g, i) => (
                <div key={i} className="aspect-[16/10] rounded-lg overflow-hidden bg-surface-container-high">
                  <img alt={`${model.title} gallery ${i + 1}`} className="w-full h-full object-cover" src={g.src} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Available Inventory from YAP */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className={`font-label font-bold tracking-[0.3em] uppercase text-xs ${accentClass}`}>
                Inventory
              </span>
              <h2 className="font-headline text-3xl md:text-4xl mt-4 text-on-surface">
                Available {model.title.split(" ").slice(-2).join(" ")} Listings
              </h2>
            </div>
            <div className="hidden md:block">
              {source === "yap" ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-600 text-[10px] font-label uppercase tracking-widest">
                  <Wifi className="w-3 h-3" /> Live from YAP
                </span>
              ) : source === "fallback" ? (
                <span className="inline-flex items-center gap-1.5 text-amber-600 text-[10px] font-label uppercase tracking-widest">
                  <WifiOff className="w-3 h-3" /> Cached
                </span>
              ) : null}
            </div>
          </div>

          {listingsLoading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin" style={{ color: brand.accentHex }} />
            </div>
          ) : matchingListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchingListings.map((yacht) => (
                <ListingCard key={yacht.id} yacht={yacht} accentHex={brand.accentHex} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg">
              <p className="text-on-surface-variant text-lg mb-2">
                No {model.title} listings currently available.
              </p>
              <p className="text-on-surface-variant/60 text-sm mb-6">
                Contact us to be notified when one becomes available, or browse our full inventory.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  className="text-white font-label text-xs uppercase tracking-widest px-8 py-3 rounded-none"
                  style={{ backgroundColor: brand.accentHex }}
                >
                  Notify Me
                </Button>
                <Link to="/shop">
                  <Button variant="outline" className="font-label text-xs uppercase tracking-widest px-8 py-3 rounded-none border-on-surface/20">
                    Browse All Yachts
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 text-white" style={{ backgroundColor: brand.darkBg }}>
        <div className="max-w-screen-md mx-auto text-center px-6 md:px-12">
          <h2 className="font-headline text-3xl md:text-5xl mb-6">
            Interested in the {model.title}?
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Schedule a private viewing, request a sea trial, or speak with our team about pricing and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-white rounded-none px-10 py-3 font-label text-xs uppercase tracking-widest"
              style={{ backgroundColor: brand.accentHex }}
            >
              Schedule Viewing
            </Button>
            <Link to={`/${brand.slug}`}>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white rounded-none px-10 py-3 font-label text-xs uppercase tracking-widest" style={{ "--tw-hover-text": brand.darkBg }}>
                Back to {brand.name}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SpecItem({ label, value }) {
  return (
    <div>
      <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
        {label}
      </span>
      <span className="block font-headline text-lg font-semibold text-on-surface">
        {typeof value === "number" ? value : value}
      </span>
    </div>
  );
}

function ListingCard({ yacht, accentHex }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-500">
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
        {yacht.source && (
          <span className="absolute top-4 right-4 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider bg-white/90 text-on-surface-variant">
            {yacht.source}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-headline text-lg font-bold text-on-surface mb-1">{yacht.title}</h3>
        <p className="font-headline font-bold text-lg mb-4" style={{ color: accentHex }}>{yacht.price}</p>
        <div className="grid grid-cols-2 gap-2 text-xs text-on-surface-variant font-label mb-6">
          {yacht.length && <span>Length: {yacht.length}</span>}
          {yacht.cabins && <span>Cabins: {yacht.cabins}</span>}
          {yacht.engine && <span className="col-span-2">Engine: {yacht.engine}</span>}
        </div>
        {yacht.hasDetail ? (
          <Link to={`/vessel/${yacht.id}`}>
            <Button className="w-full text-white hover:opacity-90 transition-opacity h-auto py-3 text-xs uppercase tracking-widest font-bold" style={{ backgroundColor: accentHex }}>
              View Details <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        ) : (
          <Button className="w-full text-white hover:opacity-90 transition-opacity h-auto py-3 text-xs uppercase tracking-widest font-bold" style={{ backgroundColor: accentHex }}>
            Request Info <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

function formatSpecLabel(key) {
  const map = {
    length: "Length",
    beam: "Beam",
    draft: "Draft",
    displacement: "Displacement",
    cabins: "Cabins",
    heads: "Heads",
    engine: "Engine",
    maxSpeed: "Max Speed",
    cruiseSpeed: "Cruise Speed",
    fuelCapacity: "Fuel Capacity",
    waterCapacity: "Water Capacity",
    range: "Range",
  };
  return map[key] || key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
}
