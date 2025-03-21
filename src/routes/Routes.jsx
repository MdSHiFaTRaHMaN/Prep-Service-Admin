import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DashBoard from "../pages/DashBoard";
import Prep from "../pages/Prep";
import Report from "../pages/Report";
import Login from "../components/Login";
import Overview from "../pages/Overview";
import ProductReturn from "../pages/ProductReturn";
import BillOverview from "../pages/BillOverview";
import Payment from "../pages/Payment";
import AllUsers from "../pages/AllUsers";
import Allinventory from "../pages/Allinventory";
import PrintInventory from "../pages/PrintInventory";
import Rates from "../pages/rates/Rates";
import EditUser from "../pages/EditUser";
import FcmConfigaration from "../pages/FcmConfigaration";
import SmtpConfigaration from "../pages/SmtpConfigaration";
import ChangePassword from "../pages/ChangePassword";
import AdminProfile from "../components/AdminProfile";
import PrivateRoute from "./PrivateRoute";
import CreateRate from "../pages/CreateRate";
import CreateNewUser from "../pages/CreateNewUser";



export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <PrivateRoute><Main /></PrivateRoute>,
    children: [
        { 
            path: "/",
            element: <DashBoard />
         },
         {
          path: "/overview",
          element: <Overview />
         },
         {
          path: "/allinventory",
          element: <Allinventory />
         },
         {
          path: "/productReturn",
          element: <ProductReturn />
         },
         {
          path: "/prep",
          element: <Prep />
         },
         {
          path: "/billingOverview",
          element: <BillOverview />
         },
         {
          path: "/payment",
          element: <Payment />
         },
         {
          path: "/all-rates",
          element: <Rates />
         },
         {
          path: "/create-rate",
          element: <CreateRate />
         },
         {
          path: "/reports",
          element: <Report />
         },
         {
          path: "/all-user",
          element: <AllUsers />
         },
         {
          path: "/create-user",
          element: <CreateNewUser />
         },
         {
          path: "/inventory-print",
          element: <PrintInventory />
         },
         {
          path: "/user-edit/:userId",
          element: <EditUser />
         },
         {
          path: "/fcm-configaration",
          element: <FcmConfigaration />
         },
         {
          path: "/smtp-comfigaration",
          element: <SmtpConfigaration />
         },
         {
          path: "/change-password",
          element : <ChangePassword />
         },
         {
          path : "/admin-profile",
          element: <AdminProfile />
         },

    ],
  },
]);
