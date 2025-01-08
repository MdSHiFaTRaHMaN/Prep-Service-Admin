import { Select } from "antd";
import {
  FaUserAlt,
  FaBoxOpen,
  FaDollarSign,
  FaChevronRight,
} from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

const DashBoard = () => {

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* DashBoard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total User</h4>
            <h2 className="text-2xl font-bold">40,689</h2>
          </div>
          <FaUserAlt className="text-3xl text-blue-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Order</h4>
            <h2 className="text-2xl font-bold">10,293</h2>
          </div>
          <FaBoxOpen className="text-3xl text-yellow-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Sales</h4>
            <h2 className="text-2xl font-bold">$89,000</h2>
          </div>
          <FaDollarSign className="text-3xl text-green-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Pending</h4>
            <h2 className="text-2xl font-bold">2,040</h2>
          </div>
          <BiTimeFive className="text-3xl text-red-400" />
        </div>
      </div>

      {/* Inventory overview */}

      <h1 className="text-2xl font-semibold flex items-center gap-2 my-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg shadow-lg">
        <span className="flex items-center gap-2">
          Inventory
          <span className="bg-white text-blue-500 p-2 rounded-full shadow-md">
            <FaChevronRight className="text-xl" />
          </span>
        </span>
        <span className="text-xl text-gray-200">Overview</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total User</h4>
            <h2 className="text-2xl font-bold">40,689</h2>
          </div>
          <FaUserAlt className="text-3xl text-blue-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Order</h4>
            <h2 className="text-2xl font-bold">10,293</h2>
          </div>
          <FaBoxOpen className="text-3xl text-yellow-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Sales</h4>
            <h2 className="text-2xl font-bold">$89,000</h2>
          </div>
          <FaDollarSign className="text-3xl text-green-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Pending</h4>
            <h2 className="text-2xl font-bold">2,040</h2>
          </div>
          <BiTimeFive className="text-3xl text-red-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Order</h4>
            <h2 className="text-2xl font-bold">10,293</h2>
          </div>
          <FaBoxOpen className="text-3xl text-yellow-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Sales</h4>
            <h2 className="text-2xl font-bold">$89,000</h2>
          </div>
          <FaDollarSign className="text-3xl text-green-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Pending</h4>
            <h2 className="text-2xl font-bold">2,040</h2>
          </div>
          <BiTimeFive className="text-3xl text-red-400" />
        </div>
      </div>

      {/* Billing -> Overview */}
      <h1 className="text-2xl font-semibold flex items-center gap-2 my-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg shadow-lg">
        <span className="flex items-center gap-2">
          Billing
          <span className="bg-white text-blue-500 p-2 rounded-full shadow-md">
            <FaChevronRight className="text-xl" />
          </span>
        </span>
        <span className="text-xl text-gray-200">Overview</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total User</h4>
            <h2 className="text-2xl font-bold">40,689</h2>
          </div>
          <FaUserAlt className="text-3xl text-blue-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Order</h4>
            <h2 className="text-2xl font-bold">10,293</h2>
          </div>
          <FaBoxOpen className="text-3xl text-yellow-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Sales</h4>
            <h2 className="text-2xl font-bold">$89,000</h2>
          </div>
          <FaDollarSign className="text-3xl text-green-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Pending</h4>
            <h2 className="text-2xl font-bold">2,040</h2>
          </div>
          <BiTimeFive className="text-3xl text-red-400" />
        </div>
        <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
          <div>
            <h4 className="text-gray-500">Total Order</h4>
            <h2 className="text-2xl font-bold">10,293</h2>
          </div>
          <FaBoxOpen className="text-3xl text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
