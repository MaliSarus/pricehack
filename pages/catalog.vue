<script lang="ts">
export default {
  name: 'CatalogPage'
};
</script>
<script setup lang="ts">
import { FilterIcon24, ArrowDownIcon16, SearchIcon16 } from 'ui-layer/assets/icons';

import { reactive, ref } from 'vue';
import Simplebar from 'simplebar-vue';

definePageMeta({
  title: 'Каталог',
  layout: 'default'
});
const select = ref('1');
const page = ref(1);
const totalPages = 10;
const isAllFiltersDrawerShowed = ref(false);

const fakeProduct = {
  id: '1',
  images: [
    'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043',
    'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043'
  ],
  name: 'фотоАппарат',
  rate: 4.3,
  feedbackCount: 12,
  price: 130000,
  oldPrice: 200000,
  isNew: true,
  isSale: true
};

const filters = reactive({
  onlyAvailible: false,
  rate: 'any',
  collection: [],
  colors: [],
  price: [0, 100]
});
</script>
<template>
  <div class="catalog-page">
    <section class="catalog-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="catalog-section__title-block">
              <h1
                class="catalog-section__title color_text-primary h3-mobile h3-tablet_md h3-desktop_xl"
              >
                Диваны<UiTag round>1234 товара</UiTag>
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="catalog-section__main-block">
              <div
                class="catalog-section__main-left hidden-xl-and-down content"
              >
                <div class="catalog-section__categories">
                  <p
                    class="catalog-section__categories-title color_text-primary text-l-semibold"
                  >
                    Категории
                  </p>
                  <ul class="color_text-secondary text-m">
                    <li><a href="/">Мебель</a></li>
                    <li><a href="/">Мягкая мебель</a></li>
                    <li>
                      <a href="/">Диваны</a>
                      <ul>
                        <li><a href="/">Прямые диваны</a></li>
                        <li><a href="/">Угловые диваны</a></li>
                        <li>
                          <a href="/">Модульные диваны</a>
                          <ul>
                            <li><a href="/">Прямые диваны</a></li>
                            <li><a href="/">Угловые диваны</a></li>
                            <li><a href="/">Модульные диваны</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="catalog-section__filters">
                  <div class="filters content">
                    <el-switch
                      v-model="filters.onlyAvailible"
                      inactive-text="Только в наличии"
                      size="small"
                    />
                    <el-collapse class="filters__list">
                      <el-collapse-item class="filters__item">
                        <template #title>
                          <div
                            class="filters__item-title color_text-primary text-m-semibold d-flex align-items-center"
                          >
                            Цена
                            <div class="filters__item-toggler color_dividers">
                              <ArrowDownIcon16 />
                            </div>
                          </div>
                        </template>
                        <UiSliderInput
                          v-model="(filters.price as [number,number])"
                          :min="0"
                          :max="100"
                          min-text="от"
                          max-text="до"
                        />
                      </el-collapse-item>
                      <el-collapse-item class="filters__item">
                        <template #title>
                          <div
                            class="filters__item-title color_text-primary text-m-semibold d-flex align-items-center"
                          >
                            Рейтинг магазина
                            <div class="filters__item-toggler color_dividers">
                              <ArrowDownIcon16 />
                            </div>
                          </div>
                        </template>
                        <el-radio-group v-model="filters.rate">
                          <el-radio label="any">
                            <span
                              class="d-flex align-items-center color_text-secondary text-m"
                            >
                              Любой
                            </span>
                          </el-radio>
                          <el-radio label="4">
                            <span
                              class="d-flex align-items-center color_text-secondary text-m"
                            >
                              От
                              <UiRating
                                :model-value="4"
                                disabled
                                size="large"
                              />
                            </span>
                          </el-radio>
                          <el-radio label="3">
                            <span
                              class="d-flex align-items-center color_text-secondary text-m"
                            >
                              От
                              <UiRating
                                :model-value="3"
                                disabled
                                size="large"
                              />
                            </span>
                          </el-radio>
                          <el-radio label="2">
                            <span
                              class="d-flex align-items-center color_text-secondary text-m"
                            >
                              От
                              <UiRating
                                :model-value="2"
                                disabled
                                size="large"
                              />
                            </span>
                          </el-radio>
                        </el-radio-group>
                      </el-collapse-item>
                      <el-collapse-item class="filters__item">
                        <template #title>
                          <div
                            class="filters__item-title color_text-primary text-m-semibold d-flex align-items-center"
                          >
                            Коллекция
                            <div class="filters__item-toggler color_dividers">
                              <ArrowDownIcon16 />
                            </div>
                          </div>
                        </template>
                        <el-checkbox-group v-model="filters.collection">
                          <el-checkbox label="Smart">
                            <span class="color_text-secondary text-m">
                              Smart
                            </span>
                          </el-checkbox>
                          <el-checkbox label="Аврора">
                            <span class="color_text-secondary text-m">
                              Аврора
                            </span>
                          </el-checkbox>
                          <el-checkbox label="Адмирал">
                            <span class="color_text-secondary text-m">
                              Адмирал
                            </span>
                          </el-checkbox>
                          <el-checkbox label="Аметист">
                            <span class="color_text-secondary text-m">
                              Аметист
                            </span>
                          </el-checkbox>
                          <el-checkbox label="Барселона">
                            <span class="color_text-secondary text-m">
                              Барселона
                            </span>
                          </el-checkbox>
                        </el-checkbox-group>
                      </el-collapse-item>
                      <el-collapse-item class="filters__item">
                        <template #title>
                          <div
                            class="filters__item-title color_text-primary text-m-semibold d-flex align-items-center"
                          >
                            Цвет
                            <div class="filters__item-toggler color_dividers">
                              <ArrowDownIcon16 />
                            </div>
                          </div>
                        </template>
                        <el-input
                          placeholder="Поиск"
                          :suffix-icon="SearchIcon16"
                          style="margin-bottom: var(--space-4)"
                        />
                        <Simplebar class="filters__item-scrollbar">
                          <el-checkbox-group v-model="filters.colors">
                            <el-checkbox label="#FFFFFF">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="--color-circle__bg-color: #ffffff"
                                ></span>
                                Белый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FAF6EB">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #faf6eb;
                                    --color-circle__border-color: #faf6eb;
                                  "
                                ></span>
                                Бежевый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FFCB00">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #ffcb00;
                                    --color-circle__border-color: #ffcb00;
                                  "
                                ></span>
                                Желтый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FF7A1B">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #ff7a1b;
                                    --color-circle__border-color: #ff7a1b;
                                  "
                                ></span>
                                Оранжевый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FC0F0F">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #fc0f0f;
                                    --color-circle__border-color: #fc0f0f;
                                  "
                                ></span>
                                Красный
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FFFFFF">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="--color-circle__bg-color: #ffffff"
                                ></span>
                                Белый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FAF6EB">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #faf6eb;
                                    --color-circle__border-color: #faf6eb;
                                  "
                                ></span>
                                Бежевый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FFCB00">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #ffcb00;
                                    --color-circle__border-color: #ffcb00;
                                  "
                                ></span>
                                Желтый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FF7A1B">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #ff7a1b;
                                    --color-circle__border-color: #ff7a1b;
                                  "
                                ></span>
                                Оранжевый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FC0F0F">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #fc0f0f;
                                    --color-circle__border-color: #fc0f0f;
                                  "
                                ></span>
                                Красный
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FFFFFF">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="--color-circle__bg-color: #ffffff"
                                ></span>
                                Белый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FAF6EB">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #faf6eb;
                                    --color-circle__border-color: #faf6eb;
                                  "
                                ></span>
                                Бежевый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FFCB00">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #ffcb00;
                                    --color-circle__border-color: #ffcb00;
                                  "
                                ></span>
                                Желтый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FF7A1B">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #ff7a1b;
                                    --color-circle__border-color: #ff7a1b;
                                  "
                                ></span>
                                Оранжевый
                              </div>
                            </el-checkbox>
                            <el-checkbox label="#FC0F0F">
                              <div
                                class="d-flex align-items-center color_text-secondary text-m"
                              >
                                <span
                                  class="color-circle"
                                  style="
                                    --color-circle__bg-color: #fc0f0f;
                                    --color-circle__border-color: #fc0f0f;
                                  "
                                ></span>
                                Красный
                              </div>
                            </el-checkbox>
                          </el-checkbox-group>
                        </Simplebar>
                        <div class="filters__item-controls">
                          <UiLink>Показать все</UiLink>
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                    <div class="filters__controls">
                      <el-button plain @click="isAllFiltersDrawerShowed = true">
                        Все фильтры
                      </el-button>
                    </div>
                    <AllFiltersDrawer v-model="isAllFiltersDrawerShowed" />
                  </div>
                </div>
              </div>
              <div class="catalog-section__main-right">
                <div class="catalog-section__selected-filters">
                  <div class="selected-filters">
                    <el-scrollbar class="d-xl-none">
                      <ul class="selected-filters__list">
                        <li class="selected-filters__item">
                          <UiClosableTag size="s" type="plain" not-closed>
                            <span
                              class="text-s-semibold text-m-semibold_lg color_text-primary"
                            >
                              Сбросить все
                            </span>
                          </UiClosableTag>
                        </li>
                        <li class="selected-filters__item">
                          <UiClosableTag size="s">
                            Цена:
                            <span class="text-s-semibold text-m-semibold_lg">
                              от 11 223 до 10 000 000
                            </span>
                          </UiClosableTag>
                        </li>
                        <li class="selected-filters__item">
                          <UiClosableTag size="s">
                            Ширина:
                            <span class="text-s-semibold text-m-semibold_lg">
                              от 20 до 770 см
                            </span>
                          </UiClosableTag>
                        </li>
                        <li class="selected-filters__item">
                          <UiClosableTag size="s">
                            Длина спального места:
                            <span class="text-s-semibold text-m-semibold_lg">
                              от 20 до 770 см
                            </span>
                          </UiClosableTag>
                        </li>
                        <li class="selected-filters__item">
                          <UiClosableTag size="s">
                            Цвет:
                            <span class="text-s-semibold text-m-semibold_lg">
                              Белый
                            </span>
                          </UiClosableTag>
                        </li>
                        <li class="selected-filters__item">
                          <UiClosableTag size="s">
                            Материал обивки:
                            <span class="text-s-semibold text-m-semibold_lg">
                              Акрил, Алькантара
                            </span>
                          </UiClosableTag>
                        </li>
                      </ul>
                    </el-scrollbar>
                    <ul class="selected-filters__list hidden-xl-and-down">
                      <li class="selected-filters__item">
                        <UiClosableTag size="s">
                          Цена:
                          <span class="text-s-semibold text-m-semibold_lg">
                            от 11 223 до 10 000 000
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="s">
                          Ширина:
                          <span class="text-s-semibold text-m-semibold_lg">
                            от 20 до 770 см
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="s">
                          Длина спального места:
                          <span class="text-s-semibold text-m-semibold_lg">
                            от 20 до 770 см
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="s">
                          Цвет:
                          <span class="text-s-semibold text-m-semibold_lg">
                            Белый
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="s">
                          Материал обивки:
                          <span class="text-s-semibold text-m-semibold_lg">
                            Акрил, Алькантара
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="s" type="plain" not-closed>
                          <span
                            class="text-s-semibold text-m-semibold_lg color_text-primary"
                          >
                            Сбросить все
                          </span>
                        </UiClosableTag>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="catalog-section__products">
                  <div
                    class="catalog-section__products-controls d-flex align-items-center"
                  >
                    <el-select
                      v-model="select"
                      :validate-event="false"
                      style="margin-right: auto"
                    >
                      <el-option label="Сначала новые" value="1" />
                      <el-option label="Сначала старые" value="2" />
                    </el-select>
                    <el-button
                      :icon="FilterIcon24"
                      circle
                      plain
                      class="d-md-none"
                      @click="isAllFiltersDrawerShowed = true"
                    />
                    <el-button
                      :icon="FilterIcon24"
                      plain
                      class="hidden-md-and-down d-xl-none"
                      @click="isAllFiltersDrawerShowed = true"
                      >Фильтр</el-button
                    >
                  </div>
                  <div class="catalog-section__products-view">
                    <div class="products">
                      <ul class="products__list">
                        <li v-for="i in 10" :key="i" class="products__item">
                          <div class="products__item-wrapper">
                            <ProductCard :product="fakeProduct" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="catalog-section__products-pagination">
                    <UiPagination v-model="page" :total-pages="totalPages" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.catalog-section {
  overflow: hidden;
  // &__title-block {
  //   display: flex;
  //   align-items: center;
  // }
  &__title-block {
    margin-bottom: var(--space-6);
  }
  &__main-block {
    display: flex;
  }
  &__main-left {
    width: 276px;
    margin-right: var(--space-9);
    @include media-breakpoint-up(xxl) {
      width: 272px;
    }
    > * {
      margin: 28px 0;
    }
  }
  &__main-right {
    flex-grow: 1;
    width: 100%;
    max-width: 100%;
    @include media-breakpoint-up(xl) {
      width: calc(100% - (276px + var(--space-9)));
      max-width: calc(100% - (276px + var(--space-9)));
    }
    @include media-breakpoint-up(xxl) {
      width: calc(100% - (272px + var(--space-9)));
      max-width: calc(100% - (272px + var(--space-9)));
    }
  }
  &__title {
    .el-tag {
      --el-tag-font-size: var(--text-xxs__font-size);
      vertical-align: middle;
      position: relative;
      top: -3px;
      font-weight: var(--text-xxs__font-weight);
      line-height: var(--text-xxs__line-height);
      margin-left: var(--space-3);
      @include media-breakpoint-up(md) {
        --el-tag-font-size: var(--text-xs-semibold__font-size);
        font-weight: var(--text-xs-semibold__font-weight);
        line-height: var(--text-xs-semibold__line-height);
      }
      @include media-breakpoint-up(xl) {
        --el-tag-font-size: var(--text-s-semibold__font-size);
        font-weight: var(--text-s-semibold__font-weight);
        line-height: var(--text-s-semibold__line-height);
      }
    }
  }
  &__categories {
    ul {
      li {
        &:not(:last-child) {
          margin-bottom: var(--space-3);
        }
        a {
          color: inherit;
          text-decoration: none;
          &:hover,
          &:focus-visible {
            color: var(--accent1-primary-color);
          }
        }
        > ul {
          margin-top: var(--space-3);
          padding-left: var(--space-4);
        }
      }
    }
  }
  &__categories-title {
    margin-bottom: var(--space-4);
  }
  &__filters {
    .filters {
      > * {
        margin: 28px 0;
      }
    }
  }
  &__selected-filters {
    padding-bottom: var(--space-5);
    border-bottom: 1px solid var(--stroke-color);
    margin-bottom: var(--space-5);
    @include media-breakpoint-up(md) {
      margin-bottom: var(--space-6);
      padding-bottom: var(--space-6);
    }
    .selected-filters {
      @include media-breakpoint-down(sm) {
        margin-right: -20px;
      }
      @include media-breakpoint-between(sm, md) {
        margin-right: calc((100vw - 320px) / 2 * -1);
      }
      @include media-breakpoint-up(md) {
        margin-right: calc((100vw - 720px) / 2 * -1);
      }
      @include media-breakpoint-up(lg) {
        margin-right: calc((100vw - 968px) / 2 * -1);
      }
      @include media-breakpoint-up(xl) {
        margin-right: 0;
      }
      &__list {
        @include media-breakpoint-up(xl) {
          flex-wrap: wrap;
          margin: calc(var(--space-3) / 2 * -1);
        }
      }

      &__item {
        @include media-breakpoint-up(xl) {
          padding: calc(var(--space-3) / 2);
        }
        &:not(:last-child) {
          margin-right: var(--space-3);
          @include media-breakpoint-up(xl) {
            margin-right: 0;
          }
        }
        &:last-child {
          @include media-breakpoint-down(sm) {
            padding-right: 20px;
          }
          @include media-breakpoint-between(sm, md) {
            padding-right: calc((100vw - 320px) / 2);
          }
          @include media-breakpoint-up(md) {
            padding-right: calc((100vw - 720px) / 2);
          }
          @include media-breakpoint-up(lg) {
            padding-right: calc((100vw - 968px) / 2);
          }
          @include media-breakpoint-up(xl) {
            padding-right: 0;
          }
        }
      }
    }
  }
  &__products-controls {
    margin-bottom: var(--space-6);
    @include media-breakpoint-up(xl) {
      margin-bottom: var(--space-4);
    }
    .el-select {
      width: 100%;
      max-width: 200px;
      @include media-breakpoint-up(md) {
        max-width: 272px;
      }
    }
  }
  &__products-pagination {
    margin-top: var(--space-7);
    @include media-breakpoint-up(md) {
      margin-top: var(--space-8);
    }
  }
}
.selected-filters {
  &__list {
    display: flex;
  }
  &__item {
    flex-shrink: 0;
    .closable-tag {
      @include media-breakpoint-up(lg) {
        --closable-tag__font-size: var(--text-m__font-size);
        --closable-tag__font-weight: var(--text-m__font-weight);
        --closable-tag__line-height: var(--text-m__line-height);
        --closable-tag__border-radius: 10px;
        --closable-tag__icon-size: 16px;
        padding: calc(var(--space-2) - 1px) calc(var(--space-3) - 1px);
        .closable-tag {
          &__close {
            margin-left: var(--space-3);
          }
        }
      }
    }
  }
}
.products {
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--space-7) / 2 * -1) calc(var(--space-4) / 2 * -1);
    @include media-breakpoint-up(md) {
      margin: calc(var(--space-8) / 2 * -1) calc(var(--space-6) / 2 * -1);
    }
  }
  &__item {
    flex-basis: 50%;
    width: 50%;
    max-width: 50%;
    padding: calc(var(--space-7) / 2) calc(var(--space-4) / 2);
    @include media-breakpoint-up(md) {
      flex-basis: calc(100% / 3);
      width: calc(100% / 3);
      max-width: calc(100% / 3);
      padding: calc(var(--space-8) / 2) calc(var(--space-6) / 2);
    }
    @include media-breakpoint-up(lg) {
      flex-basis: calc(100% / 4);
      width: calc(100% / 4);
      max-width: calc(100% / 4);
    }
    @include media-breakpoint-up(xl) {
      flex-basis: calc(100% / 3);
      width: calc(100% / 3);
      max-width: calc(100% / 3);
    }
    @include media-breakpoint-up(xxl) {
      flex-basis: calc(100% / 4);
      width: calc(100% / 4);
      max-width: calc(100% / 4);
    }
    .product-card {
      &:focus-visible,
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
  &__item-wrapper {
    margin: calc(var(--space-3) * -1);
  }
}
</style>
