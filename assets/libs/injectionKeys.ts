import { InjectionKey } from 'vue';

export const authFormDataKey = Symbol() as InjectionKey<{
  phone: string;
  phoneCode: string;
  code: string;
}>;
export const authCurrentStepKey = Symbol() as InjectionKey<Ref<number>>;
export const signUpFormDataKey = Symbol() as InjectionKey<{
  phone: string;
  code: string;
  phoneCode: string;
  name: string;
  lastName: string;
  email: string;
  emailCode: string;
}>;
export const signUpCurrentStepKey = Symbol() as InjectionKey<Ref<number>>;
