<template>
  <div class="container">
    <div class="heading">
      <Heading level="1" size="xl" color="black">Modern Walk</Heading>
    </div>
    <h2>{{ category }}</h2>
    <div class="row">
      <Card
        v-for="product in products"
        :key="product?.id"
        :title="product?.title"
        :image="product?.image"
        :price="product?.price"
        :description="product?.description"
        :background-color="getBackgroundColor(category)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Heading from '@/components/Heading.vue'
import Card from '@/components/Card.vue'
import ProductService from '@/services/ProductService'

// Accept the category as a prop
const props = defineProps<{ category: string }>()

const products = ref([])

const getBackgroundColor = (category: string) => {
  switch (category) {
    case "men's clothing":
      return '#2bd9af'
    case "women's clothing":
      return '#FF5E84'
    default:
      return '#f5f5f5'
  }
}

const loadProducts = async () => {
  try {
    // Fetch products filtered by category
    products.value = await ProductService.getFilteredProductsByCategory(props.category, 'desc')
  } catch (error) {
    console.error('Error loading products:', error)
  }
}

onMounted(loadProducts)
</script>
