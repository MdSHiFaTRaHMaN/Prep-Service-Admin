import { useState } from "react";
import { Table, Button, Spin, Alert, message, Modal } from "antd";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { API, useAllRates } from "../../api/api";

const Rates = () => {
  const [loadingDelete, setLoadingDelete] = useState(false);
  const { allRates, isLoading, isError, error, refetch } = useAllRates();

  if (isLoading) {
    return (
      <Spin tip="Loading rates..." className="flex justify-center mt-10" />
    );
  }

  if (isError) {
    return (
      <Alert
        message="Error loading rates"
        description={error.message}
        type="error"
      />
    );
  }

  const filteredRates = {
    FBA: allRates.filter((rate) => rate.rate_type === "FBA"),
    FBM: allRates.filter((rate) => rate.rate_type === "FBM"),
    Misc: allRates.filter((rate) => rate.rate_type !== "FBM"),
  };

  const handleDelete = async (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this Rate?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      cancelText: "Cancel",
      okType: "danger",
      onOk: async () => {
        try {
          // Call the API to delete the user
          await API.delete(`/rate/delete/${id}`);
          message.success("User deleted successfully!");
          refetch();
          // Optionally refresh your data here
        } catch (error) {
          console.error("Error deleting user:", error);
          message.error("Failed to delete the user. Please try again.");
        }
      },
      onCancel() {
        console.log("Deletion cancelled.");
      },
    });
  };

  const columns = [
    {
      title: "Range",
      dataIndex: "range",
      key: "range",
      render: (_, record) => `${record.start_unit} - ${record.end_unit} units`,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (text) => <span>${text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-4">
          <span className="cursor-pointer text-xl text-blue-500 hover:text-blue-700">
            <FiEdit />
          </span>
          <span
            onClick={() => handleDelete(record.id)}
            className="cursor-pointer text-xl text-red-500 hover:text-red-700"
          >
            <RiDeleteBinFill />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between my-2">
        <h3 className="text-xl font-semibold mb-4">Rates</h3>
        <Link to="/create-rate">
          <Button type="primary">Add New</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(filteredRates).map(([key, data]) => (
          <div key={key} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{key}</h2>
            <Table
              dataSource={data}
              columns={columns}
              pagination={false}
              bordered
              rowKey="id"
              className="custom-table"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
