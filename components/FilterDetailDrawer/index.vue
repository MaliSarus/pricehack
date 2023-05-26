<script lang="ts">
export default {
  name: 'FilterDetailDrawer'
};
</script>
<script setup lang="ts">
import { SearchIcon16, ArrowLeftIcon16 } from 'ui-layer/assets/icons';
import { ElDrawer } from 'element-plus';


const drawerRef = ref<typeof ElDrawer>();
const isDrawerHasScroll = ref(false);
const isDrawerScrolledEnd = ref(false);
const search = ref('');
const filterValue = ref();

const handleSubmit = () => {
  drawerRef.value?.close();
};

const checkScroll = (event: Event) => {
  console.log(
    (event.target as HTMLElement).offsetHeight +
      (event.target as HTMLElement).scrollTop >=
      (event.target as HTMLElement).scrollHeight
  );
  if (
    (event.target as HTMLElement).offsetHeight +
      (event.target as HTMLElement).scrollTop >=
    (event.target as HTMLElement).scrollHeight
  ) {
    isDrawerScrolledEnd.value = true;
  } else {
    isDrawerScrolledEnd.value = false;
  }
};

const handleOpened = () => {
  const drawerEl = drawerRef.value?.$refs.drawerRef as HTMLElement;
  const drawerElBody = drawerEl?.querySelector<HTMLElement>('.el-drawer__body');
  const drawerElBodyHeight = drawerElBody?.offsetHeight;
  const drawerElBodyScrollHeight = drawerElBody?.scrollHeight;
  if (
    drawerElBodyScrollHeight &&
    drawerElBodyHeight &&
    drawerElBodyScrollHeight > drawerElBodyHeight
  ) {
    isDrawerHasScroll.value = true;
    drawerElBody?.addEventListener('scroll', checkScroll);
  }
};
const handleClosed = () => {
  const drawerEl = drawerRef.value?.$refs.drawerRef as HTMLElement;
  const drawerElBody = drawerEl?.querySelector<HTMLElement>('.el-drawer__body');

  isDrawerHasScroll.value = false;
  isDrawerScrolledEnd.value = false;
  drawerElBody?.removeEventListener('scroll', checkScroll);
};
</script>

<template>
  <el-drawer
    ref="drawerRef"
    class="filter-detail-drawer"
    :class="{
      'has-scroll': isDrawerHasScroll,
      'scroll-end': isDrawerScrolledEnd
    }"
    append-to-body
    direction="btt"
    :show-close="false"
    size="100%"
    @opened="handleOpened"
    @closed="handleClosed"
  >
    <template #header>
      <div class="filter-detail-drawer__header">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="filter-detail-drawer__header-block">
                <div class="filter-detail-drawer__close">
                  <el-button
                    circle
                    :icon="ArrowLeftIcon16"
                    size="small"
                    class="d-md-none"
                    @click="drawerRef?.close()"
                  />
                  <el-button
                    circle
                    :icon="ArrowLeftIcon16"
                    class="hidden-md-and-down"
                    @click="drawerRef?.close()"
                  />
                </div>
                <div
                  class="filter-detail-drawer__title color_text-primary h3-mobile h3-tablet_md h3-desktop_xl"
                >
                  Бренд
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="filter-detail-drawer__body">
      <div class="filter-detail-drawer__body-block">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="filter-detail-drawer__top">
                <el-input
                  v-model="search"
                  class="filter-detail-drawer__search d-md-none"
                  placeholder="Поиск по фильтрам"
                  size="small"
                  :suffix-icon="SearchIcon16"
                />
                <el-input
                  v-model="search"
                  class="filter-detail-drawer__search hidden-md-and-down"
                  placeholder="Поиск по фильтрам"
                  size="small"
                  :suffix-icon="SearchIcon16"
                />
                <div class="filter-detail-drawer__selected-filters">
                  <div class="selected-filters">
                    <ul class="selected-filters__list">
                      <li class="selected-filters__item d-xl-none">
                        <UiClosableTag size="xs" type="plain" not-closed>
                          <span
                            class="text-xs-semibold text-s-semibold_md text-m-semibold_lg color_text-primary"
                          >
                            Сбросить все
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Цена:
                          <span
                            class="text-xs-semibold text-s-semibold_md text-m-semibold_lg"
                          >
                            от 11 223 до 10 000 000
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Ширина:
                          <span
                            class="text-xs-semibold text-s-semibold_md text-m-semibold_lg"
                          >
                            от 20 до 770 см
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Длина спального места:
                          <span
                            class="text-xs-semibold text-s-semibold_md text-m-semibold_lg"
                          >
                            от 20 до 770 см
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Цвет:
                          <span
                            class="text-xs-semibold text-s-semibold_md text-m-semibold_lg"
                          >
                            Белый
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item">
                        <UiClosableTag size="xs">
                          Материал обивки:
                          <span
                            class="text-xs-semibold text-s-semibold_md text-m-semibold_lg"
                          >
                            Акрил, Алькантара
                          </span>
                        </UiClosableTag>
                      </li>
                      <li class="selected-filters__item hidden-xl-and-down">
                        <UiClosableTag size="xs" type="plain" not-closed>
                          <span
                            class="text-xs-semibold text-s-semibold_md text-m-semibold_lg color_text-primary"
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
        <div class="filter-detail-drawer__filters">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="filter-detail-drawer__filter">
                  <el-checkbox-group v-model="filterValue">
                    <el-checkbox
                      v-for="i in 100"
                      :key="i"
                      :label="`Option ${i}`"
                    />
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="filter-detail-drawer__footer">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="filter-detail-drawer__footer-block d-md-flex d-xl-block flex-wrap"
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
.filter-detail-drawer {
  &__close {
    .el-button {
      + .el-button {
        margin: 0;
      }
    }
  }
  &__header-block {
    position: relative;
    isolation: isolate;
  }
  &__title {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 0 var(--space-9);
    text-align: center;
    z-index: -1;
  }
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
  // &__filters-container {
  //   @include media-breakpoint-down(xl) {
  //     padding: 0;
  //   }
  // }
  // &__filters-row {
  //   padding-top: var(--space-5);
  //   border-top: 1px solid var(--stroke-color);
  // }
  // &__filters-column {
  //   @include media-breakpoint-up(xl) {
  //     flex-basis: calc(100% / 3 - var(--space-9));
  //     width: calc(100% / 3 - var(--space-9));
  //     max-width: calc(100% / 3 - var(--space-9));
  //   }
  //   &:first-child {
  //     .filter-detail-drawer {
  //       &__filters-item {
  //         &:first-child {
  //           padding-top: 0;
  //         }
  //       }
  //     }
  //   }
  // }
  // &__filters-item {
  //   border-bottom: 1px solid var(--stroke-color);
  //   padding: var(--space-5) 0;
  //   &:first-child {
  //     @include media-breakpoint-up(xl) {
  //       padding-top: 0;
  //     }
  //   }
  // }
  &__filters {
    padding-top: var(--space-3);
    border-top: 1px solid var(--stroke-color);
    @include media-breakpoint-up(md) {
      padding-top: var(--space-4);
    }
  }
  &__filter {
    .el-checkbox-group {
      .el-checkbox {
        display: flex;
        &:not(:last-child) {
          margin-bottom: var(--space-3);
        }
      }
    }
  }
}
</style>
