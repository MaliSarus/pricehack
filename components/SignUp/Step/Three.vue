<script setup lang="ts">
import { signUpFormDataKey, signUpCurrentStepKey } from '~/assets/libs';

defineOptions({
  name: 'SignUpStepThree'
});

const signUpFormData = inject(signUpFormDataKey)!;
const signUpCurrentStep = inject(signUpCurrentStepKey)!;
const { ruleFormRef, rules, resetValidationForField, validateForm } = useForm();

const formData = reactive<
  Pick<typeof signUpFormData, 'email' | 'name' | 'lastName'>
>({
  email: '',
  name: '',
  lastName: ''
});

const { lgAndDown } = useDefaultBreakpoints();
const handleSubmit = () => {
  validateForm().then(() => {
    Object.assign(signUpFormData, formData);
    signUpCurrentStep.value += 1;
  });
};
</script>
<template>
  <TheBox class="sign-up-box">
    <div class="sign-up-box__body content">
      <div
        class="sign-up-box__title color_text-primary subtitle2-mobile subtitle2-tablet_md subtitle2-desktop_lg"
      >
        Заполните данные профиля
      </div>
      <p class="color_text-secondary text-s text-m_lg">
        Введите недостающую информацию
      </p>
      <el-form
        ref="ruleFormRef"
        :model="formData"
        :rules="rules"
        class="sign-up-box__form content"
        novalidate
        @submit.prevent="handleSubmit"
      >
        <el-form-item prop="name">
          <el-input
            v-model="formData.name"
            placeholder="Имя"
            :size="lgAndDown ? 'small' : undefined"
            :validate-event="false"
            :formatter="(value: string) => value.replace(/\d/gi, '')"
            @input="resetValidationForField('name')"
          />
        </el-form-item>
        <el-form-item prop="lastName">
          <el-input
            v-model="formData.lastName"
            placeholder="Фамилия"
            :size="lgAndDown ? 'small' : undefined"
            :validate-event="false"
            :formatter="(value: string) => value.replace(/\d/gi, '')"
            @input="resetValidationForField('lastName')"
          />
        </el-form-item>
        <el-form-item prop="email">
          <el-input
            v-model="formData.email"
            type="email"
            placeholder="E-mail"
            :size="lgAndDown ? 'small' : undefined"
            :validate-event="false"
            @input="resetValidationForField('email')"
          />
        </el-form-item>
        <div class="sign-up-box__form-controls">
          <el-button
            type="primary"
            native-type="submit"
            :size="!lgAndDown ? 'large' : undefined"
            >Продолжить</el-button
          >
        </div>
      </el-form>
    </div>
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
