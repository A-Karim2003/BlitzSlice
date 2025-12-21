const API_URL = "https://react-fast-pizza-api.jonas.io/api";

async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Response(`Request failed (${res.status})`, {
      status: res.status,
      statusText: res.statusText,
    });
  }

  return res.json();
}

export async function getMenu() {
  try {
    const { data } = await fetchJSON(`${API_URL}/menu`);
    return data;
  } catch (error) {
    throw error.message;
  }
}

export async function getOrder(id) {
  try {
    const { data } = await fetchJSON(`${API_URL}/order/${id}`);
    return data;
  } catch (error) {
    if (error.status === 404) {
      throw new Response("Order not found", { status: 404 });
    }
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
    throw error.message;
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
    throw error.message;
  }
}
