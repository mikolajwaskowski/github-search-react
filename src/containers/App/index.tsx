import styled from 'styled-components';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Header from '../../components/Header';
import HomePage from '../HomePage';
import UserPage from '../UserPage';
import NotFoundPage from "../NotFoundPage";

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}
