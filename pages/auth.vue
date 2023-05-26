<script setup lang="ts">
import { AuthStepOne } from '#components';

import { authCurrentStepKey, authFormDataKey } from '~/assets/libs';

defineOptions({
  name: 'AuthPage'
});
definePageMeta({
  title: 'Авторизация'
});

const formData = reactive({
  phone: '',
  phoneCode: '+7',
  code: ''
});

const asyncComponentsName = ['Two'];

const currentStep = ref(-1);
const currentStepComponent = computed(() => {
  if (currentStep.value >= 0)
    return defineAsyncComponent(
      () =>
        import(
          `~/components/Auth/Step/${asyncComponentsName[currentStep.value]}.vue`
        )
    );
  return AuthStepOne;
});
provide(authFormDataKey, formData);
provide(authCurrentStepKey, currentStep);
</script>
<template>
  <div class="auth-page">
    <section class="auth-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="auth-section__block">
              <ClientOnly>
                <template #fallback>
                  <div style="text-align: center">
                    <UiLoader />
                  </div>
                </template>
                <Transition name="slide-up" mode="out-in">
                  <component :is="currentStepComponent" />
                </Transition>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.auth-section {
  &__block {
    .auth-box {
      margin: 0 auto;
      @include media-breakpoint-down(md) {
        --el-card-padding: 0;
        --el-box-shadow-light: none;
        --el-card-border-radius: 0;
      }
      @include media-breakpoint-up(md) {
        max-width: 384px;
      }
      @include media-breakpoint-up(lg) {
        max-width: 392px;
      }
    }
  }
}
</style>
