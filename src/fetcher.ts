import useSWR from "swr";

export function makeRequest<T>(url: string) {
  return useSWR<T>(url, fetchJson);
}

async function fetchJson(url: string) {
  const r = await fetch(url);
  return await r.json();
}
