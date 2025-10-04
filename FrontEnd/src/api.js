const API_URL = "http://127.0.0.1:8000";

export async function register(email, password) {
  const res = await fetch(`${API_URL}/auth/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/token/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (data.auth_token) {
    localStorage.setItem("token", data.auth_token);
  }
  return data;
}

export async function getProfile() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/accounts/me/`, {
    headers: { Authorization: `Token ${token}` },
  });
  return res.json();
}
