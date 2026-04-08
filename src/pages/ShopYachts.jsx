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
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuMIagXq4QbZSLc0R6wkN79zLV6wzS2tY3b_IvcxYeGyBWLapd6l6ZllRLwf5Mhu5M5fkIrkVOPYXo8ISERZqxis3z2l2f3b1mShk_oJROtjZs3Y0ouum5klwZYneYE2GFIx0xvatWoXggDTPMUxl_XtucI5QKOGlMZvbHuEP7eIPRLgeOPIELvdfMkRiL_j_ORzElwAowt5dLfMD0JXPiCbQfwZJ1NgZelzDLzIQQlzuGk7XsRsRW165r_hnTgNaQNnEWXa4DIBk",
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
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_ZPB6kRzZN0M9XI-r6xawWopggKfaMfl0Hv4Y1GS_euOJ4-TaSoMgdpFd4qrQ-X-_5d8c3gitSfBc5NwGVyWvM8FzBR1KLuXbNjw5jyXIQStqoNCYi1cXqunALuu4Y5dF6rDpQhBEbbF3Xa3Re0k52DTvbJxHrQ3wdikJ_sk-lPWwWmcyuHvVO-1f-EU0kDNLiAwE-08WiWmS-dpj--SRWRjWRegaD3Lzi8X0uCOpnnoblPPGAYt-U2iNIz7onj6YFt9TehDS9XY",
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
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkmf9l3euQKVuLnGlMauWKnUvsFM7OXvtXoR9hiQi0twi8yZTFYArgyE9i2OGy2Ej-NZxaLn6dI6at8g1SGVlglfc_nPFytQPmrw7JbwRtrwHijDMmEPvKVG6Pf18TSKM-fRmXp689_TDKvNsG8FNsXphDup99lrAHVitRMEBckQBBlaxD1W8sCqgEJ7idtkf2z61khxRuz2QjtN0BQfHWNWr5tLtiMs8XCylF-LkLGOxSmmohjnWSodQjXZcbjZ8onCy1wpzAP5I",
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
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVKsa1NuvUI7x_iUzVBfLguWc6gvdcD3rLhETzhChZuoB-vFN8ajh8NdeoWl-3-3gWDwcaZfUH7i673lPiGMFF2VbTygdVMaKxcEcHXFqXybuI0tzyLi-IXTG_jD-WZF6eY2RBRFiMQ_igQqwrIPwi1u_ZjgYZbRtUBxJ3zDMFeOGvbdup5jOI-HDstS4bBzxKqAyDhNW1nb29OeOdAgXIP_m_YhRZ3e5BMcFJ1yHzE3OWhhxbs-KDv83f1H2oeh5pzsLJCxnzT64",
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
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4_sK9F-cp4rBp7llRVrAohIKRYnD1dQUo0euIXuoTR1eXwP9_xB3TWEd7etp0i1xjsUTk1u05WPBPj5UZFyf87g1nm4MForPE7Zc2EF1x4i5iuS_sNCsbo-Vwkznebj2HSVHGT0dSNqe-puABiDrrIaK3TplSLwgQz2SFUm6GFVvmgSzqYRIxfmmacOD6KO81hcpR5esvrKQS5VN85kG1Wy3mzHiMMg4TC0HcJBJ9r2rRYX5zVmmaGeGpjGsHRmf-zfqvWkeMYY",
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
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Whk5tLJyhmZYKmn59iD4PBdQYsfT3O995p2DYb_MWzI2qedx_6QLds2o3FeWs09l3BfFcmNHqKvqQ3zDEXBfKHoypBK5gTs5FUsJ7g7fLVhP7M8wR3xq63P80i6wW2VpFJvOStQ5E_Ljm2IqmM0IPLx7bxGYo5HU8gqDKb45EI84MnxM9vpAO-uflaY6fq_RVFAql8WVqO8thRaV-IXXFHusxwT_aiG17GCjvExOG7WogX0A3c5OQw_bWhEkNsKa7OQdKAcIIvM",
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
