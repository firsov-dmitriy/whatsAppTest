import { Route, useLocation, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router';
import React, { useEffect } from 'react';

import { PublicRoutes } from '../../resource/routes';

import { useAuthInfo } from '@/hooks/useAuthInfo';

const Router: React.FC = () => {
  const tokens = useAuthInfo();
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!tokens) {
      navigate('/');
    }
  }, [navigate, tokens, pathname]);

  return (
    <Routes>
      {PublicRoutes.map(({ path, Element }) => (
        <Route element={<Element />} key={path} path={path} />
      ))}
    </Routes>
  );
};

export default Router;
