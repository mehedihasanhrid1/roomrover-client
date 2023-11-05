import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/Root";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";

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
                }
            ]
        }
    ]
);

export default routers;