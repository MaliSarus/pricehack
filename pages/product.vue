<script setup lang="ts">
import { ShareIcon16 } from 'ui-layer/assets/icons/share';
import { ChartIcon16 } from '~/pricehack-ui/assets/icons';

defineOptions({
  name: 'ProductPage'
});
</script>

<template>
  <div class="product-page">
    <section class="section product-section">
      <div class="product-section__top hidden-lg-and-down">
        <div class="product-section__title-block">
          <h1
            class="product-section__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg"
          >
            Диван-кровать NRAVA Hit 2180х870х940
          </h1>
          <div class="product-section__top-controls">
            <el-button text :icon="ShareIcon16">Поделиться</el-button>
            <el-button text :icon="ChartIcon16">Добавить к сравнению</el-button>
          </div>
        </div>
        <div class="product-section__top-subsections">
          <a href="/" class="product-section__top-rating">
            <UiRating value="4" disabled />
          </a>
          <a href="/" class="product-section__top-questions"></a>
          <div href="/" class="product-section__vendor-code"></div>
        </div>
      </div>
    </section>
    <section class="section same-products-section"></section>
    <section class="section product-info-section"></section>
    <section class="section category-products-section"></section>
    <section class="section recommended-products-section"></section>
    <section class="section viewed-products-section"></section>
  </div>
</template>

<style scoped lang="scss"></style>
