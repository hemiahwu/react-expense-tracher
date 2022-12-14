import './App.css';
import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-back',
    });
    AOS.refresh();
  }, []);
  return (
    <div className='App'>
      <Routers basename='/frontend/react/7001'>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/test' element={<Test />} /> */}
        </Routes>
      </Routers>
    </div>
  );
}

//路由守卫
export function ProtectedRoute(props) {
  if (localStorage.getItem('expense-tracker-user')) {
    return props.children;
  } else {
    return <Navigate to='/login' />;
  }
}

export default App;
