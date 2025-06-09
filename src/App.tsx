import { Outlet, useLocation, useNavigate } from 'react-router';
import SideBar from './components/sidebar/SideBar';
import Navigation from './components/navigation/Navigation';
import { useEffect } from 'react';
import ModalWindow from './components/general/ModalWindow';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isArchived = location?.pathname.includes('archive');

  useEffect(() => {
    function handleOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (isArchived) navigate('/archive');
        else navigate('/');
      }
    }

    window.addEventListener('keydown', handleOnEscape);

    return () => {
      window.removeEventListener('keydown', handleOnEscape);
    };
  }, [isArchived, navigate]);

  return (
    <main className="grid min-h-screen grid-cols-[18rem_1fr] grid-rows-[5rem_1fr] font-nunito dark:bg-gray-900 dark:text-gray-300">
      <SideBar />
      <Navigation />
      <Outlet />
      <ModalWindow />
    </main>
  );
}

export default App;
