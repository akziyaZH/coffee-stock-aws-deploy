<script setup lang="ts">
  import type { DrinkProduct } from "@/types/inventory";

  defineProps<{
    product: DrinkProduct
  }>()
</script>

<template>
  <div class="stock-card">

    <div class="title-row">
      <div class="icon-placeholder">☕</div>
      <h4 class="product-title">{{ product.name }}</h4>
      <span class="weight-badge">1kg</span>
    </div>

    <div class="quantity-stack">
      <span class="unit-amount">{{ product.currentStock }}</span>
      <span class="unit-type">units ({{ product.unitType }})</span>
      <span class="stock-alert">Stable</span>
    </div>

  </div>
</template>

<style scoped>
  .stock-card {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    min-height: 150px;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 12px;
    background-color: floralwhite;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  .icon-placeholder {
    font-size: 2.1rem;
  }
  .weight-badge {
    background-color: #f0f0f0;
    color: #666666;
    font-size: 0.85rem;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
  }
  .title-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
  .quantity-stack {
    display: flex;
    flex-direction: column;
    margin-top: auto;
  }
  .unit-amount {
    font-size: 25px;
    font-weight: bold;
  }
  .unit-type {
    font-size: 14px;
    color: gray;
  }
  .stock-alert {
    color: green;
    font-weight: bold;
  }
</style>


<!--"id": "prod-1",-->
<!--"name": "House Espresso Blend",-->
<!--"category": "Beans",-->
<!--"currentStock": 12,-->
<!--"minThreshold": 6,-->
<!--"unitType": "kg",-->
<!--"costPerUnit": 18.50-->
<script setup lang="ts">
</script>