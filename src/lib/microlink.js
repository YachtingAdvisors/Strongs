const MICROLINK_API = "https://api.microlink.io";

const cache = new Map();

export async function fetchMicrolinkImage(url, opts = {}) {
  const key = url + JSON.stringify(opts);
  if (cache.has(key)) return cache.get(key);

  const params = new URLSearchParams({
    url,
    screenshot: opts.screenshot ? "true" : "false",
    meta: "true",
    embed: "screenshot.url",
  });

  if (opts.screenshot) {
    if (opts.waitForTimeout) params.set("screenshot.waitForTimeout", opts.waitForTimeout);
    if (opts.fullPage) params.set("screenshot.fullPage", "true");
    if (opts.overlay) {
      params.delete("embed");
      params.set("screenshot", "true");
    }
  }

  try {
    const res = await fetch(`${MICROLINK_API}?${params}`);
    const json = await res.json();

    if (json.status !== "success") return null;

    const result = {
      image: json.data?.screenshot?.url || json.data?.image?.url || null,
      logo: json.data?.logo?.url || null,
      title: json.data?.title || "",
      description: json.data?.description || "",
      ogImage: json.data?.image?.url || null,
    };

    cache.set(key, result);
    return result;
  } catch {
    return null;
  }
}

export async function fetchMultipleMicrolinkImages(urls) {
  const results = await Promise.allSettled(
    urls.map((entry) => {
      const url = typeof entry === "string" ? entry : entry.url;
      const opts = typeof entry === "string" ? {} : entry;
      return fetchMicrolinkImage(url, opts);
    })
  );
  return results.map((r) => (r.status === "fulfilled" ? r.value : null));
}
