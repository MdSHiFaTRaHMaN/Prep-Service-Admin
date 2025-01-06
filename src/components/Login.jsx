import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Logo from "../assets/images/Admin Logo.png";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values.username);

    const token = "sample_token_123456789";

    // Save token and username to localStorage
    localStorage.setItem("token", token); // Save token
    localStorage.setItem("username", values.username); // Save username
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          onFinishFailed={onFinishFailed}
          className="space-y-4"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-500" />}
              placeholder="Username"
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
              htmlType="submit"
              className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... h-12 text-white rounded-md"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
