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
function App() {
  return (
    <div className='App'>
      <Routers>
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
