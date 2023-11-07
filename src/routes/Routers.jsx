import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contactus from "../components/Contactus";
import AboutUs from "../components/AboutUs";
import FAQs from "../components/FAQs";
import PrivacyTerms from "../components/PrivacyTerms";

const routers = createBrowserRouter(
    [
        {
            path:'/',
            element:<Root/>,
            errorElement:<Errorpage/>,
            children:[
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/signup',
                    element:<Signup/>
                },
                {
                    path:'/contactus',
                    element:<Contactus/>
                }
                ,
                {
                    path:'/aboutus',
                    element:<AboutUs/>
                },
                {
                    path:'/faq',
                    element:<FAQs/>
                },
                {
                    path:'/terms',
                    element:<PrivacyTerms/>
                }
            ]
        }
    ]
);

export default routers;