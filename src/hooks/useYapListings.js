import { useState, useEffect, useCallback } from "react";

const YAP_BASE = "https://yap.yachtadvisors.pro/api/v1";

const FALLBACK_LISTINGS = [
  {
    id: "fairline-phantom-65",
    title: "2024 Fairline Phantom 65",
    price: "Contact for Price",
    length: "65 ft",
    year: 2024,
    make: "Fairline",
    model: "Phantom 65",
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
    model: "82",
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
    model: "Predator 65",
    cabins: 3,
    engine: "Twin MTU M96L",
    condition: "Pre-Owned",
    img: "https://images.boatsgroup.com/images/1/6/54/2016-sunseeker-manhattan-65-power-9560654-20240925074526805-1_XLARGE.jpg",
  },
  {
    id: "azimut-50",
    title: "2024 Azimut 50 Flybridge",
    price: "$1,950,000",
    length: "50 ft",
    year: 2024,
    make: "Azimut",
    model: "50 Flybridge",
    cabins: 3,
    engine: "Twin Volvo Penta D8",
    condition: "New",
    img: "https://images.boatsgroup.com/images/1/98/23/2015-azimut-atlantis-50-power-10089823-20260220141926958-1.jpg",
  },
  {
    id: "princess-v55",
    title: "2024 Princess V55",
    price: "$1,750,000",
    length: "55 ft",
    year: 2024,
    make: "Princess",
    model: "V55",
    cabins: 3,
    engine: "Twin Volvo Penta IPS 950",
    condition: "New",
    img: "https://images.boatsgroup.com/images/1/12/58/2017-princess-56-power-10091258-20260223063308309-3.jpg",
  },
  {
    id: "pearl-63",
    title: "2024 Pearl 63",
    price: "$2,100,000",
    length: "63 ft",
    year: 2024,
    make: "Pearl",
    model: "63",
    cabins: 3,
    engine: "Twin Volvo Penta IPS 1050",
    condition: "New",
    img: "https://cdn.mdsbrand.com/mean-strongs-marine/yacht-buyer/yacht-buyer-img-7.webp",
  },
];

function normalizeYapListing(raw) {
  const price = raw.price
    ? `$${Number(raw.price).toLocaleString()}`
    : "Contact for Price";

  return {
    id: raw.slug || raw.id || `yacht-${raw.make}-${raw.model}`.toLowerCase().replace(/\s+/g, "-"),
    title: raw.title || `${raw.year || ""} ${raw.make || ""} ${raw.model || ""}`.trim(),
    price,
    length: raw.length ? `${raw.length} ft` : "",
    year: raw.year || null,
    make: raw.make || "",
    model: raw.model || "",
    cabins: raw.cabins || raw.staterooms || null,
    engine: raw.engine || raw.engines || "",
    condition: raw.condition || "New",
    img: raw.images?.[0]?.url || raw.thumbnail || raw.primaryImage || "",
    hasDetail: !!raw.slug,
    source: raw.source || raw.feed || null,
  };
}

async function fetchFromFeed(feedName, params) {
  try {
    const res = await fetch(`${YAP_BASE}/${feedName}/listings?${params}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.listings || data.data || data.results || []).map((r) => ({
      ...r,
      source: feedName,
    }));
  } catch {
    return [];
  }
}

export default function useYapListings(opts = {}) {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [source, setSource] = useState("loading");

  const fetchListings = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({ dealer: "strongs-marine" });
      if (opts.make) params.set("make", opts.make);
      if (opts.condition) params.set("condition", opts.condition);
      if (opts.limit) params.set("limit", opts.limit);
      if (opts.model) params.set("model", opts.model);

      const [yachtrResults, yatcoResults, mainResults] = await Promise.allSettled([
        fetchFromFeed("yachtr", params),
        fetchFromFeed("yatco", params),
        fetchFromFeed("listings", params),
      ]);

      const allRaw = [
        ...(mainResults.status === "fulfilled" ? mainResults.value : []),
        ...(yachtrResults.status === "fulfilled" ? yachtrResults.value : []),
        ...(yatcoResults.status === "fulfilled" ? yatcoResults.value : []),
      ];

      const seen = new Set();
      const deduped = allRaw.filter((r) => {
        const key = (r.title || `${r.make}-${r.model}-${r.year}`).toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });

      const items = deduped.map(normalizeYapListing);

      if (items.length > 0) {
        setListings(items);
        setSource("yap");
      } else {
        let fallback = FALLBACK_LISTINGS;
        if (opts.searchTerms) {
          fallback = filterBySearchTerms(FALLBACK_LISTINGS, opts.searchTerms);
        }
        setListings(fallback);
        setSource("fallback");
      }
    } catch (err) {
      setError(err.message);
      let fallback = FALLBACK_LISTINGS;
      if (opts.searchTerms) {
        fallback = filterBySearchTerms(FALLBACK_LISTINGS, opts.searchTerms);
      }
      setListings(fallback);
      setSource("fallback");
    } finally {
      setLoading(false);
    }
  }, [opts.make, opts.condition, opts.limit, opts.model, opts.searchTerms?.join(",")]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  return { listings, loading, error, source, refetch: fetchListings };
}

function filterBySearchTerms(listings, terms) {
  if (!terms || terms.length === 0) return listings;
  const lowerTerms = terms.map((t) => t.toLowerCase());
  return listings.filter((l) => {
    const haystack = `${l.title} ${l.make} ${l.model || ""}`.toLowerCase();
    return lowerTerms.some((t) => haystack.includes(t.toLowerCase()));
  });
}
