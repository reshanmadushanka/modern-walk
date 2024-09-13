<template>
  <div class="container">
    <div class="heading">
      <Heading level="1" size="xl" color="black">Modern Walk</Heading>
    </div>
    <h2 class="mb-5 home-title">Flash Sale</h2>
    <div id="cardCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- products flash -->
        <div
          v-for="(carouselItems, index) in groupedProducts"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div class="row">
            <Card
              v-for="product in carouselItems"
              :key="product?.id"
              :title="product?.title"
              :image="product?.image"
              :price="product?.price"
              :description="product?.description"
              :background-color="getBackgroundColor(product?.category)"
            />
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <h2 class="mt-4 mb-2 home-title">Categories</h2>
    <div class="row">
      <!-- Left Rectangle -->
      <RouterLink to="/mens-clothing" class="col half-rectangle left-rectangle mens-box"
        >Men's Clothing</RouterLink
      >
      <!-- Right Rectangle -->
      <RouterLink to="/womens-clothing" class="col half-rectangle right-rectangle"
        >Women's Clothing</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import ProductService, { Product } from '@/services/ProductService'
import Heading from '@/components/Heading.vue'
import Card from '@/components/Card.vue'

const products = ref<Product[]>([])

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

onMounted(async () => {
  try {
    products.value = await ProductService.getLimitedProducts(20, 'desc') // Fetch products from the service
  } catch (error) {
    console.error('Error loading products:', error)
  }
})

const groupedProducts = computed(() => {
  const chunkSize = 4
  const result = []
  for (let i = 0; i < products.value.length; i += chunkSize) {
    result.push(products.value.slice(i, i + chunkSize))
  }
  return result
})
</script>

<style scoped>
.half-rectangle {
  height: 300px; /* Full height */
  border-radius: 25px;
  display: flex;
  margin: 15px 15px 50px 15px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
}
.left-rectangle {
  background-color: #2bd9af;
  box-shadow: 10px 15px 20px 0px #00000026;
}
.right-rectangle {
  background-color: #ff5e84;
  box-shadow: 10px 15px 20px 0px #00000026;
}

.home-title {
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
}
</style>
