import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Contact from "../page/Contact";
import Home from "../page/Home";
import ProductDetail from "../components/ProductDetail";
import Banner from "./../components/Banner";
import NotFound from "./../page/NotFound";
import Register from "../page/Register";
import Login from "../page/Login";
import ProductContext from "../context/ProductContext";

export default function Client() {
   const location = useLocation();
   const hideHeaderFooter = location.pathname.includes("*");
   const hideBanner =
      location.pathname.includes("home/detail") ||
      location.pathname.includes("register") ||
      location.pathname.includes("login");

   return (
      <>
         <div className="flex flex-col justify-between min-h-[100vh]">
            {!hideHeaderFooter && <Header />}
            {!hideBanner && <Banner />}
            <Routes>
               <Route path="/" element={<Navigate to="home" />} />
               <Route path="home" element={<Home />} />
               <Route path="home/detail/:id" element={<ProductDetail />} />
               <Route path="contact" element={<Contact />} />
               <Route path="register" element={<Register />} />
               <Route path="login" element={<Login />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
         </div>
      </>
   );
}
