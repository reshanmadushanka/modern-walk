<template>
  <div class="container">
    <router-link :to="{ name: 'home' }" class="home-to-link">
      <div class="heading">
        <Heading level="1" size="xl" color="black">Modern Walk</Heading>
        <hr />
      </div>
    </router-link>
    <h3 class="product-category">{{ category }}</h3>
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
    products.value = await ProductService.getFilteredProductsByCategory(props.category, 'desc')
  } catch (error) {
    console.error('Error loading products:', error)
  }
}

onMounted(loadProducts)
</script>

<style>
.product-category {
  text-transform: capitalize;
  font-weight: bold;
  padding: 25px;
  font-size: 20px;
}
.home-to-link {
  text-decoration: none;
}
</style>
