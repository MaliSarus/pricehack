<script lang="ts">
export default {
  name: "AllFiltersDrawer",
};
</script>
<script setup lang="ts">
import {
  ArrowDownIcon16,
  CloseIcon16,
  LongArrowRightIcon16,
  SearchIcon16,
} from "ui-layer/assets/icons";

import { ElDrawer } from "element-plus";
import { reactive, ref } from "vue";
import Simplebar from "simplebar-vue";

const drawerRef = ref<typeof ElDrawer>();
const isFilterDetailDrawerOpened = ref(false);
const search = ref("");
const filters = reactive({
  price: [0, 10],
  onlyAvailaible: false,
  block: [],
});
const handleSubmit = () => {
  drawerRef.value?.close();
};

const blockValues = [
  {
    text: "Беспружинный",
    val: 1,
  },
  {
    text: "Без матраса",
    val: 2,
  },
];
</script>

<template>
  <el-drawer
    ref="drawerRef"
    class="all-filters-drawer"
    append-to-body
    direction="btt"
    :show-close="false"
    size="100%"
  >
    <template #header>
      <div class="all-filters-drawer__header">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="all-filters-drawer__header-block d-flex align-items-center"
              >
                <div
                  class="all-filters-drawer__title color_text-primary h3-mobile h3-tablet_md h3-desktop_xl me-auto"
                >
                  <span class="d-xl-none">Фильтр</span>
                  <span class="hidden-xl-and-down">Все фильтры</span>
                </div>
                <div class="all-filters-drawer__close">
                  <el-button
                    circle
                    :icon="CloseIcon16"
                    size="small"
                    class="d-md-none"
                    @click="drawerRef?.close()"
                  />
                  <el-button
                    circle
                    :icon="CloseIcon16"
                    class="hidden-md-and-down"
                    @click="drawerRef?.close()"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="all-filters-drawer__body">
      <div class="all-filters-drawer__body-block">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="all-filters-drawer__top">
                <el-input
                  v-model="search"
                  class="all-filters-drawer__search d-md-none"
                  placeholder="Поиск по фильтрам"
                  size="small"
                  :suffix-icon="SearchIcon16"
                />
                <el-input
                  v-model="search"
                  class="all-filters-drawer__search hidden-md-and-down"
                  placeholder="Поиск по фильтрам"
                  size="small"
                  :suffix-icon="SearchIcon16"
                />
                <div class="all-filters-drawer__selected-filters">
                  <div class="selected-filters">
                    <ul class="selected-filters__list">
                      <li class="selected-filters__item d-xl-none">
                        <UiClosableTag size="xs" type="plain" not-closed>
                          <span
                            class="text-xs-medium text-s-medium_md text-m-medium_lg color_text-primary"
                          >
                            Сбросить все
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Цена:
                          <span
                            class="text-xs-medium text-s-medium_md text-m-medium_lg"
                          >
                            от 11 223 до 10 000 000
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Ширина:
                          <span
                            class="text-xs-medium text-s-medium_md text-m-medium_lg"
                          >
                            от 20 до 770 см
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Длина спального места:
                          <span
                            class="text-xs-medium text-s-medium_md text-m-medium_lg"
                          >
                            от 20 до 770 см
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Цвет:
                          <span
                            class="text-xs-medium text-s-medium_md text-m-medium_lg"
                          >
                            Белый
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Материал обивки:
                          <span
                            class="text-xs-medium text-s-medium_md text-m-medium_lg"
                          >
                            Акрил, Алькантара
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item hidden-xl-and-down">
                        <UiClosableTag size="xs" type="plain" not-closed>
                          <span
                            class="text-xs-medium text-s-medium_md text-m-medium_lg color_text-primary"
                          >
                            Сбросить все
                          </span>
                        </UiClosableTag>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="all-filters-drawer__filters">
          <div class="all-filters-drawer__filters-container container-xl">
            <div
              class="all-filters-drawer__filters-row d-xl-flex justify-content-between"
            >
              <ul class="all-filters-drawer__filters-list d-xl-none">
                <li
                  class="all-filters-drawer__filters-item"
                  style="padding-top: 0"
                >
                  <div class="all-filters-filter">
                    <div class="container d-xl-none">
                      <div class="row">
                        <div class="col-12">
                          <div
                            class="all-filters-filter__title color_text-primary text-m-medium text-l-medium_lg"
                          >
                            Категории
                          </div>
                          <div class="categories">
                            <ul class="color_text-secondary text-m">
                              <li>
                                <a href="/" class="el-radio is-checked">
                                  <span class="el-radio__input is-checked">
                                    <span class="el-radio__inner"> </span>
                                  </span>
                                  <span class="el-radio__label"> Мебель</span>
                                </a>
                              </li>
                              <li>
                                <a href="/" class="el-radio">
                                  <span class="el-radio__input">
                                    <span class="el-radio__inner"> </span>
                                  </span>
                                  <span class="el-radio__label">
                                    Мягкая мебель</span
                                  >
                                </a>
                              </li>
                              <li>
                                <a href="/" class="el-radio">
                                  <span class="el-radio__input">
                                    <span class="el-radio__inner"> </span>
                                  </span>
                                  <span class="el-radio__label"> Диваны</span>
                                </a>
                                <ul>
                                  <li>
                                    <a href="/" class="el-radio">
                                      <span class="el-radio__input">
                                        <span class="el-radio__inner"> </span>
                                      </span>
                                      <span class="el-radio__label">
                                        Прямые диваны</span
                                      >
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/" class="el-radio">
                                      <span class="el-radio__input">
                                        <span class="el-radio__inner"> </span>
                                      </span>
                                      <span class="el-radio__label">
                                        Угловые диваны</span
                                      >
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/" class="el-radio">
                                      <span class="el-radio__input">
                                        <span class="el-radio__inner"> </span>
                                      </span>
                                      <span class="el-radio__label">
                                        Модульные диваны</span
                                      >
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="/" class="el-radio">
                                          <span class="el-radio__input">
                                            <span class="el-radio__inner">
                                            </span>
                                          </span>
                                          <span class="el-radio__label">
                                            Прямые диваны</span
                                          >
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/" class="el-radio">
                                          <span class="el-radio__input">
                                            <span class="el-radio__inner">
                                            </span>
                                          </span>
                                          <span class="el-radio__label">
                                            Прямые диваны</span
                                          >
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/" class="el-radio">
                                          <span class="el-radio__input">
                                            <span class="el-radio__inner">
                                            </span>
                                          </span>
                                          <span class="el-radio__label">
                                            Прямые диваны</span
                                          >
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="all-filters-drawer__filters-column">
                <ul class="all-filters-drawer__filters-list">
                  <li class="all-filters-drawer__filters-item">
                    <div class="all-filters-filter">
                      <div class="container d-xl-none">
                        <div class="row">
                          <div class="col-12">
                            <el-switch
                              v-model="filters.onlyAvailaible"
                              inactive-text="Только в наличии"
                              size="small"
                            />
                          </div>
                        </div>
                      </div>
                      <el-switch
                        v-model="filters.onlyAvailaible"
                        inactive-text="Только в наличии"
                        size="small"
                        class="hidden-xl-and-down"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="all-filters-drawer__filters-column">
                <ul class="all-filters-drawer__filters-list">
                  <li class="all-filters-drawer__filters-item">
                    <div class="all-filters-filter">
                      <div class="container d-xl-none">
                        <div class="row">
                          <div class="col-12">
                            <div
                              class="all-filters-filter__title color_text-primary text-m-medium text-l-medium_lg"
                            >
                              Цена
                            </div>
                            <UiSliderInput
                              v-model="(filters.price as [number,number])"
                              :min="0"
                              :max="10"
                              min-text="от"
                              max-text="до"
                            />
                          </div>
                        </div>
                      </div>
                      <el-collapse
                        class="all-filters-filter__accordion hidden-xl-and-down"
                      >
                        <el-collapse-item
                          class="all-filters-filter__accordion-item"
                        >
                          <template #title>
                            <div
                              class="all-filters-filter__title color_text-primary text-m-medium text-l-medium_lg"
                            >
                              Цена
                              <div
                                class="all-filters-filter__accordion-toggler color_dividers"
                              >
                                <ArrowDownIcon16 />
                              </div>
                            </div>
                          </template>
                          <UiSliderInput
                            v-model="(filters.price as [number,number])"
                            class="hidden-xl-and-down"
                            :min="0"
                            :max="10"
                            min-text="от"
                            max-text="до"
                          />
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="all-filters-drawer__filters-column">
                <ul class="all-filters-drawer__filters-list">
                  <li class="all-filters-drawer__filters-item">
                    <div class="all-filters-filter">
                      <div class="container d-xl-none">
                        <div class="row">
                          <div class="col-12">
                            <div
                              class="all-filters-filter__title color_text-primary text-m-medium text-l-medium_lg"
                            >
                              Пружинный блок
                              <button
                                class="all-filters-filter__more color_accent1-primary btn-s btn-m_lg"
                                @click="isFilterDetailDrawerOpened = true"
                              >
                                Все
                                <el-icon class="">
                                  <LongArrowRightIcon16 />
                                </el-icon>
                              </button>
                            </div>
                            <UiClosableTagGroup v-model="filters.block">
                              <UiClosableTag
                                v-for="blockItem in blockValues"
                                :key="blockItem.val"
                                :value="blockItem.val"
                                size="xs"
                                >{{ blockItem.text }}
                              </UiClosableTag>
                            </UiClosableTagGroup>
                          </div>
                        </div>
                      </div>
                      <el-collapse
                        class="all-filters-filter__accordion hidden-xl-and-down"
                      >
                        <el-collapse-item
                          class="all-filters-filter__accordion-item"
                        >
                          <template #title>
                            <div
                              class="all-filters-filter__title color_text-primary text-m-medium text-l-medium_lg"
                            >
                              Пружинный блок
                              <div
                                class="all-filters-filter__accordion-toggler color_dividers"
                              >
                                <ArrowDownIcon16 />
                              </div>
                            </div>
                          </template>

                          <Simplebar class="all-filters-filter__scrollbar">
                            <el-checkbox-group
                              v-model="filters.block"
                              class="hidden-xl-and-down"
                            >
                              <el-checkbox
                                v-for="blockItem in blockValues"
                                :key="blockItem.val"
                                :label="blockItem.val"
                              >
                                {{ blockItem.text }}
                              </el-checkbox>
                            </el-checkbox-group>
                          </Simplebar>
                        </el-collapse-item>
                      </el-collapse>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FilterDetailDrawer v-model="isFilterDetailDrawerOpened" />

    <template #footer>
      <div class="all-filters-drawer__footer">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="all-filters-drawer__footer-block d-md-flex d-xl-block flex-wrap"
                style="text-align: left"
              >
                <el-button type="primary" @click="handleSubmit"
                  >Применить</el-button
                >
                <el-button>Сбросить</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </el-drawer>
