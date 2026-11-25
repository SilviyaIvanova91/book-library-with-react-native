import api from "./api";

export async function getAll() {
  const response = await api.get("/books");

  return response.data;
}

export async function getFeatured() {
  const response = await api.get("/books?select=*&order=title.asc&limit=5");

  return response.data;
}

export async function getById(id) {
  const response = await api.get(`/books?id=eq.${id}&select=*`);
  return response.data[0];
}

export async function create(book) {
  const response = await api.post("/books", book, {
    headers: {
      Prefer: "return=representation",
    },
  });

  return response.data[0];
}

export async function update(id, book) {
  const response = await api.patch(`/books?id=eq.${id}`, book, {
    headers: {
      Prefer: "return=representation",
    },
  });

  return response.data[0];
}

export async function remove(id) {
  await api.delete(`/books?id=eq.${id}`);
}
