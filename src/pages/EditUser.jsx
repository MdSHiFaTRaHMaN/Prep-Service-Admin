import { useForm } from "react-hook-form";
import { Upload, Button, Input, message } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    message.success("EditUser saved successfully!");
    navigate("/all-user")
  };

  const data = {
    user_id: "01",
    first_name: "Leonal Messi",
    last_name: "Leonal Messi",
    email: "imadmin@gmail.com",
    phone: "017 00 00 00 00",
    image: "https://i.ibb.co.com/RhvxW5G/images.jpg",
    status: "Active",
  };

  const [formData, setFormData] = useState({
    image: data.image, // Set the default image
  });

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully.`);
      setFormData({ ...formData, image: info.file.response });
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-xl p-8 w-full max-w-4xl">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <img
              src={formData.image}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 transform hover:scale-105"
            />
            <Upload
              name="logo"
              showUploadList={false}
              onChange={handleUpload}
              defaultFileList={[{ url: formData.image }]} // Set the default image
            >
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer transform transition-all duration-300 hover:bg-cyan-500 hover:text-white">
                <CameraOutlined className="text-lg" />
              </div>
            </Upload>
          </div>
          <p className="text-blue-600 mt-2 cursor-pointer text-center">Change Logo</p>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-600 mb-1">First Name</label>
              <Input
                defaultValue={data.first_name}
                placeholder="Enter First Name *"
                {...register("firstName", {
                })}
                className={`border-gray-300 py-3 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-600 mb-1">Last Name</label>
              <Input
                defaultValue={data.last_name}
                placeholder="Enter Last Name *"
                {...register("lastName")}
                className={`border-gray-300 py-3 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <Input
                defaultValue={data.email}
                placeholder="Enter Email *"
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Invalid email format",
                  },
                })}
                className={`border-gray-300 py-3 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-600 mb-1">Phone</label>
              <Input
                defaultValue={data.phone}
                placeholder="Enter Phone *"
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Invalid phone number",
                  },
                })}
                className={`border-gray-300 py-3 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-16 py-4 rounded-lg shadow-lg hover:bg-blue-500 transform transition-all duration-300"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
