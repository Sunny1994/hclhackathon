// 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Cart from './pages/Cart.tsx';
import Navbar from './components/NavBar.tsx';
import ProtectedRoutes from './components/common/ProtectedRoute.tsx';

const App: React.FC = () => {

  
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<ProtectedRoutes><Cart/></ProtectedRoutes>} />
          <Route path="/*" element={<Login/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
