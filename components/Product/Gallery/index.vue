<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Controller } from 'swiper';

defineOptions({
  name: 'ProductGallery'
});
const firstSwiper = ref();
const secondSwiper = ref();
const swiperModules = [Pagination, Controller];
const { breakpointsValues } = useDefaultBreakpoints();
</script>

<template>
  <div class="product-gallery">
    <div class="product-gallery__mobile d-lg-none">
      <swiper
        class="thumb-swiper"
        :slides-per-view="1.06"
        :space-between="12"
        :slides-offset-after="20"
        :modules="swiperModules"
        :pagination="{ clickable: true }"
        :controller="{ control: secondSwiper }"
        :breakpoints="{
          [breakpointsValues.md]: {
            slidesPerView: 1.033
          }
        }"
        @swiper="($event) => (firstSwiper = $event)"
      >
        <SwiperSlide v-for="i in 5" :key="i">
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/054/078/non_2x/headphones-design-3d-rendering-for-product-mockup-free-png.png"
          />
        </SwiperSlide>
      </swiper>
      <swiper
        class="pagination-swiper"
        :slides-per-view="1"
        :modules="swiperModules"
        :pagination="{ clickable: true }"
        :controller="{ control: firstSwiper }"
        @swiper="($event) => (secondSwiper = $event)"
      >
        <SwiperSlide v-for="i in 5" :key="i">
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/054/078/non_2x/headphones-design-3d-rendering-for-product-mockup-free-png.png"
          />
        </SwiperSlide>
      </swiper>
      <Swiper :modules="[Pagination]" :pagination="{ clickable: true }">
      </Swiper>
    </div>
    <div class="product-gallery__desktop hidden-lg-and-down">
      <div class="product-gallery__thumbs"></div>
      <div class="product-gallery__main"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-gallery {
  &__mobile {
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
