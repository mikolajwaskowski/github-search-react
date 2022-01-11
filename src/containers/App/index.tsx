import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Header from '../../components/Header';
import AppWrapper from './Wrapper';
import React from 'react';

const HomePage = React.lazy(() => import('../HomePage'));
const UserPage = React.lazy(() => import('../UserPage'));
const NotFoundPage = React.lazy(() => import('../NotFoundPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>...</>}>
                <HomePage />
              </React.Suspense>
            }
          />
          <Route
            path="/users/:userId"
            element={
              <React.Suspense fallback={<>...</>}>
                <UserPage />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<>...</>}>
                <NotFoundPage />
              </React.Suspense>
            }
          />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}
