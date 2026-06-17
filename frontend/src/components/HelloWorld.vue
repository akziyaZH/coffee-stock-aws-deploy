<script setup lang="ts">
import {ref} from "vue";

defineProps<{
  msg: string
}>()

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <button @click="increment">
      CLICK ME
    </button>
    <p>{{ count }}</p>
  </div>
</template>

<style scoped>
.greetings {
  background-color: hotpink;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: 10px;
  color: red;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

</style>
