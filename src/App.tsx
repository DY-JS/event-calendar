import { Layout } from 'antd';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css';
import { useEffect } from 'react';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

function App() {
  const { setUser, setIsAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({ username: localStorage.getItem('username' || '') } as IUser);
      setIsAuth(true); //вместо dispatch(setIsAuth(true))- благодаря useActions()
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
      {/* <Layout.Footer/> */}
    </Layout>
  );
}

export default App;
