import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage"
import ProductPage from "../pages/ProductPage";
import ProductListPage from "../pages/ProductListPage";
import LoginPage from "../pages/LoginPage";

const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/contact" element={<ContactPage />} ></Route>
            <Route path="/products" element={<ProductListPage />} ></Route>
            <Route path="/product/:id" element={<ProductPage />} ></Route>
            <Route path="/admin/*" element={<AdminPage />} ></Route>
            <Route path="/login" element={<LoginPage />} ></Route>
            <Route path="/*" element={<ErrorPage />} ></Route>
        </Routes>
    );
}

export default Page;