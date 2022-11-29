import './App.css';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className='App'>
      <Routers>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
