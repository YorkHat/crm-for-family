import React from 'react';
import { Route, Routes } from 'react-router-dom';
import clientRoute from './clientRoute';

export const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Routes>
        <Route path={clientRoute.root} element={<React.Fragment />} />
      </Routes>
    </React.Fragment>
  );
};
