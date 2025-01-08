import { Button, Card, DatePicker, Dropdown, Select, Space, Table } from "antd";
import {
  BoxPlotOutlined,
  ClockCircleOutlined,
  CheckOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { AiFillPrinter } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import UserInfoModel from "../components/UserInfoModel";
import { Link } from "react-router-dom";
const { RangePicker } = DatePicker;

const Overview = () => {
  const stats = [
    { title: "Units in Storage", value: "40,689", icon: <FaUserAlt /> },
    { title: "No. of SKU's", value: "10,293", icon: <BoxPlotOutlined /> },
    { title: "In Process", value: "$89,000", icon: <CheckOutlined /> },
    { title: "Prepped", value: "2040", icon: <ClockCircleOutlined /> },
    { title: "Waiting for Label", value: "40,689", icon: <FaUserAlt /> },
    { title: "On Hold", value: "10,293", icon: <BoxPlotOutlined /> },
    { title: "Shipped", value: "$89,000", icon: <CheckOutlined /> },
  ];

  const dataSource = Array(50) // Increased to demonstrate pagination
    .fill(null)
    .map((_, index) => ({
      key: index,
      date: "01/01/2024",
      transaction: `101-00${979 + index}`,
      type: "FBM",
      quantity: 1,
      status: "Padding",
      amount: "$34,295",
      image: "https://i.ibb.co.com/RhvxW5G/images.jpg",
    }));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "User Profile",
      dataIndex: "image",
      key: "image",
      render: (src) => (
        <img
          onClick={() => showModal(name)}
          src={src}
          alt="Product"
          className="w-16 h-16 object-cover rounded-md"
        />
      ),
    },
    {
      title: "Transaction No.",
      dataIndex: "transaction",
      key: "transaction",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Qty.",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Select
          defaultValue={status}
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "padding",
              label: "Padding",
            },
            {
              value: "delivered",
              label: "Delivered",
            },
            {
              value: "out of Stock",
              label: "Out Of Stock",
            },
          ]}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Print",
      key: "print",
      render: () => (
        <Link to="/inventory-print">
          <AiFillPrinter className="text-orange-500 text-lg cursor-pointer hover:scale-110" />
        </Link>
      ),
    },
  ];
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const monthData = [
    { value: "today", label: "Today" },
    { value: "yesterday", label: "Yesterday" },
    { value: "thisMonth", label: "This Month" },
    { value: "previousMonth", label: "Previous Month" },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-3 flex justify-between">
        <h3 className="text-2xl font-semibold">Overview</h3>
        <Select
          showSearch
          placeholder="Select a Date"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          options={monthData}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="flex flex-col bg-white hover:shadow-md">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="text-lg font-semibold text-gray-700">
                {stat.title}
                <h1 className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </h1>
              </div>
              <div className="text-3xl text-blue-500 bg-green-100 p-2 rounded-xl">
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Deals Details */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-4">Deals Details</h3>

          {/* Filters */}
          <div className="bg-white rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-600 mb-1">Select Type</label>
                <Select
                  placeholder="Select a type"
                  className="w-full"
                  options={[
                    { value: "padding", label: "Padding" },
                    { value: "delivered", label: "Delivered" },
                    { value: "out of stock", label: "Out of Stock" },
                  ]}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Select Date Range
                </label>
                <RangePicker className="w-full" />
              </div>
              <div className="flex items-end">
                <Button
                  type="primary"
                  icon={<FilterOutlined />}
                  className="w-full bg-green-600"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{
            pageSize: 5, // Items per page
            showSizeChanger: true, // Allow user to change page size
            pageSizeOptions: ["5", "10", "20"], // Options for page size
          }}
          className="custom-table"
        />
      </div>
      <UserInfoModel
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Overview;
