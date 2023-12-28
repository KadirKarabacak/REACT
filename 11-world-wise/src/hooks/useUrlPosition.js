import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  // useSearchParams is a Router property which gives us URL params and query strings.
  const [searchParams] = useSearchParams();
  // It returns an object includes our data, and we use it to get data like this.
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
