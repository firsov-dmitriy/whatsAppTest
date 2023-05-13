import { Route, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router';
import React, { useEffect } from 'react';
import { PublicRoutes } from '../../resource/routes';
import { useAppSelector } from '@/redux/hooks/useAppSelector';
import { useAuthInfo } from '@/hooks/useAuthInfo';

const Router: React.FC = () => {
  const tokens = useAuthInfo();

  const navigate = useNavigate();

  useEffect(() => {
    if (!tokens) {
      navigate('/');
    }
  }, [tokens]);

  return (
    <Routes>
      {PublicRoutes.map(({ path, Element }) => (
        <Route element={<Element />} key={path} path={path} />
      ))}
    </Routes>
  );
};

export default Router;
