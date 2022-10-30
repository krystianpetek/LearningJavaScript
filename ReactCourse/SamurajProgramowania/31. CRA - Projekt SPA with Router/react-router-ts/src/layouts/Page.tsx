import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage"
import ProductPage from "../pages/ProductPage";

const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/contact" element={<ContactPage />} ></Route>
            <Route path="/products" element={<ProductPage />} ></Route>
            <Route path="/admin" element={<AdminPage />} ></Route>
            <Route path="/*" element={<ErrorPage />} ></Route>
        </Routes>
    );
}

export default Page;