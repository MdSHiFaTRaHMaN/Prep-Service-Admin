import { Modal } from "antd";

const UserInfoModel = ({ isModalOpen, handleOk, handleCancel }) => {
  const user = {
    user_id: "03",
    name: "Leonal Messi",
    email: "imadmin@gmail.com",
    phone: "017 55 66 77 88",
    image: "https://i.ibb.co.com/RhvxW5G/images.jpg",
    status: "Active",
  };

  return (
    <Modal
      title={
        <h2 className="text-xl font-bold text-gray-800 text-center">
          User Information
        </h2>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null} // Custom footer design can be added later
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Profile Image */}
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 rounded-md border-2 border-blue-500 shadow-md object-cover"
        />

        {/* User Information */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-700">{user.name}</h3>
          <p className="text-sm text-gray-500">ID: {user.user_id}</p>
        </div>

        {/* Contact Information */}
        <div className="w-full">
          <div className="flex justify-center items-center">
            <span className="font-semibold text-gray-600">Email:</span>
            <span className="text-gray-700">{user.email}</span>
          </div>
          <div className="flex justify-center items-center mt-2">
            <span className="font-semibold text-gray-600">Phone:</span>
            <span className="text-gray-700">{user.phone}</span>
          </div>
        </div>

        {/* Status */}
        <div className="flex justify-center items-center mt-4">
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              user.status === "Active"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {user.status}
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default UserInfoModel;
