<script setup lang="ts">
  import type { SearchTypeCard}  from "@/types/inventory";

  defineProps<{
   category: SearchTypeCard,
    isActive: boolean
  }>()
</script>

<template>
    <button :class="['category-filter', { 'is-active': isActive }]">
      <img :src="category.image" :alt="category.name" class="image" />
      <span class="category-name">{{ category.name }}</span>
    </button>
</template>

<style scoped>
.category-filter {
  display: flex;
  flex-direction: column;
  outline: none;
  background-color: white;
  align-items: center;
  min-width: 100px;
  width: 14%;
  min-height: 80px;
  padding: 5px;
  border: 1px solid gainsboro;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
.category-filter:hover {
  transform: translateY(-1px);
  border-color: #cbd5e1;
}
.category-filter.is-active {
  border-color: gainsboro;
  background-color: darkseagreen;
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.12), 0 0 0 2px rgba(66, 184, 131, 0.1);
}
.image {
  width: 55px;
  height: 55px;
  object-fit: contain;
  align-self: center;
}
.category-name {
  font-size: 0.9rem;
  padding: 0.5rem;
}
</style>