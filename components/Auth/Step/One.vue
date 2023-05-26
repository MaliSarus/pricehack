<script setup lang="ts">
import {
  authFormDataKey,
  authCurrentStepKey,
  removeSymbols,
} from "~/assets/libs";
import { Countries } from "ui-layer/assets/libs";
defineOptions({
  name: "AuthStepOne",
});

const authFormData = inject(authFormDataKey)!;
const authCurrentStep = inject(authCurrentStepKey)!;
const { ruleFormRef, rules, resetValidationForField, validateForm } = useForm();

const currentMask = ref(
  Countries.find((countryItem) => countryItem.iso === "RU")?.mask
);

const formRules = computed(() => ({
  ...rules,
  phone: [
    ...rules.phone,
    {
      len: (currentMask.value as string).replace(/[{}]/gi, "").length,
      message: `Длинна номера ${
        authFormData.phoneCode.length +
        removeSymbols((currentMask.value as string).replace(/[{}]/gi, ""))
          .length
      } символов`,
    },
  ],
}));
const { lgAndDown } = useDefaultBreakpoints();
const handleSubmit = () => {
  validateForm().then(() => {
    authCurrentStep.value += 1;
  });
};
const handleMaskChange = (e: string) => {
  currentMask.value = e;
};
const handleCountryChange = (e: string) => {
  authFormData.phoneCode = e;
  resetValidationForField("phone");
};
</script>
<template>
  <TheBox class="auth-box">
    <div class="auth-box__body content">
      <div
        class="auth-box__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg"
      >
        Введите номер телефона
      </div>
      <p class="color_text-secondary text-s text-m_lg">
        На указанный номер телефона будет отправлено СМС с кодом подтверждения
      </p>
      <el-form
        ref="ruleFormRef"
        class="auth-box__form content"
        :rules="formRules"
        :model="authFormData"
        @submit.prevent="handleSubmit"
      >
        <el-form-item prop="phone">
          <UiCountryPhoneInput
            v-model="authFormData.phone"
            :size="lgAndDown ? 'small' : undefined"
            :validate-event="false"
            @country-change="handleCountryChange"
            @input="resetValidationForField('phone')"
            @mask-change="handleMaskChange"
          />
        </el-form-item>
        <div class="auth-box__form-controls">
          <el-button
            type="primary"
            native-type="submit"
            :size="!lgAndDown ? 'large' : undefined"
          >
            Получить код
          </el-button>
        </div>
      </el-form>
    </div>
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
}
</style>
