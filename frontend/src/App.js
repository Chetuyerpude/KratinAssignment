import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/register';

import HealthData from './pages/healthdata';
import HealthHistory from './pages/heathhistory';

function App() {
  return (
    <BrowserRouter>
    <div>
    
      <Routes>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Register/>} />
        <Route path='/adddetails' element={<HealthData/>} />
        <Route path='/history' element={<HealthHistory/>} />

      </Routes>
      <ToastContainer position='top-center'  autoClose={1500} />
    </div>
    
    </BrowserRouter>
  );
}

export default App;
