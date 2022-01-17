import { Route, BrowserRouter, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../components/Header';
import React from 'react';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 2rem 1rem;
  flex-direction: column;
`;

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
