import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Routes/SignUp';
import SignIn from './Routes/SignIn';
import Dashboard from './Routes/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signup" />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
