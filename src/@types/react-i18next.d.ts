import 'react-i18next';
import { ReactNode } from 'react';
import { i18n } from 'i18next';

declare module 'react-i18next' {
  export interface I18nextProviderProps {
    i18n: i18n;
    defaultNS?: string | string[];
    children: ReactNode;
  }

  export const I18nextProvider: React.FC<I18nextProviderProps>;
} 