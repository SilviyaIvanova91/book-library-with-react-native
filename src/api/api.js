import axios from "axios";

const base = axios.create({
  baseURL: "https://ogykvnovfwemkwpelomc.supabase.co",
  headers: {
    apikey: "sb_publishable_hgiqZGHAhkiF8ioqStcNYQ_zbd7qB_1",
    "Content-Type": "application/json",
  },
});

const api = axios.create({
  ...base.defaults,
  baseURL: `${base.defaults.baseURL}/rest/v1`,
});

export default api;
