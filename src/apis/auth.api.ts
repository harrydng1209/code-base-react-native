import type {
  ILoginRequest,
  ILoginResponse,
  IRegister,
  IUserInfo,
} from '@/models/interfaces/auth.interface';

import { AUTH } from '@/constants/route-apis.const';
import { get, post } from '@/utils/api.util';

export const login = async (data: ILoginRequest) => {
  const url = AUTH.LOGIN;
  return await post<ILoginResponse>(url, data);
};

export const profile = async () => {
  const url = AUTH.PROFILE;
  return await get<IUserInfo>(url);
};

export const refreshToken = async (data: string) => {
  const url = AUTH.REFRESH_TOKEN;
  return await post<ILoginResponse>(url, data);
};

export const register = async (data: IRegister) => {
  const url = AUTH.REGISTER;
  return await post<unknown>(url, data);
};
