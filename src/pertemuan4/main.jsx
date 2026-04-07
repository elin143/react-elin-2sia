import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./Frameworklist";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveGrid from "./ResponsiveGrid";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkListSearchFilter/> */}
            <ResponsiveGrid/>
        </div>
    )