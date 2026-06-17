<template>
  <header class="global-navbar">
    <div class="logo">Coffee Shop</div>
    <nav class="nav-links">
      <RouterLink to="/" class="nav-item">Dashboard</RouterLink>
      <RouterLink to="/inventory" class="nav-item">Inventory</RouterLink>
      <RouterLink to="/contact" class="nav-item">Contact</RouterLink>
    </nav>
  </header>
</template>
<script setup lang="ts">
</script>

<style scoped>
  .global-navbar {
    display: flex;
    flex-direction: column;
    width: 10%;
    padding: 2rem;
    background: navajowhite;
  }
  .logo {
    font-size: 1.7rem;
    font-weight: bold;
    color: #42b883;
    padding-bottom: 5rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 22px;
    border: 1px solid transparent;
    background-color: transparent;
  }
  .nav-item {
    color: black;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  .router-link-active {
    border-color: #42b883;
    border-radius: 8px;
    background-color: #42b883;
  }
</style>