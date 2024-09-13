<template>
  <div class="col-md-3 card-box" :style="{ width: cardWidth }">
    <div class="card product-card">
      <h5 class="title">{{ title.substring(0, 10) }}</h5>
      <img :src="image" class="card-img-top" />
      <div class="card-body description-body" :style="{ backgroundColor: backgroundColor }">
        <div class="price-section">Rs {{ price }}</div>
        <p class="description">
          {{ description.substring(0, 100) + '...' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
.description-body {
  border-radius: 25px;
  height: 185px;
}

.product-card {
  border-radius: 25px;
  margin-bottom: 35px;
  overflow: hidden;
  box-shadow: 10px 15px 20px 0px #00000026;
  border: none !important;
}

.product-card .card-img-top {
  height: 200px;
  object-fit: contain;
  padding: 10px;
}

.product-card .price-section {
  padding: 15px;
  text-align: center;
  color: #0e42fd;
  font-size: 1.25rem;
  font-weight: bold;
}

.product-card .description {
  padding: 10px;
  font-size: 0.9rem;
  text-align: center;
}

.product-card .title {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
}
</style>
