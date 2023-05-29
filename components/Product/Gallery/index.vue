<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Controller, Thumbs } from 'swiper';

defineOptions({
  name: 'ProductGallery'
});
const firstSwiper = ref();
const secondSwiper = ref();
const thumbSwiper = ref();
const swiperModules = [Pagination, Controller];
const { breakpointsValues } = useDefaultBreakpoints();

const images = [
  'https://static.vecteezy.com/system/resources/previews/017/054/078/non_2x/headphones-design-3d-rendering-for-product-mockup-free-png.png',
  'https://toppng.com/uploads/preview/bluetooth-11523956721eadcmiqhou.png',
  'https://static.vecteezy.com/system/resources/previews/017/054/078/non_2x/headphones-design-3d-rendering-for-product-mockup-free-png.png',
  'https://toppng.com/uploads/preview/bluetooth-11523956721eadcmiqhou.png',
  'https://static.vecteezy.com/system/resources/previews/017/054/078/non_2x/headphones-design-3d-rendering-for-product-mockup-free-png.png'
];
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
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="image" />
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
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </SwiperSlide>
      </swiper>
      <Swiper :modules="[Pagination]" :pagination="{ clickable: true }">
      </Swiper>
    </div>
    <div class="product-gallery__desktop hidden-lg-and-down">
      <div class="product-gallery__thumbs">
        <swiper
          :slides-per-view="6"
          direction="vertical"
          :space-between="10"
          :modules="[Thumbs]"
          @swiper="(swiper) => (thumbSwiper = swiper)"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <img :src="image" />
          </SwiperSlide>
        </swiper>
      </div>
      <div class="product-gallery__main">
        <swiper
          :space-between="20"
          :allow-touch-move="false"
          :modules="[Thumbs]"
          :thumbs="{ swiper: thumbSwiper }"
        >
          <SwiperSlide v-for="(image, index) in images" :key="index">
            <img :src="image" />
          </SwiperSlide>
        </swiper>
      </div>
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
  &__desktop {
    display: flex;
  }
  &__thumbs {
    flex-grow: 1;
    position: relative;
    margin-right: var(--space-4);

    .swiper {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }
  &__main {
    width: 479px;
    @include media-breakpoint-up(xl) {
      width: 579px;
    }
    @include media-breakpoint-up(xxl) {
      width: 464px;
    }
    .swiper {
      width: 100%;
    }
  }
}
</style>
