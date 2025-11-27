import { useState, useRef, useEffect } from 'react'
import './index.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/homePage';
import Navbar from './components/homeComponents/header/navBar';
import Footer from './components/homeComponents/footer/footer';
import ProductReviewDetails from './pages/productReview';
import CartPage from './pages/cartPage';
import AuthForm from './pages/AuthorizationForm';
import VerifyAccount from './pages/verifyAccount';
import ContactUs from './pages/contactUs';
import NotFound from './pages/404Page';
import Dashboard from './pages/dashboard';

function App() {

const appRef = useRef(null);
useEffect(()=>{
    appRef.current?.scrollIntoView({behavior: "smooth"});
 },[])
const location = useLocation();
const AuthRoutesRef = ["/register", "/verify-account"];
const isAuthPage = AuthRoutesRef.includes(location.pathname);

return <div ref={appRef}>
{!isAuthPage && <Navbar/>}
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product/:id' element={<ProductReviewDetails/>}></Route>
    <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/register' element={<AuthForm/>}></Route>
        <Route path="/verify-account" element={<VerifyAccount/>} />
        <Route path='/contact' element={<ContactUs/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
</Routes>
{!isAuthPage && <Footer/>}  
</div>
}

export default App;
