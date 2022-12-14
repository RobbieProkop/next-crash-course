import { articles } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length > 0) {
    return res.status(200).json(filtered[0]);
  }
  return res.status(404).json(`article with the id of ${id} is not found`);
}
