import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customer";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import MainLayout from "./layouts/MainLayout";


function App() {
  // const [count, setCount] = useState(0);

  return (
        <div className="p-6">
          <Routes>
            <Route element={<MainLayout/>}>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/error-400" element={<Error400 />} />
              <Route path="/error-401" element={<Error401 />} />
              <Route path="/error-403" element={<Error403 />} />
              </Route>
            </Routes>
        </div>
  );
}

export default App;