import { toast } from "react-toastify";

const API_URL = "https://react-fast-pizza-api.jonas.io/api";

/**
 * Helper to handle fetch responses consistently
 */
async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);

  return res.json();
}

export async function getMenu() {
  try {
    const { data } = await fetchJSON(`${API_URL}/menu`);
    return data;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
}

export async function getOrder(id) {
  try {
    const { data } = await fetchJSON(`${API_URL}/order/${id}`);
    return data;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
}

export async function createOrder(newOrder) {
  try {
    const { data } = await fetchJSON(`${API_URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    return data;
  } catch (error) {
    toast.error("Failed creating your order");
    throw error;
  }
}

export async function updateOrder(id, updateObj) {
  try {
    await fetchJSON(`${API_URL}/order/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    });
  } catch (error) {
    toast.error("Failed updating your order");
    throw error;
  }
}
