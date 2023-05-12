import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import React from 'react';
import { PublicRoutes } from '../../resource/routes';

const Router: React.FC = () => {
  return (
    <Routes>
      {PublicRoutes.map(({ path, Element }) => (
        <Route element={<Element />} key={path} path={path} />
      ))}
    </Routes>
  );
};

export default Router;
