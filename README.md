#  Django + Svelte Todo App

A **full-stack Todo web application** built with **Django REST Framework** and **Svelte**.  
Designed as a **complete CRUD system** for managing tasks — it’s a **production-ready, modular, and scalable app** built for speed, simplicity, and growth.

---

##  Features

- Full CRUD operations (Create, Read, Update, Delete)
- Django REST API backend
- Svelte frontend with reactive state management
- Modular structure for scalability
- Production-ready setup for real-world deployment
- Simple and intuitive UI

---

## 🧩 Project Structure

django-svelte-todo/
├── backend/
│ ├── manage.py
│ ├── todos/
│ └── todo_system/
└── frontend/
├── src/
│ ├── api.js
│ ├── components/TodoList.svelte
│ └── App.svelte
└── package.json


---

##  Setup Instructions

### Backend (Django)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
