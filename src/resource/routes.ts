import type React from 'react';
import { MainPage } from '../pages';

export const ROUTES = {
    main: '/',
};

export interface IRoutes {
    path: string;
    Element: React.FC;
}

export const PublicRoutes: IRoutes[] = [
    {path: ROUTES.main, Element: MainPage}
];


export const PrivateRoutes: IRoutes[] = [];

