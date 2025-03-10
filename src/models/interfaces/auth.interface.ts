import type { ERole } from '../enums/auth.enum';
import type { TActions, TSubjects } from '../types/auth.type';

export interface ILoginRequest {
  emailOrPhone: string;
}

export interface ILoginResponse {
  accessToken: string;
}

export interface IOtpRequest {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp5: string;
  otp6: string;
}

export interface IPasswordRequest {
  password: string;
}

export interface IPermission {
  action: TActions;
  subject: TSubjects;
}

export interface IRegister {
  displayName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
}

export interface IUserInfo {
  createdAt: string;
  displayName: string;
  email: string;
  id: number;
  role: ERole;
  updatedAt: string;
  username: string;
}
