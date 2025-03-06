import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import Logo from "../assets/images/Admin Logo.png";
import { useState } from "react";
import { API } from "../api/api";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async(values) => {
    setLoading(true); // Start loading when submitting form
    try {
      const response = await API.post("/admin/login", {
        email: values.email,
        password: values.password,
      });

      // If successful, save the token in localStorage
      localStorage.setItem("token", response.data.data.token);

      // Show success message
      message.success("Login successful!");

      // Redirect to the admin dashboard (replace with your route)
      window.location.href = "/";
    } catch (error) {
      // Show error message
      message.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false); // Stop loading after request
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <img src={Logo} alt="" width={200} className="mx-auto" />
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-500" />}
              placeholder="Email"
              className="h-12"
              name="username"
              variant="filled"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-500" />}
              placeholder="Password"
              className="h-12"
              name="password"
              variant="filled"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              loading={loading}
              htmlType="submit"
              className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... h-12 text-white rounded-md"
            >
               {loading ? "Logging in..." : "Login"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
