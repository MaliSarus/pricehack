<script setup lang="ts">
import { signUpFormDataKey, signUpCurrentStepKey } from '~/assets/libs';
import IMask from 'imask';
import VueCountdown from '@chenfengyuan/vue-countdown';

defineOptions({
  name: 'SignUpStepFour'
});
const signUpFormData = inject(signUpFormDataKey)!;
const signUpCurrentStep = inject(signUpCurrentStepKey)!;

const { ruleFormRef, rules, resetValidationForField, validateForm } = useForm();

const formRules = {
  ...rules,
  emailCode: [...rules.code]
};

const formData = reactive<Pick<typeof signUpFormData, 'emailCode'>>({
  emailCode: ''
});

const { lgAndDown } = useDefaultBreakpoints();

const maskCode = IMask.createPipe({
  mask: '000 000'
});
const isCountDownEnd = ref(true); //Обратный отсчет завершен?

const handleCodeInput = (e: string) => {
  formData.emailCode = maskCode(e);
  resetValidationForField('code');
};
const handleChangeEmail = () => {
  formData.emailCode = '';
  signUpCurrentStep.value -= 1;
};
const handleGetNewCode = () => {
  isCountDownEnd.value = false;
  formData.emailCode = '';
};

const handleSubmit = () => {
  validateForm().then(() => {
    Object.assign(signUpFormData, formData);
  });
};

watch(
  () => formData.emailCode,
  (newVal) => {
    if (newVal.length >= 7) handleSubmit();
  }
);
</script>
<template>
  <TheBox class="sign-up-box">
    <div class="sign-up-box__body content">
      <div
        class="sign-up-box__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg"
      >
        Введите код подтверждения
      </div>
      <p class="color_text-secondary text-s text-m_lg">
        На e-mail {{ signUpFormData.email }} был отправлен код подтверждения
      </p>
      <el-form
        ref="ruleFormRef"
        class="sign-up-box__form content"
        :model="formData"
        :rules="formRules"
        novalidate
        @submit.prevent="handleSubmit"
      >
        <el-form-item prop="emailCode">
          <el-input
            :model-value="formData.emailCode"
            :size="lgAndDown ? 'small' : undefined"
            :validate-event="false"
            @input="handleCodeInput"
          />
        </el-form-item>

        <div class="sign-up-box__form-controls">
          <el-button
            :disabled="!isCountDownEnd"
            :size="!lgAndDown ? 'large' : undefined"
            native-type="button"
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
      <div class="sign-up-box__footer">
        <el-button text @click="handleChangeEmail">Изменить e-mail</el-button>
      </div>
    </template>
  </TheBox>
</template>

<style lang="scss" scoped>
.sign-up-box {
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
      + .el-button {
        margin-top: var(--space-5);
        @include media-breakpoint-up(lg) {
          margin-top: var(--space-6);
        }
      }
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
