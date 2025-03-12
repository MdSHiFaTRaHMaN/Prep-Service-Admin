import { FilterOutlined, PrinterOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select, Space, Table } from "antd";
import UserInfoModel from "../components/UserInfoModel";
import { useState } from "react";
import { Link } from "react-router-dom";
import Upcoming from "../assets/images/commingsoon.png";
import { useAllInventory } from "../api/api";
import { FaFilePdf } from "react-icons/fa";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const AllInventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
  });
  const { allInventory, pagination } = useAllInventory({
    startTime,
    endTime,
    filters,
  });
  const [dateRange, setDateRange] = useState([null, null]);

  console.log(allInventory);

  const handleTableChange = (pagination) => {
    const { current: page, pageSize: limit } = pagination;

    setFilters((prevFilters) => ({
      ...prevFilters,
      page,
      limit,
    }));
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

  // ✅ PDF Download Function
  const handleDownload = (pdf) => {
    const link = document.createElement("a");
    link.href = pdf;
    link.setAttribute("download", pdf.split("/").pop()); // Extracts filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <span>{dayjs(text).format("DD-MM-YYYY")}</span>,
    },
    {
      title: "User Name",
      dataIndex: "user_id",
      key: "user_id",
      render: (user_id) => (
        <span onClick={() => showModal(user_id)} className="cursor-pointer">
          {user_id}
        </span>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (src) => (
        <img
          src={src || Upcoming}
          alt="Product"
          className="w-16 h-16 object-cover rounded-md"
        />
      ),
    },
    {
      title: "Transaction No.",
      dataIndex: "transaction_no",
      key: "transaction_no",
    },
    {
      title: "Type",
      dataIndex: "rate_type_name",
      key: "rate_type_name",
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
          style={{ width: 120 }}
          options={[
            { value: "Panding", label: "Panding" },
            { value: "Processing", label: "Processing" },
            { value: "Complate", label: "Complate" },
            { value: "Cancelled", label: "Cancelled" },
          ]}
        />
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
      render: (_, record) => (
        <Space>
          {/* ✅ PDF Download Button */}
          <button
            className="text-red-600 text-xl"
            onClick={() => handleDownload(record.pdf)}
          >
            <FaFilePdf />
          </button>

          {/* Print Button */}
          <Link
            to={`/inventory-print`}
            className="flex items-center text-orange-500"
          >
            <PrinterOutlined className="text-xl" />
          </Link>
        </Space>
      ),
    },
  ];

  const handleDateChange = (dates, dateStrings) => {
    setDateRange(dateStrings);
  };

  const handleApplyFilters = () => {
    setStartTime(dateRange[0]);
    setEndTime(dateRange[1]);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">All Inventory Receive</h1>
        {/* Filters */}
        <div className="rounded-lg mb-6">
          <div className="flex gap-6">
            <div>
              <label className="block text-gray-600 mb-1">
                Select Date Range
              </label>
              <RangePicker
                className="w-full"
                onChange={handleDateChange} // Add onChange event to handle date change
              />
            </div>
            <div className="flex items-end">
              <Button
                type="primary"
                icon={<FilterOutlined />}
                className="w-full bg-green-600"
                onClick={handleApplyFilters} // Add onClick event for filter button
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Table with Pagination */}
      <Table
        columns={columns}
        dataSource={allInventory.map((item, index) => ({
          key: index,
          ...item,
        }))}
        pagination={{
          current: filters.page,
          pageSize: filters.limit,
          total: pagination.total,
        }}
        onChange={handleTableChange}
        className="bg-white rounded-md"
      />

      <UserInfoModel
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default AllInventory;
