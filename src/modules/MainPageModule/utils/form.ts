import * as Yup from 'yup';

import { TOnSubmitFormSyncCb, useForm } from '@/hooks/useForm';

import { FORM_MASSAGE } from '@/resource/constants';

export enum TokensFields {
  IdInstance = 'idInstance',
  ApiToken = 'apiTokenInstance',
}
export type TokensValue = {
  [TokensFields.ApiToken]?: string;
  [TokensFields.IdInstance]?: string;
};

export const DEFAULT_TOKENS_VALUE: TokensValue = {
  idInstance: undefined,
  apiTokenInstance: undefined,
};

type TokensFormSubmit = TOnSubmitFormSyncCb<Required<TokensValue>>;

const schema = Yup.object({
  [TokensFields.IdInstance]: Yup.string().required(FORM_MASSAGE.required),
  [TokensFields.ApiToken]: Yup.string().required(FORM_MASSAGE.required),
});

export const useFormTokens = (onSubmit: TokensFormSubmit) => {
  const result = useForm<TokensValue, Required<TokensValue>>({
    defaultValues: DEFAULT_TOKENS_VALUE,
    onSubmit,
    validateFormSchema: schema,
  });

  return result;
};
