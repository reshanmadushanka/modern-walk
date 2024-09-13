<template>
  <component :is="`h${level}`" :class="headingClass" class="heading-style">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  level?: number
  size?: string
  color?: string
}>()

const level = props.level || 1
const headingClass = `text-${props.size || 'lg'} text-${props.color || 'dark'}`
</script>

<style scoped>
.heading-style {
  line-height: 70px;
  font-weight: 700;
}
</style>
