<script lang="ts">
export default {
  name: 'ProductCard'
};
</script>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Controller } from 'swiper';
import { StarSolidIcon12, ChartIcon16, HeartIcon16 } from 'ui-layer/assets/icons';
import { ref } from 'vue';

// eslint-disable-next-line vue/no-dupe-keys
const {
  product = {
    id: undefined,
    images: [
      'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
    ],
    name: undefined,
    rate: undefined,
    feedbackCount: undefined,
    price: undefined,
    oldPrice: undefined
  }
} = defineProps<{
  product: {
    id: string;
    images: string[];
    name: string;
    rate: number;
    feedbackCount: number;
    price: number;
    oldPrice: number;
    isNew?: boolean;
    isSale?: boolean;
  };
}>();
const firstSwiper = ref();
const secondSwiper = ref();
const swiperModules = [Pagination, Controller];
</script>
<template>
  <el-card class="product-card" shadow="hover">
    <div class="product-card__images">
      <swiper
        class="thumb-swiper"
        :slides-per-view="1"
        :modules="swiperModules"
        :pagination="{ clickable: true }"
        :controller="{ control: secondSwiper }"
        @swiper="($event) => (firstSwiper = $event)"
      >
        <swiper-slide
          v-for="(imageSrc, index) in product.images"
          :key="product.id + index"
        >
          <img :src="imageSrc" />
        </swiper-slide>
      </swiper>
      <swiper
        class="pagination-swiper"
        :slides-per-view="1"
        :modules="swiperModules"
        :pagination="{ clickable: true }"
        :controller="{ control: firstSwiper }"
        @swiper="($event) => (secondSwiper = $event)"
      >
        <swiper-slide
          v-for="(imageSrc, index) in product.images"
          :key="product.id + index"
        >
          <img :src="imageSrc" />
        </swiper-slide>
      </swiper>

      <div class="product-card__absolute-controls">
        <div class="product-card__tags">
          <UiTag v-if="product.isSale" type="error" round>Распродажа</UiTag>
          <UiTag v-if="product.isNew" type="success" round>Новинка</UiTag>
        </div>
        <div class="product-card__add-controls">
          <el-button :icon="ChartIcon16" circle size="small" />
          <el-button :icon="HeartIcon16" circle size="small" />
        </div>
      </div>
    </div>
    <div class="product-card__text">
      <div class="product-card__price">
        <span
          class="subtitle2-tablet color_text-primary product-card__current-price"
          >{{ product.price }}&nbsp;₽</span
        >
        <el-badge v-if="product.isSale" :type="('error' as any)" value="-40%" />
        <del class="color_text-secondary text-xs"
          >{{ product.oldPrice }}&nbsp;₽</del
        >
      </div>
      <div class="product-card__name color_text-primary text-s">
        {{ product.name }}
      </div>
      <div class="product-card__add">
        <div
          class="product-card__rate text-xs color_text-tertiary d-inline-flex align-items-center"
        >
          <el-icon class="color_attention"><StarSolidIcon12 /></el-icon>
          {{ product.rate }}
        </div>
        <div class="product-card__feedbacks text-xs color_text-tertiary">
          {{ product.feedbackCount }}
        </div>
      </div>
      <div class="product-card__controls">
        <el-button type="primary"> В корзину </el-button>
      </div>
      <div class="product-card__counts text-s color_text-tertiary">
        Магазин 23/25
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.product-card {
  --el-card-padding: var(--space-3);
  --el-card-border-radius: var(--buttons-big-radius);
  --el-box-shadow-light: var(--shadow-m);
  --el-card-border-color: var(--white-color);
  &:focus-visible,
  &:hover {
    --el-card-border-color: var(--disabled-bg-color);
  }
  &__images {
    position: relative;
    margin-bottom: var(--space-4);
    .thumb-swiper {
      background-color: var(--bg-dark-color);
      border-radius: var(--buttons-small-radius);
      + .pagination-swiper {
        margin-top: var(--space-1);
      }
      .swiper-pagination {
        display: none;
      }
    }
  }
  &__absolute-controls {
    position: absolute;
    top: var(--space-2);
    left: var(--space-2);
    right: var(--space-2);
    pointer-events: none;
    z-index: 1;
    display: flex;
  }
  &__tags {
    flex-basis: 50%;
    .el-tag {
      + .el-tag {
        margin-top: var(--space-1);
      }
    }
  }
  &__add-controls {
    text-align: right;
    flex-basis: 50%;
    .el-button {
      --el-button-bg-color: var(--white-color);
      --el-button-border-color: var(--white-color);
      --el-button-text-color: var(--text-secondary-color);
      --el-button-hover-bg-color: var(--white-color);
      --el-button-hover-border-color: var(--white-color);
      --el-button-active-border-color: var(--white-color);
      --el-button-active-bg-color: var(--white-color);
      pointer-events: all;
      border-radius: 9999px;
    }
  }
  &__text {
    > * {
      margin: var(--space-2) 0;
    }
  }
  &__price {
    .el-badge {
      vertical-align: top;
      margin-left: var(--space-2);
    }
    del {
      vertical-align: top;
      margin-left: var(--space-2);
    }
  }
  &__add {
    display: flex;
  }
  &__rate {
    margin-right: var(--space-2);
  }
  &__feedbacks {
    text-decoration: underline;
  }
  &__controls {
    margin: var(--space-4) 0;
  }
}
</style>
