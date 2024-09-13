<template>
  <div class="col-md-3 card-box" :style="{ width: cardWidth }">
    <div class="card shadow p-0 mb-5 bg-white rounded">
      <div class="card-header text-center">{{ title.substring(0, 10) }}</div>
      <img :src="image" class="card-img-top product-image" />
      <div
        class="card-body text-center car d-content"
        :style="{ backgroundColor: backgroundColor }"
      >
        <h5 class="card-title price-text">Rs {{ price }}</h5>
        <p class="card-text">
          {{ description.substring(0, 100) + '...' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  cardWidth?: string
  image?: string
  title?: string
  price?: number
  description?: string
  link?: string
  backgroundColor?: string
}>()

const cardWidth = props.cardWidth
const title = props.title
const image = props.image
const description = props.description
const price = props.price
const backgroundColor = props.backgroundColor
</script>

<style scoped>
.card-box {
  padding-left: 50px;
}
.card-content {
  border-radius: 16px 16px 16px 16px;
}
.card {
  border: none !important;
}

.price-text {
  color: #0e42fd;
}

.product-image {
  height: 300px;
}
</style>
