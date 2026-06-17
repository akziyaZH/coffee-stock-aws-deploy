<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

<template>
  <div id="app-container">

    <Header />
    <div class="main-container">
      <h1 class="main-title">Main Title</h1>
      <main class="page-content">
        <RouterView />
      </main>

      <footer class="global-footer">
        <p>2026 Akziya Zhakupova</p>
      </footer>

    </div>

  </div>

</template>

<style scoped>
#app-container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background: antiquewhite;
}
.main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.main-title {
  padding: 1rem;
  color: darkolivegreen;
}

.page-content {
  flex: 1;
  padding: 1rem;
}

.global-footer {
  text-align: left;
  padding: 1rem 25rem;
}

p {
  font-weight: 550;
}

</style>
