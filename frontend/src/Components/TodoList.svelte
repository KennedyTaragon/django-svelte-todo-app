<script>
  import { onMount } from 'svelte';
  import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api.js';  // Add updateTodo here
  import { fade } from 'svelte/transition';
  
  let todos = [];
  let loading = true;
  let error = null;
  let newTitle = '';
  let newBody = '';
  
  async function loadTodos() {
    loading = true;
    error = null;
    try {
      todos = await fetchTodos();
    } catch (err) {
      error = err.message || String(err);
      todos = [];
    } finally {
      loading = false;
    }
  }
  
  async function addTodo() {
    if (!newTitle.trim()) return;
    try {
      const newTodo = await createTodo({ title: newTitle, body: newBody });
      todos = [...todos, newTodo];
      newTitle = '';
      newBody = '';
    } catch (err) {
      error = err.message || String(err);
    }
  }
  
  async function saveEdit(todo) {
    try {
      await updateTodo(todo.id, { title: todo.title, body: todo.body });
      todo.editing = false;
      todos = [...todos]; // trigger reactivity
    } catch (err) {
      error = err.message || String(err);
    }
  }
  async function removeTodo(t) {
  try {
    await deleteTodo(t.id);
    todos = todos.filter(td => td.id !== t.id);
  } catch (err) {
    error = err.message || String(err);
  }
}

  
  onMount(loadTodos);
</script>

<h2>Todos</h2>

<!-- Add Form -->
<form on:submit|preventDefault={addTodo}>
  <input
    type="text"
    placeholder="Title"
    bind:value={newTitle}
    required
  />
  <input
    type="text"
    placeholder="Body"
    bind:value={newBody}
  />
  <button type="submit">Add</button>
</form>

{#if loading}
  <p>Loading todos…</p>
{:else if error}
  <p style="color: red">Error: {error}</p>
{:else if todos.length === 0}
  <p>No todos yet.</p>
{:else}
<ul>
  {#each todos as t}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li on:click={() => (t.show = !t.show)}>
      <strong>{t.title}</strong>

     {#if t.show}
        {#if t.editing}
          <br>
          <input 
            bind:value={t.title} 
            placeholder="Title" 
            on:click|stopPropagation
          />
          <input 
            bind:value={t.body} 
            placeholder="Body" 
            on:click|stopPropagation
          />
          <button on:click|stopPropagation={() => saveEdit(t)}>Save</button>
          <button on:click|stopPropagation={() => (t.editing = false)}>Cancel</button>
        {:else}
          <br>
          <small>{t.body}</small><br>
          <button on:click|stopPropagation={() => (t.editing = true)}>Edit</button>
          <button on:click|stopPropagation={() => removeTodo(t)}>Delete</button>
                
  {/if}
{/if}
  {/each}
</ul>



{/if}
