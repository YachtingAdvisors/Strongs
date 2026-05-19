import { useState, useEffect } from "react";
import { fetchMultipleMicrolinkImages } from "@/lib/microlink";

export default function useMicrolinkImages(urls, fallbacks = []) {
  const [images, setImages] = useState(fallbacks);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!urls || urls.length === 0) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    fetchMultipleMicrolinkImages(urls).then((results) => {
      if (cancelled) return;
      const merged = results.map((r, i) => ({
        src: r?.image || r?.ogImage || fallbacks[i] || "",
        logo: r?.logo || null,
        title: r?.title || "",
        description: r?.description || "",
      }));
      setImages(merged);
      setLoading(false);
    });

    return () => { cancelled = true; };
  }, [JSON.stringify(urls)]);

  return { images, loading };
}
