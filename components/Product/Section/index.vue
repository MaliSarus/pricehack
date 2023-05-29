<script setup lang="ts">
import { ShareIcon16, ChartIcon16, ChatIcon12 } from 'ui-layer/assets/icons';

defineOptions({
  name: 'ProductSection'
});
</script>

<template>
  <section class="section product-section">
    <div class="product-section__top hidden-lg-and-down">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="product-section__title-block d-flex align-items-center">
              <h1
                class="product-section__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg me-auto"
              >
                Диван-кровать NRAVA Hit 2180х870х940
              </h1>
              <div class="product-section__top-controls flex-shrink-0">
                <el-button text :icon="ShareIcon16">Поделиться</el-button>
                <el-button text :icon="ChartIcon16"
                  >Добавить к сравнению</el-button
                >
              </div>
            </div>
            <div
              class="product-section__top-subsections d-flex align-items-center"
            >
              <a
                href="/"
                class="product-section__top-rating product-section__top-subsections-item d-flex align-items-center color_text-secondary text-s"
              >
                <UiRating :model-value="4" disabled />&nbsp;24 отзыва
              </a>
              <a
                href="/"
                class="product-section__top-questions product-section__top-subsections-item d-flex align-items-center color_text-secondary text-s"
              >
                <el-icon class="color_text-tertiary"><ChatIcon12 /></el-icon
                >&nbsp;12 вопросов
              </a>
              <div
                href="/"
                class="product-section__vendor-code product-section__top-subsections-item color_text-tertiary text-s order-md-1"
              >
                Артикул:&nbsp;<span class="color_text-secondary"
                  >110538091</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-section__main">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7 col-xxl-5">
            <div class="product-section__gallery">
              <ProductGallery />
            </div>
          </div>
          <div class="col-12 col-lg-5 col-xxl-7">
            <div class="product-section__info">
              <div class="d-lg-none">
                <h1
                  class="product-section__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg me-auto"
                >
                  Диван-кровать NRAVA Hit 2180х870х940
                </h1>
                <div
                  class="product-section__top-subsections d-flex flex-wrap align-items-center"
                >
                  <div
                    href="/"
                    class="product-section__vendor-code product-section__top-subsections-item color_text-tertiary text-s order-md-1"
                  >
                    Артикул:&nbsp;<span class="color_text-secondary"
                      >110538091</span
                    >
                  </div>
                  <a
                    href="/"
                    class="product-section__top-rating product-section__top-subsections-item d-flex align-items-center color_text-secondary text-s"
                  >
                    <UiRating :model-value="4" disabled />&nbsp;24 отзыва
                  </a>
                  <a
                    href="/"
                    class="product-section__top-questions product-section__top-subsections-item d-flex align-items-center color_text-secondary text-s"
                  >
                    <el-icon class="color_text-tertiary"><ChatIcon12 /></el-icon
                    >&nbsp;12 вопросов
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-section {
  &__title-block {
    margin-bottom: var(--space-4);
  }
  &__title {
    @include media-breakpoint-down(lg) {
      margin-bottom: var(--space-4);
    }
  }
  &__top-controls {
    margin-left: var(--space-4);
    .el-button {
      --el-button-text-color: var(--icons-color);
      --el-button-font-weight: var(--text-m-medium__font-weight);
      font-size: var(--text-m-medium__font-size);
      line-height: var(--text-m-medium__line-height);
      padding: 0;
      + .el-button {
        margin-left: var(--space-7);
      }
    }
  }
  &__top-subsections {
    gap: var(--space-3) var(--space-7);
  }
  &__top-subsections-item {
    text-decoration: none;
    flex-shrink: 0;
    @include media-breakpoint-up(lg) {
      margin-right: 28px;
    }
  }
  &__vendor-code {
    @include media-breakpoint-down(md) {
      flex-basis: 100%;
    }
  }
  &__top-rating {
    .el-rate {
      --el-rate-icon-margin: 2px;
    }
  }
  &__main {
    .row {
      --bs-gutter-x: var(--space-6);
    }
  }
  &__gallery {
    @include media-breakpoint-up(xxl) {
      padding-right: 36px;
    }
  }
}
</style>
