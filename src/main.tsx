import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import AllNotes from './pages/AllNotes.tsx';
import ArchiveNotes from './pages/ArchiveNotes.tsx';
import { Provider } from 'react-redux';
import store from './store.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<AllNotes />} />
            <Route path='archive' element={<ArchiveNotes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
