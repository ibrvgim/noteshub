import { Outlet } from 'react-router';
import SideBar from './components/sidebar/SideBar';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <main className="grid min-h-screen grid-cols-[18rem_1fr] grid-rows-[5rem_1fr] font-nunito dark:bg-gray-900 dark:text-gray-300">
      <SideBar />
      <Navigation />
      <Outlet />
    </main>
  );
}

export default App;
