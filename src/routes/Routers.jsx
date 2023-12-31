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
import Mybookings from "../pages/Mybookings";
import Rooms from "../pages/Rooms";
import Roomdetails from "../pages/Roomdetails";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";
import Bookingdetails from "../pages/Bookingdetails";

axios.defaults.withCredentials = true;

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
                },
                {
                    path:'/bookings',
                    element:<PrivateRoute><Mybookings/></PrivateRoute>
                },
                {
                    path:'/bookingdetails/:id',
                    element:<PrivateRoute><Bookingdetails/></PrivateRoute>,
                    loader: async ({ params }) => {
                        try {
                          const response = await axios.get(`https://roomrover-sever-hz75sv5qr-mehedi-hasans-hrid.vercel.app/rooms/${params.id}`);
                          const roomData = response.data;
                          return { room: roomData };
                        } catch (error) {
                          console.error('Error fetching single room:', error);
                          return { room: null };
                        }
                    }
                },
                {
                    path:'/rooms',
                    element:<Rooms/>,
                    loader: async () => {
                        try {
                          const response = await axios.get('https://roomrover-sever-hz75sv5qr-mehedi-hasans-hrid.vercel.app/rooms');
                          const data = response.data;
                          return { rooms: data };
                        } catch (error) {
                          console.error('Error fetching rooms:', error);
                          return { rooms: [] };
                        }
                      }             
                },
                {
                    path:'/details/:id',
                    element:<Roomdetails/>,
                    loader: async ({ params }) => {
                        try {
                          const response = await axios.get(`https://roomrover-sever-hz75sv5qr-mehedi-hasans-hrid.vercel.app/rooms/${params.id}`);
                          const roomData = response.data;
                          return { room: roomData };
                        } catch (error) {
                          console.error('Error fetching single room:', error);
                          return { room: null };
                        }
                    }
                }
            ]
        }
    ]
);

export default routers;