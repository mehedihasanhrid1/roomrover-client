import React, { useContext }  from "react";
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from "react-router-dom";
import { Hourglass } from  'react-loader-spinner'

const PrivateRoute = ({ children }) => {
  const{ user , loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
                      <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#306cce', '#72a1ed']}
            />
        </div>
      )
  }

  if (user) {
      return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;

};

export default PrivateRoute;
