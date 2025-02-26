import 'react-i18next';
import { ReactNode } from 'react';
import { i18n, TFunction } from 'i18next';

declare module 'react-i18next' {
  // Provider
  export interface I18nextProviderProps {
    i18n: i18n;
    defaultNS?: string | string[];
    children: ReactNode;
  }

  export const I18nextProvider: React.FC<I18nextProviderProps>;
  
  // Hooks
  export function useTranslation(ns?: string | string[], options?: {}): {
    t: TFunction;
    i18n: i18n;
    ready: boolean;
  };
  
  // Initialization
  export const initReactI18next: {
    type: string;
    init: (instance: i18n) => i18n;
  };
  
  // HOCs
  export function withTranslation(ns?: string | string[], options?: {}): any;
} 