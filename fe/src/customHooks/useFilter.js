import { items } from "../assets/Data";

export function useFilter(filterBy, callback) {
  const filteredData = items.filter(
    (product) => callback(product) === filterBy
  );

  return [filteredData];
}
