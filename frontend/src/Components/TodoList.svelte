<script>
  import { onMount } from 'svelte';
  import { fetchTodos } from '../api.js';

  let todos = [];
  let loading = true;
  let error = null;

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

  onMount(loadTodos);
</script>

{#if loading}
  <p>Loading todos…</p>
{:else if error}
  <p style="color: red">Error: {error}</p>
{:else if todos.length === 0}
  <p>No todos yet.</p>
{:else}
  <ul>
    {#each todos as t}
      <li>
        <strong>{t.title}</strong><br>
        <small>{t.body}</small>
      </li>
    {/each}
  </ul>
{/if}
