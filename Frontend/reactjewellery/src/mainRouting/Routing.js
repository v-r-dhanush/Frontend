import { createBrowserRouter } from "react-router-dom";
import MainDashboardComp from "../layout/MainDashboardComp";
import Home from "../layout/Home";
import About from "../layout/About";
import Product from "../layout/Product";
import Contact from "../layout/Contact";
import PageNotFoundComp from "../layout/PageNotFoundComp";

const routing = createBrowserRouter([
    {path:"",element:<MainDashboardComp/>,children:[
        {path:"home",element:<Home/>},
        {path:"About",element:<About/>},
        {path:"Product",element:<Product/>},
        {path:"Contact",element:<Contact/>}
    ]},
    {path:"*",element:<PageNotFoundComp/>}
]);
export default routing;