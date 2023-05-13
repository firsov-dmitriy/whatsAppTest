import type React from 'react';
import { Chat, MainPage } from '../pages';

export const ROUTES = {
  main: '/',
  chat: '/chat',
};

export interface IRoutes {
  path: string;
  Element: React.FC;
}

export const PublicRoutes: IRoutes[] = [
  { path: ROUTES.main, Element: MainPage },
  { path: ROUTES.chat, Element: Chat },
];

export const PrivateRoutes: IRoutes[] = [];
