import { API_KEY } from "../config/constants";

export function getHeaders() {
  return {
    headers: {
      "X-Authorization": API_KEY,
    },
  };
}
