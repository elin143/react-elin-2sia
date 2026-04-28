import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {Outlet} from "react-router-dom";

export default function MainLayout(){
    return(
        <div className="flex min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="flex-1 flex flex-col">
        
        <Header />
        <Outlet/>
      </div>
      </div> 
    )
}