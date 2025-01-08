import {
  DownOutlined,
  FilterOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Dropdown, Select, Table } from "antd";
import UserInfoModel from "../components/UserInfoModel";
import { useState } from "react";
import { Link } from "react-router-dom";
const { RangePicker } = DatePicker;

const Allinventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      render: (text) => <span>{text}</span>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "date",
      render: (name) => (
        <span onClick={() => showModal(name)} className="cursor-pointer">
          {name}
        </span>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (src) => (
        <img
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
        <Dropdown
          menu={{
            items: [
              {
                label: "Pending",
                key: "0",
              },
              {
                label: "Deliverd",
                key: "1",
              },
              {
                label: "Out Of Stock",
                key: "3",
              },
            ],
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <span className="flex items-center justify-center gap-1 bg-green-200 p-1 rounded-full">
              {status}
              <DownOutlined />
            </span>
          </a>
        </Dropdown>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <span>${text}</span>,
    },
    {
      title: "Print",
      key: "print",
      render: (record) => (
        <Link
          to={`/inventory-print`}
          className="flex items-center text-orange-500"
        >
          <PrinterOutlined className="text-xl" />
          <span className="ml-2">Print</span>
        </Link>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Leonal Messi",
      date: "01/01/2024",
      image: "https://i.ibb.co.com/FzPzjLN/images.jpg",
      transaction: "101-00979",
      type: "FBM",
      quantity: 1,
      status: "Padding",
      amount: "34,295",
    },
    {
      key: "2",
      name: "Shakib Al Hasan",
      date: "01/01/2024",
      image: "https://i.ibb.co.com/T1s4wHV/download.jpg",
      transaction: "101-00979",
      type: "FBM",
      quantity: 1,
      status: "Out Of Stock",
      amount: "34,295",
    },
    {
      key: "3",
      date: "01/01/2024",
      name: "Afran Nishu",
      image: "https://i.ibb.co.com/fd31Gdx/strawberry.jpg",
      transaction: "101-00979",
      type: "FBM",
      quantity: 1,
      status: "Padding",
      amount: "34,295",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">All Inventory Receive</h1>
        {/* Filters */}
        <div className="rounded-lg mb-6">
          <div className="flex gap-6">
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
        columns={columns}
        dataSource={data}
        pagination={false}
        className="bg-white shadow-md rounded-md"
      />
      <UserInfoModel
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default Allinventory;
