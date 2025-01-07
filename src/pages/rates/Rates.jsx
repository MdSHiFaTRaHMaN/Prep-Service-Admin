import { useState } from "react";
import { Table, Pagination, Button, Modal, Input, message } from "antd";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Rates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [editedData, setEditedData] = useState({ range: "", rate: "" });

  const itemsPerPage = 10;

  const data = Array(15)
    .fill(null)
    .map((_, index) => ({
      key: index,
      range: "1-10 units",
      rate: "$1.50/unit",
    }));

  const handleEdit = (key) => {
    const recordToEdit = data.find((record) => record.key === key);
    setEditingRecord(recordToEdit);
    setEditedData({ range: recordToEdit.range, rate: recordToEdit.rate });
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: "Are you sure you want to delete this record?",
      content: "This action cannot be undone.",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        message.success(`Record deleted successfully! ${key}`);
        // Delete api lagbe)
      },
      onCancel: () => {
        message.warning("Delete action cancelled");
      },
    });
  };

  const columnsOfFba = [
    {
      title: "FBA",
      dataIndex: "range",
      key: "range",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-4">
          {/* Edit Icon */}
          <span
            onClick={() => handleEdit(record.key)}
            className="cursor-pointer text-xl text-blue-500 hover:text-blue-700"
          >
            <FiEdit />
          </span>

          {/* Delete Icon */}
          <span
            onClick={() => handleDelete(record.key)}
            className="cursor-pointer text-xl text-red-500 hover:text-red-700"
          >
            <RiDeleteBinFill />
          </span>
        </div>
      ),
    },
  ];
  const columnsOfFbm = [
    {
      title: "FBM",
      dataIndex: "range",
      key: "range",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-4">
          {/* Edit Icon */}
          <span
            onClick={() => handleEdit(record.key)} // Add your edit logic here
            className="cursor-pointer text-xl text-blue-500 hover:text-blue-700"
          >
            <FiEdit />
          </span>

          {/* Delete Icon */}
          <span
            onClick={() => handleDelete(record.key)} // Add your delete logic here
            className="cursor-pointer text-xl text-red-500 hover:text-red-700"
          >
            <RiDeleteBinFill />
          </span>
        </div>
      ),
    },
  ];
  const columnsOfMisc = [
    {
      title: "Misc",
      dataIndex: "range",
      key: "range",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-4">
          {/* Edit Icon */}
          <span
            onClick={() => handleEdit(record.key)} // Add your edit logic here
            className="cursor-pointer text-xl text-blue-500 hover:text-blue-700"
          >
            <FiEdit />
          </span>

          {/* Delete Icon */}
          <span
            onClick={() => handleDelete(record.key)} // Add your delete logic here
            className="cursor-pointer text-xl text-red-500 hover:text-red-700"
          >
            <RiDeleteBinFill />
          </span>
        </div>
      ),
    },
  ];

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleModalOk = () => {
    // Save edited data
    // console.log("Edited data:", editedData);
    message.success("Change Save Successfully");
    setIsModalVisible(false);
    setEditingRecord(null);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setEditingRecord(null);
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between my-2">
        <h3 className="text-xl font-semibold mb-4">Rates</h3>
        <Link to="/create-rate">
          <Button type="primary">Add New</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <Table
            dataSource={paginatedData}
            columns={columnsOfFba}
            pagination={false}
            bordered
            className="custom-table"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Table
            dataSource={paginatedData}
            columns={columnsOfFbm}
            pagination={false}
            bordered
            className="custom-table"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Table
            dataSource={paginatedData}
            columns={columnsOfMisc}
            pagination={false}
            bordered
            className="custom-table"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={data.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
      <Modal
        title="Edit Rate"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Range:</label>
          <Input
            value={editedData.range}
            onChange={(e) =>
              setEditedData((prev) => ({ ...prev, range: e.target.value }))
            }
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Rate:</label>
          <Input
            value={editedData.rate}
            onChange={(e) =>
              setEditedData((prev) => ({ ...prev, rate: e.target.value }))
            }
          />
        </div>
      </Modal>
    </div>
  );
};

export default Rates;
