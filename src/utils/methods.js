import { per_page } from "../constants/pagination";

export const buildParams = (page, category) => {
  const params = new URLSearchParams();

  if (category !== null && category !== undefined) {
    params.append("q", category);
  }
  params.append("per_page", per_page);

  if (page !== undefined) {
    params.append("page", page);
  }
  return params;
};
