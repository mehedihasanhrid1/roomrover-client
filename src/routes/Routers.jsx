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
                    element:<Mybookings/>
                },
                {
                    path:'/rooms',
                    element:<Rooms/>,
                    loader: async () => {
                        try {
                          const response = await axios.get('http://localhost:5000/rooms');
                          const data = response.data;
                          return { rooms: data };
                        } catch (error) {
                          console.error('Error fetching rooms:', error);
                          return { rooms: [] };
                        }
                      }             
                },
                {
                    path:'rooms/details/:id',
                    element:<Roomdetails/>,
                    loader: async ({ params }) => {
                        try {
                          const response = await axios.get(`http://localhost:5000/rooms/${params.id}`);
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