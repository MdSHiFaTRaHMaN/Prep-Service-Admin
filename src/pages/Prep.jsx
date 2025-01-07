import { PrinterOutlined } from "@ant-design/icons";
import { Button, Select, Table } from "antd";
import { useState } from "react";
import UserInfoModel from "../components/UserInfoModel";

const Prep = () => {
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
      title: "Resone.",
      dataIndex: "resone",
      key: "resone",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <span>${text}</span>,
    },
    {
      title: "Conditions",
      dataIndex: "conditions",
      key: "conditions",
      render: (conditions) => <span>${conditions}</span>,
    },
    {
      title: "Print",
      key: "print",
      render: () => (
        <Button
          type="text"
          icon={<PrinterOutlined className="text-orange-500 text-xl" />}
        />
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
      quantity: 10,
      status: "Padding",
      amount: "34,295",
      resone: " HELLO",
      conditions: "24,420",
    },
    {
      key: "2",
      name: "Shakib Al Hasan",
      date: "01/01/2024",
      image: "https://i.ibb.co.com/T1s4wHV/download.jpg",
      transaction: "101-00979",
      type: "FBM",
      quantity: 50,
      status: "Out Of Stock",
      amount: "34,295",
      resone: " HELLO",
      conditions: "24,420",
    },
    {
      key: "3",
      date: "01/01/2024",
      name: "Afran Nishu",
      image: "https://i.ibb.co.com/fd31Gdx/strawberry.jpg",
      transaction: "101-00979",
      type: "FBM",
      quantity: 20,
      status: "Padding",
      amount: "34,295",
      resone: "HELLO",
      conditions: "24,420",
    },
  ];

  const monthData = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
    { value: "april", label: "April" },
    { value: "may", label: "May" },
    { value: "june", label: "June" },
    { value: "july", label: "July" },
    { value: "august", label: "August" },
    { value: "september", label: "September" },
    { value: "october", label: "October" },
    { value: "november", label: "November" },
    { value: "december", label: "December" },
  ];
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">Prep</h1>
        <Select
          showSearch
          placeholder="Select a Month"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          options={monthData}
        />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={true}
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

export default Prep;
