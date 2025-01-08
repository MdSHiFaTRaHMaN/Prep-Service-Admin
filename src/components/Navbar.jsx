import { GrNotification } from "react-icons/gr";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminLogo from "../assets/images/Admin Logo.png";
import { useState } from "react";
import Notification from "./Notification";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-bold text-yellow-600">
          <img src={AdminLogo} alt="" width={100} />
        </Link>
        {/* Notification and User Info */}
        <div className="flex items-center gap-6">
          {/* Notification Icon */}
          <div className="relative" onClick={showDrawer}>
            <GrNotification className="text-xl text-gray-500 cursor-pointer hover:text-gray-700" />
            <span className="absolute top-[-5px] right-[-5px] w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>
          <Notification onClose={onClose} open={open} />
          {/* User Info */}
          <Link to="/admin-profile">
            <div className="flex items-center gap-3">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
              <div className="leading-tight">
                <h4 className="text-sm font-semibold text-gray-700">
                  Md Shifat Rahman
                </h4>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <FaChevronDown />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
