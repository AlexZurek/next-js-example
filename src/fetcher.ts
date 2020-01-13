import useSWR from "swr";
import axios from "axios";

export function makeRequest<T>(url: string) {
  return useSWR<T>(url, fetchJson);
}

async function fetchJson(url: string) {
  try {
    return await axios.get(url).then(r => r.data);
  } catch (error) {
    console.error(error);
  }
}
