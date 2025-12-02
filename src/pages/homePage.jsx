import ProductCategories from "../components/homeComponents/main/brandingCategories";
import HeroSection from "../components/homeComponents/header/heroSection";
import Navbar from "../components/homeComponents/header/navBar";
import FlashSaleCard from "../components/homeComponents/main/FlashSaleProducts";
import Footer from "../components/homeComponents/footer/footer";
import { useRef,useEffect } from "react";
import { useState } from "react";

 export default function Home(){

    return  <home className="h-screen select-none w-full bg-white">
       
        <HeroSection/>
        <ProductCategories/>
        <FlashSaleCard/>
        
    </home>
    
}