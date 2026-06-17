<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
</script>

<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
    <h3>Please Contact me for any questions and concerns</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.4rem;
}

.contacts h1,
.contacts h2 {
  text-align: center;
}
</style>