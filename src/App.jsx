import { useState, useRef, useEffect, useContext } from 'react'
import './index.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import UserInfoForm from './pages/userPersonalizationForm';
import AdminCreateProduct from './pages/createProductPage';
import ProtectedRoute from './context/globalAuthContext';
import OrderCard from './pages/ordersAdminDet';
import PaymentSuccess from './pages/successPage.jsx';
import PaymentError from './pages/errorPage.jsx';




function App() {
const appRef = useRef(null);
useEffect(()=>{
    appRef.current?.scrollIntoView({behavior: "smooth"});
 },[])
const location = useLocation();
const AuthRoutesRef = ["/register", "/verify-account", "/user-information"];
const isAuthPage = AuthRoutesRef.includes(location.pathname);

return <div ref={appRef}>
{!isAuthPage && <Navbar/>}
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/register' element={<AuthForm/>}></Route>
 <Route path="/verify-account" element={<VerifyAccount/>} />
   <Route path='*' element={<NotFound/>}></Route>
   <Route path="/payment/success" element={<PaymentSuccess/>}></Route>
    <Route path="/payment/error" element={<PaymentError/>}></Route>

   
    <Route path='/product/:id' element={<ProtectedRoute>
        <ProductReviewDetails/>
    </ProtectedRoute>}></Route>
    <Route path='/cart' element={<CartPage/>}></Route>
         <Route path="/user-information" element={<UserInfoForm/>} />
     

        <Route path='/contact' element={<ContactUs/>}></Route>
         <Route path='/create-product' element={
<ProtectedRoute adminOnly={true}>
     <AdminCreateProduct/>
 </ProtectedRoute> }></Route>
          <Route path='/dashboard' element={
            <ProtectedRoute adminOnly={true}>
    <Dashboard/>
 </ProtectedRoute> }></Route>

     
</Routes>
{!isAuthPage && <Footer/>}  
</div>
}

export default App;
