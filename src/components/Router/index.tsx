import { Route, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router';
import React, { useEffect } from 'react';
import { PublicRoutes } from '../../resource/routes';
import { useAppSelector } from '@/redux/hooks/useAppSelector';

const Router: React.FC = () => {
  const tokens = useAppSelector((state) => state.tokens);
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokens.idInstance || !tokens.apiTokenInstance) {
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
