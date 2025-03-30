import { profile, refreshToken as refreshTokenApi } from '@/apis/auth.api';
import { STORAGE_KEYS } from '@/constants/shared.const';
import { IUserInfo } from '@/models/interfaces/auth.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

interface IState {
  accessToken?: string;
  actions: {
    initialize: () => Promise<void>;
    logout: () => void;
    refreshToken: () => Promise<boolean>;
    setToken: (token: string) => void;
    setUser: (data: IUserInfo) => void;
  };
  isAuthenticated: boolean;
  userInfo?: IUserInfo;
}

const authStore = create<IState>((set, get) => ({
  accessToken: undefined,

  actions: {
    initialize: async () => {
      const { accessToken, actions, isAuthenticated } = get();
      if (isAuthenticated) return;

      const isLoggedIn = Boolean(accessToken);
      if (!isLoggedIn) return;

      try {
        const response = await profile();
        actions.setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    },

    logout: () =>
      set({
        accessToken: undefined,
        isAuthenticated: false,
        userInfo: undefined,
      }),

    refreshToken: async (): Promise<boolean> => {
      let result = true;

      try {
        const refreshToken = await AsyncStorage.getItem(
          STORAGE_KEYS.REFRESH_TOKEN,
        );
        if (!refreshToken) return false;

        const response = await refreshTokenApi(refreshToken);

        await AsyncStorage.setItem(
          STORAGE_KEYS.ACCESS_TOKEN,
          response.data.accessToken,
        );
        set({ accessToken: response.data.accessToken });
      } catch (error) {
        console.error(error);
        result = false;
      }
      return result;
    },

    setToken: (token: string) => set({ accessToken: token }),

    setUser: (data: IUserInfo) =>
      set({ isAuthenticated: true, userInfo: data }),
  },

  isAuthenticated: false,
  userInfo: undefined,
}));

const useAuthStore = () => {
  const actions = authStore((state) => state.actions);

  const isAuthenticated = authStore((state) => state.isAuthenticated);
  const userInfo = authStore((state) => state.userInfo);
  const accessToken = authStore((state) => state.accessToken);

  return { accessToken, actions, isAuthenticated, userInfo };
};

export default useAuthStore;
