<script setup lang="ts">
import StockCard from "@/components/StockCard.vue";
import {MOCK_DRINKS} from "@/data/MockInventory";
import {computed, ref} from "vue";
import StockType from "@/components/StockType.vue";
import {CATEGORY_FILTER} from "@/data/TypeData";
import {DrinkCategory} from "@/types/inventory";


const products = ref(MOCK_DRINKS)
const categories = ref(CATEGORY_FILTER)
const searchQuery = ref("")

// to search by product category
const activeCategory = ref<DrinkCategory | string>('')

const searchProduct = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  return products.value.filter(item => {
    if (activeCategory.value && item.category !== activeCategory.value) {
      return false
    }
    const matchesName = item.name.toLowerCase().includes(query);
    const matchesCategory = item.category.toLowerCase().includes(query)
    return matchesName || matchesCategory;
  })
})

const toggleFilterCategory = (category: DrinkCategory) => {
  if (activeCategory.value === category) {
    activeCategory.value = ''
  } else {
    activeCategory.value = category
  }
}

// filter products if category selected
const filteredProducts = computed(() => {
  if (!activeCategory.value) {
    return products.value
  } else {
    return products.value.filter(item => item.category === activeCategory.value)
  }
})

</script>

<template>
  <div class="current-stock">

    <div class="search-container">
      <p>{{ searchQuery }}</p>
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input
            v-model.lazy.trim="searchQuery"
            placeholder="Search..."
            class="search-input"
            @keyup.enter="searchProduct"
        />
      </div>
    </div>

    <div class="category-filter-grid">
      <StockType
          v-for="category in categories"
          :category="category"
          :is-active="activeCategory === category.category"
          @click="toggleFilterCategory(category.category)"
      />
    </div>

    <div class="card-grid">
      <StockCard  v-for="product in filteredProducts" :key="product.id"
                  :product="product"/>
    </div>

  </div>
</template>

<style scoped>
.current-stock {
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 72%;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0.5rem;
}
.category-filter-grid {
  display: grid;
  padding-bottom: 10px;
  grid-template-columns: repeat(5, 1fr);
}
.search-container {
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
}
.search-bar {
  display: flex;
  gap: 0.5rem;
  background-color: #f5f5f7;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  transition: all 0.2s ease-in-out;
}
.search-icon {
  user-select: none;
  color: #888888;
  font-size: 0.9rem;
}
.search-input {
  border: none;
  outline: none;
  background: none;
  width: 100%;
  font-size: 1rem;
}
.search-input::placeholder {
  color: #aaaaaa;
}

</style>