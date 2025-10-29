const BASE = 'http://127.0.0.10:8010/api/'; 

async function handleRes(res) {
  if (!res.ok) {
    let body;
    try { body = await res.json(); } catch { body = await res.text(); }
    throw new Error(`${res.status} ${res.statusText} — ${JSON.stringify(body)}`);
  }
  return res.status === 204 ? null : res.json();
}

// GET - fetch all todos
export async function fetchTodos() {
  const res = await fetch(BASE);
  return handleRes(res);
}

// POST - create a new todo
export async function createTodo(todoData) {
  const res = await fetch(BASE + 'create/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todoData),
  });
  return handleRes(res);
}
//PUT - Editing
export async function updateTodo(id, updatedData) {
  const res = await fetch(`${BASE}update/${id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });
  return handleRes(res);
}
// DELETE - remove a todo
export async function deleteTodo(id) {
  const res = await fetch(`${BASE}delete/${id}/`, {
    method: 'DELETE',
  });
  return handleRes(res);
}

