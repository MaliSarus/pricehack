<script setup lang="ts">
defineOptions({
  name: 'ProductPage'
});
</script>

<template>
  <div class="product-page">
    <ProductSection />
    <section class="section same-products-section"></section>
    <section class="section product-info-section"></section>
    <section class="section category-products-section"></section>
    <section class="section recommended-products-section"></section>
    <section class="section viewed-products-section"></section>
  </div>
</template>

<style scoped lang="scss"></style>
