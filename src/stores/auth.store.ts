import { profile, refreshToken as refreshTokenApi } from '@/apis/auth.api';
import { STORAGE_KEYS } from '@/constants/shared.const';
import { ERole } from '@/models/enums/auth.enum';
import { IUserInfo } from '@/models/interfaces/auth.interface';
import asyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IState {
  accessToken: null | string;
  actions: {
    initialize: () => Promise<void>;
    logout: () => void;
    refreshToken: () => Promise<boolean>;
    setToken: (token: string) => void;
    setUser: (data: IUserInfo) => void;
  };
  getters: {
    getIsAuthenticated: () => boolean;
    getUserInfo: () => IUserInfo | undefined;
    getUserRole: () => ERole | undefined;
  };
  isAuthenticated: boolean;
  userInfo?: IUserInfo;
}

export const authStore = create<IState>()(
  devtools((set, get) => ({
    accessToken: asyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN),

    actions: {
      initialize: async () => {
        if (get().isAuthenticated) return;

        const isLoggedIn = Boolean(get().accessToken);
        if (!isLoggedIn) return;

        try {
          const response = await profile();
          get().actions.setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      },

      logout: async () => {
        set({
          accessToken: null,
          isAuthenticated: false,
          userInfo: undefined,
        });
        await asyncStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
      },

      refreshToken: async (): Promise<boolean> => {
        let result = true;
        try {
          const refreshToken = await asyncStorage.getItem(
            STORAGE_KEYS.REFRESH_TOKEN,
          );
          if (!refreshToken) return false;

          const response = await refreshTokenApi(refreshToken);
          get().actions.setToken(response.data.accessToken);
        } catch (error) {
          result = false;
          console.error(error);
        }
        return result;
      },

      setToken: async (token: string) => {
        await asyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
        set({ accessToken: token });
      },

      setUser: (data: IUserInfo) =>
        set({ isAuthenticated: true, userInfo: data }),
    },

    getters: {
      getIsAuthenticated: () => get().isAuthenticated,
      getUserInfo: () => get().userInfo,
      getUserRole: () => get().userInfo?.role,
    },

    isAuthenticated: false,
    userInfo: undefined,
  })),
);

export const useAuthStore = () => {
  const actions = authStore((state) => state.actions);
  const getters = authStore((state) => state.getters);

  return {
    ...getters,
    ...actions,
  };
};
