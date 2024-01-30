<script setup>
const props = defineProps({
  size: {
    type: [String, Number],
    default: 18,
  },
});
</script>

<template>
  <div>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 7L7 17M7 7L17 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<style></style>
