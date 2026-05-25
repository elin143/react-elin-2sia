import { useState } from "react";
import React, { Suspense } from "react";
// import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Products from "./pages/Products";
import CustomerDetail from "./pages/CustomerDetail";


function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"))
  const Orders = React.lazy(() => import("./pages/Orders"))
  const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
  const CustomerDetail = React.lazy(() => import("./pages/CustomerDetail"))
  const Customer = React.lazy(() => import("./pages/Customer"))
  const NotFound = React.lazy(() => import("./pages/NotFound"))
  const Login = React.lazy(() => import("./pages/auth/Login"))
  const Register = React.lazy(() => import("./pages/auth/Register"))
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
  const Error401 = React.lazy(() => import("./pages/Error401"))
  const Error400 = React.lazy(() => import("./pages/Error400"))
  const Error403 = React.lazy(() => import("./pages/Error403"))
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
  const Components = React.lazy(() => import("./pages/Components"))
  return (
    <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<MainLayout/>}>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/error-400" element={<Error400 />} />
              <Route path="/error-401" element={<Error401 />} />
              <Route path="/error-403" element={<Error403 />} />
              <Route path="Products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} /> 
              <Route path="/customer/:id" element={<CustomerDetail />} /> 
              <Route path="Components" element={<Components />} />
              </Route>

             <Route element={<AuthLayout/>}>
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register/>} />
             <Route path="/forgot" element={<Forgot/>} />
        </Route> 
            </Routes>
         </Suspense>
  );
}


export default App;