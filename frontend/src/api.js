// frontend/src/api.js
// Small helper module for calling Django todos API.

const BASE = 'http://127.0.0.10:8010/api/'; 

async function handleRes(res) {
  // handling non-2xx responses
  if (!res.ok) {
    // parsing JSON error
    let body;
    try { body = await res.json(); } catch { body = await res.text(); }
    throw new Error(`${res.status} ${res.statusText} — ${JSON.stringify(body)}`);
  }
  // if no content (204), return null
  return res.status === 204 ? null : res.json();
}

// src/api.js
export async function fetchTodos() {
    const response = await fetch('http://127.0.0.10:8010/api/');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

