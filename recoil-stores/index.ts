import { atom } from 'recoil';

export const globalState = atom<string>({
  key: 'demo_global_state',
  default: '',
});
