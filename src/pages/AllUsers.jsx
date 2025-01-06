import { Select, Table } from "antd";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";

const AllUsers = () => {
  const columns = [
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
      render: (text) => <span>{text}</span>,
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
      title: "User Name",
      dataIndex: "name",
      key: "date",
      render: (name) => <span>{name}</span>,
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

  const handleEdit = (key) => {
    console.log("Edit action for:", key);
  };

  const handleDelete = (key) => {
    console.log("Delete action for:", key);
  };

  const data = [
    {
      user_id: "01",
      name: "Leonal Messi",
      email: "imadmin@gmail.com",
      phone: "017 00 00 00 00",
      image: "https://i.ibb.co.com/RhvxW5G/images.jpg",
      status: "Active",
    },
    {
      user_id: "02",
      name: "HERO ALOM",
      email: "imadmin@gmail.com",
      phone: "017 11 22 33 44",
      image: "https://i.ibb.co.com/jVPrdYG/images.jpg",
      status: "Active",
    },
    {
      user_id: "03",
      name: "JAYED KHAN",
      email: "imadmin@gmail.com",
      phone: "017 55 66 77 88",
      image: "https://i.ibb.co.com/C20mQ0S/1686576913-707565add7318d6bfe65c70ebadee06f.gif",
      status: "Active",
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
        <h1 className="text-2xl font-bold mb-4">All Inventory Receive</h1>
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
        pagination={false}
        className="bg-white shadow-md rounded-md"
      />
    </div>
  );
};

export default AllUsers;
