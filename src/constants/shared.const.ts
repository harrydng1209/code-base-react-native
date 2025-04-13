export const ERROR_CODES = {
  ERR_500: 'ERR_500',
} as const;

export const NODE_ENVS = {
  DEVELOP: 'develop',
  PRODUCTION: 'production',
  STAGING: 'staging',
  TESTING: 'testing',
} as const;

export const REGEXES = {
  ALPHABET: /^[a-zA-Z]+$/,
  ALPHABET_NUMERIC: /^[a-zA-Z0-9]+$/,
  DATE: /^(19|20)\d\d[-/](0[1-9]|1[0-2])[-/](0[1-9]|[12][0-9]|3[01])$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  IP_ADDRESS:
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  NUMERIC: /^\d$/,
  PASSWORD:
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
  PHONE: /^(?:\+?\d{1,2})?(0\d{9}|\d{10})$/,
  TIME: /^([01]\d|2[0-3]):([0-5]\d)$/,
  URL: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/,
  USERNAME: /^[a-zA-Z0-9_]{3,16}$/,
} as const;

export const SELECTORS = {
  APIS_SECTION: 'apis-section',
  LOGIN_SECTION: 'login-section',
  REGISTER_SECTION: 'register-section',
} as const;

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'r_access_token',
  LANGUAGE: 'r_language',
  REFRESH_TOKEN: 'r_refresh_token',
  THEME: 'r_theme',
} as const;
