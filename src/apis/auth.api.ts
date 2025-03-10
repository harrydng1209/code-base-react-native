import type {
  ILoginRequest,
  ILoginResponse,
  IRegister,
  IUserInfo,
} from '@/models/interfaces/auth.interface';

import constants from '@/constants';
import utils from '@/utils';

const { AUTH } = constants.routeApis;

const auth = {
  login: async (data: ILoginRequest) => {
    const url = AUTH.LOGIN;
    return await utils.http.post<ILoginResponse>(url, data, {
      withCredentials: true,
    });
  },

  profile: async () => {
    const url = AUTH.PROFILE;
    return await utils.http.get<IUserInfo>(url);
  },

  refreshToken: async () => {
    const url = AUTH.REFRESH_TOKEN;
    return await utils.http.post<ILoginResponse>(url, undefined, {
      withCredentials: true,
    });
  },

  register: async (data: IRegister) => {
    const url = AUTH.REGISTER;
    return await utils.http.post<unknown>(url, data);
  },
};

export default auth;
