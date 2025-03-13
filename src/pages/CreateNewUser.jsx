import { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { API } from "../api/api";

const CreateNewUser = () => {
  const [form] = Form.useForm();
  const [profileFile, setProfileFile] = useState([]);
  const [loading, setLoading] = useState();

  // Handle file selection
  const handleProfileImage = ({ fileList }) => {
    setProfileFile([...fileList]);
  };

  const handleSave = async (values) => {
    try {
      const values = await form.validateFields();

      // Create FormData object
      const formData = new FormData();
      formData.append("first_name", values.first_name);
      formData.append("last_name", values.last_name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("password", values.password);
      // If a new image is uploaded, append it to FormData
      if (profileFile.length > 0) {
        formData.append("profile_pic", profileFile[0].originFileObj);
      }

      setLoading(true);

      // API Call
      const response = await API.post(`/user/signup`, formData, {
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
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <Form form={form} layout="vertical" onFinish={handleSave}>
          {/* Upload Logo */}
          <div className="flex flex-col items-center mb-8">
            <Form.Item label="Profile Image" name="image">
              <Upload
                listType="picture-circle"
                className="avatar-uploader mt-4"
                beforeUpload={(file) => {
                  const isImage = file.type.startsWith("image/");
                  if (!isImage) {
                    message.error("You can only upload image files!");
                  }
                  return false;
                }}
                maxCount={1}
                fileList={profileFile}
                onChange={handleProfileImage}
              >
                {profileFile.length < 1 && (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            </Form.Item>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            <Form.Item
              label="First Name"
              name="first_name"
              rules={[{ required: true, message: "First Name is required" }]}
            >
              <Input className="py-2.5" placeholder="Enter First Name" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="last_name"
              rules={[{ required: true, message: "Last Name is required" }]}
            >
              <Input className="py-2.5" placeholder="Enter Last Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input className="py-2.5" placeholder="Enter Email" />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Phone number is required" }]}
            >
              <Input className="py-2.5" placeholder="Enter Phone Number" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password className="py-2.5" placeholder="Enter Password" />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Confirm Password is required" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                className="py-2.5"
                placeholder="Enter Confirm Password"
              />
            </Form.Item>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-24 py-5"
            >
              <SaveOutlined className="mr-2" /> Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateNewUser;
