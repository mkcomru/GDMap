import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Profile from './pages/Profile/Profile';
import { AuthProvider } from './components/context/AuthContext';
import './index.css'
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Zaglushka from "./components/Zaglushka/Zaglushka.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/*<Zaglushka />*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/catnmouse" element={<Zaglushka />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;