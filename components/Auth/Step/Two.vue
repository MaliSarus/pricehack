<script setup lang="ts">
import { authFormDataKey, authCurrentStepKey } from '~/assets/libs';
import IMask from 'imask';
import VueCountdown from '@chenfengyuan/vue-countdown';

defineOptions({
  name: 'AuthStepTwo'
});

const authFormData = inject(authFormDataKey)!;
const authCurrentStep = inject(authCurrentStepKey)!;

const maskCode = IMask.createPipe({
  mask: '000 000'
});
const isCountDownEnd = ref(true); //Обратный отсчет завершен?
const { lgAndDown } = useDefaultBreakpoints();
const { ruleFormRef, rules, resetValidationForField, validateForm } = useForm();

const handleCodeInput = (e: string) => {
  authFormData.code = maskCode(e);
  resetValidationForField('code');
};
const handleChangeNumber = () => {
  authFormData.code = '';
  authCurrentStep.value -= 1;
};
const handleGetNewCode = () => {
  authFormData.code = '';
  isCountDownEnd.value = false;
};

watch(
  () => authFormData.code,
  (newVal) => {
    if (newVal.length >= 7) validateForm().then(() => console.log('submit'));
  }
);
</script>
<template>
  <TheBox class="auth-box">
    <div class="auth-box__body content">
      <div
        class="auth-box__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg"
      >
        Введите код из СМС
      </div>
      <p class="color_text-secondary text-s text-m_lg">
        Отправили код подтверждения на номер
        <br />
        <span style="text-decoration: underline"
          >{{ authFormData.phoneCode }} {{ authFormData.phone }}</span
        >
      </p>
      <el-form
        ref="ruleFormRef"
        class="auth-box__form content"
        :rules="rules"
        :model="authFormData"
        @submit.prevent
      >
        <el-form-item prop="code">
          <el-input
            :model-value="authFormData.code"
            :size="lgAndDown ? 'small' : undefined"
            @input="handleCodeInput"
          />
        </el-form-item>
        <div class="auth-box__form-controls">
          <el-button
            :disabled="!isCountDownEnd"
            :size="!lgAndDown ? 'large' : undefined"
            @click="handleGetNewCode"
          >
            <template v-if="isCountDownEnd"> Получить новый код</template>

            <vue-countdown
              v-else
              v-slot="{ minutes, seconds }"
              :time="60 * 1000"
              @end="isCountDownEnd = true"
            >
              {{ minutes < 10 ? '0' + minutes : minutes }}:{{
                seconds < 10 ? '0' + seconds : seconds
              }}
            </vue-countdown>
          </el-button>
        </div>
      </el-form>
    </div>
    <template #footer>
      <div class="auth-box__footer">
        <el-button text @click="handleChangeNumber">Изменить номер</el-button>
      </div>
    </template>
  </TheBox>
</template>

<style lang="scss" scoped>
.auth-box {
  &__body {
    > * {
      margin: var(--space-5) 0;
      @include media-breakpoint-up(lg) {
        margin: var(--space-5) 0;
      }
    }
  }
  &__form {
    > * {
      margin: var(--space-5) 0;
      @include media-breakpoint-up(lg) {
        margin: var(--space-5) 0;
      }
    }
  }
  &__form-controls {
    .el-button {
      width: 100%;
      margin: 0;
    }
  }
  &__footer {
    padding: var(--space-5) 0 var(--space-6);
    text-align: center;
    .el-button {
      --el-button-font-weight: var(--text-m__font-weight);
      padding: 0;
      font-size: var(--text-m__font-size);
      line-height: var(--text-m__line-height);
      @include media-breakpoint-up(lg) {
        --el-button-font-weight: var(--text-l__font-weight);
        font-size: var(--text-l__font-size);
        line-height: var(--text-l__line-height);
      }
    }
  }
  :deep(.box__footer) {
    border-top: 1px solid var(--stroke-color);
    margin-left: calc(var(--space-3) * -1);
    margin-right: calc(var(--space-3) * -1);
    @include media-breakpoint-down(md) {
      margin-top: var(--space-5);
    }
  }
}
</style>