</template>

<style lang="scss" scoped>
.all-filters-drawer {
  &__footer-block {
    .el-button {
      width: 100%;
      @include media-breakpoint-up(md) {
        width: auto;
        flex-grow: 1;
      }
      + .el-button {
        margin-left: 0;
        margin-top: var(--space-4);
        @include media-breakpoint-up(md) {
          margin-top: 0;
          margin-left: var(--space-6);
        }
      }
    }
  }
  &__top {
    margin-bottom: var(--space-5);
  }
  &__search {
    display: flex;
    margin-bottom: var(--space-6);
    @include media-breakpoint-up(xl) {
      max-width: 348px;
    }
  }
  &__selected-filters {
    .selected-filters {
      &__list {
        display: flex;
        flex-wrap: wrap;
        margin: calc(var(--space-3) / 2 * -1) calc(var(--space-2) / 2 * -1);
        @include media-breakpoint-up(md) {
          margin: calc(var(--space-3) / 2 * -1);
        }
      }
      &__item {
        flex-shrink: 0;
        padding: calc(var(--space-3) / 2) calc(var(--space-2) / 2);
        @include media-breakpoint-up(md) {
          padding: calc(var(--space-3) / 2);
        }
        .closable-tag {
          @include media-breakpoint-up(md) {
            --closable-tag__font-size: var(--text-s__font-size);
            --closable-tag__font-weight: var(--text-s__font-weight);
            --closable-tag__line-height: var(--text-s__line-height);
            padding: calc(6px - 1px) calc(var(--space-2) - 1px);
          }
          @include media-breakpoint-up(lg) {
            --closable-tag__font-size: var(--text-m__font-size);
            --closable-tag__font-weight: var(--text-m__font-weight);
            --closable-tag__line-height: var(--text-m__line-height);
            --closable-tag__icon-size: 16px;
            padding: calc(var(--space-2) - 1px) calc(var(--space-3) - 1px);
          }
        }
      }
    }
  }
  &__filters-container {
    @include media-breakpoint-down(xl) {
      padding: 0;
    }
  }
  &__filters-row {
    padding-top: var(--space-5);
    border-top: 1px solid var(--stroke-color);
  }
  &__filters-column {
    @include media-breakpoint-up(xl) {
      flex-basis: calc(100% / 3 - var(--space-9));
      width: calc(100% / 3 - var(--space-9));
      max-width: calc(100% / 3 - var(--space-9));
    }
    &:first-child {
      .all-filters-drawer {
        &__filters-item {
          &:first-child {
            padding-top: 0;
          }
        }
      }
    }
  }
  &__filters-item {
    border-bottom: 1px solid var(--stroke-color);
    padding: var(--space-5) 0;
    &:first-child {
      @include media-breakpoint-up(xl) {
        padding-top: 0;
      }
    }
  }
}
</style>
