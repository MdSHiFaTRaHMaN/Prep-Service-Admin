import { useEffect, useState } from "react";
import { Form, Upload, Button, Input, message } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { API, useSingleUser } from "../api/api";

const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { singleUser } = useSingleUser(userId);
  const [form] = Form.useForm(); // Ant Design Form instance
  const [image, setImage] = useState(singleUser.image); // Manage uploaded image
  const [loading, setLoading] = useState(false);

  // Load user data into form fields when available
  useEffect(() => {
    form.setFieldsValue({
      first_name: singleUser.first_name,
      last_name: singleUser.last_name,
      email: singleUser.email,
      phone: singleUser.phone,
    });
    setImage(singleUser.image); // Set default image
  }, [singleUser, form]);

  // Handle form submission
  const onFinish = async (values) => {
     try {
         const values = await form.validateFields();
   
         // Create FormData object
         const formData = new FormData();
         formData.append("first_name", values.first_name);
         formData.append("last_name", values.last_name);
         formData.append("phone", values.phone);
        
         setLoading(true);
   
         // API Call
         const response = await API.put(`/user/update/${userId}`, formData, {
           headers: { "Content-Type": "multipart/form-data" },
         });
   
         if (response.status === 200) {
           message.success("Profile Updated Successfully");
         } else {
           message.error("Update failed");
         }
   
         setLoading(false);
       } catch (error) {
         console.error("Error:", error);
         message.error("Something went wrong");
         setLoading(false);
       }
    navigate("/all-user");
  };

  // Handle image upload
  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully.`);
      setImage(info.file.response);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-xl p-8 w-full max-w-4xl">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            first_name: singleUser.first_name,
            last_name: singleUser.last_name,
            email: singleUser.email,
            phone: singleUser.phone,
          }}
        >
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <img
                src={image}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 transform hover:scale-105"
              />
              <Upload
                name="image"
                showUploadList={false}
                onChange={handleUpload}
              >
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer transform transition-all duration-300 hover:bg-cyan-500 hover:text-white">
                  <CameraOutlined className="text-lg" />
                </div>
              </Upload>
            </div>
            <p className="text-blue-600 mt-2 cursor-pointer text-center">
              Change Logo
            </p>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <Form.Item
              label="First Name"
              name="first_name"
              rules={[{ required: true, message: "First Name is required" }]}
            >
              <Input placeholder="Enter First Name" />
            </Form.Item>

            {/* Last Name */}
            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[{ required: true, message: "Last Name is required" }]}
            >
              <Input placeholder="Enter Last Name" />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input readOnly placeholder="Enter Email" />
            </Form.Item>

            {/* Phone */}
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Phone number is required" },
              ]}
            >
              <Input placeholder="Enter Phone Number" />
            </Form.Item>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-16 py-4 rounded-lg shadow-lg hover:bg-blue-500 transform transition-all duration-300"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default EditUser;
