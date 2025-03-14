import { message, Modal, Select, Spin, Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAllUser } from "../api/api";
import Shadow from "../assets/images/usershadow.png";

const AllUsers = () => {
  const { allUser, isLoading } = useAllUser();

  const columns = [
    {
      title: "User ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Image",
      dataIndex: "profile_pic",
      key: "profile_pic",
      render: (src) => (
        <img
          src={`https://prep-service.onrender.com${src}` || Shadow}
          alt="User Image"
          className="w-16 h-16 object-cover rounded-md"
        />
      ),
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <span>
          {record.first_name} {record.last_name}
        </span>
      ),
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Print",
      key: "print",
      render: (record) => (
        <div className="flex items-center gap-4">
          {/* Edit Icon */}
          <Link
            to={`/user-edit/${record.id}`}
            className="cursor-pointer text-xl text-blue-500 hover:text-blue-700"
          >
            <FiEdit />
          </Link>

          {/* Delete Icon */}
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

  const handleDelete = (key) => {
    Modal.confirm({
      title: "Are you sure you want to delete this User?",
      content: "This action cannot be undone.",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        message.success(`User deleted successfully! ${key}`);
        // Delete api lagbe)
      },
      onCancel: () => {
        message.warning("Delete action cancelled");
      },
    });
  };

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
        <h1 className="text-2xl font-bold mb-4">All Users</h1>
        <Select
          showSearch
          placeholder="Select a Month"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          options={monthData}
        />
      </div>
      {isLoading ? (
        <Spin />
      ) : (
        <Table
          columns={columns}
          dataSource={allUser}
          pagination={false}
          className="bg-white shadow-md rounded-md"
        />
      )}
    </div>
  );
};

export default AllUsers;
