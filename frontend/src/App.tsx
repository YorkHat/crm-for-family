import React from 'react';
import { Route, Routes } from 'react-router-dom';
import clientRoute from './clientRoute';
import { HomePage } from './pages';
import { Sidebar } from './components';

export const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Sidebar />
      <Routes>
        <Route path={clientRoute.root} element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
};
