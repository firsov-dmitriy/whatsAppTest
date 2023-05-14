import { TokensValue } from '@/modules/MainPageModule/utils/form';

export const useAuthInfo = () => {
  const tokensString = localStorage.getItem('tokens');
  if (!tokensString) return null;

  const res = JSON.parse(tokensString) as Required<TokensValue>;
  return res;
};
