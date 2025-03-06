import { useState } from "react";
import {
  Avatar,
  Card,
  Descriptions,
  Button,
  Modal,
  Form,
  Input,
  message,
} from "antd";
import { useAdminProfile } from "../api/api";

const AdminProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { adminProfile, isLoading, isError, error, refetch } = useAdminProfile();


  const showEditModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFinish = (values) => {
    console.log(values)
    setIsModalOpen(false);
    message.success("Admin Profile Update Successfully");
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Profile Card */}
      <Card
        title="Admin Profile"
        bordered={false}
        style={{ maxWidth: 600, margin: "0 auto" }}
        actions={[
          <Button type="primary" onClick={showEditModal}>
            Edit Profile
          </Button>,
        ]}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Avatar size={100} style={{ backgroundColor: "#87d068" }}>
            {adminProfile.name?.charAt(0) || "A"}
          </Avatar>
        </div>
        <Descriptions column={1} bordered>
          <Descriptions.Item label="Name">{adminProfile.first_name} {adminProfile.last_name}</Descriptions.Item>
          <Descriptions.Item label="Email">{adminProfile.email}</Descriptions.Item>
          <Descriptions.Item label="Role">{adminProfile.role}</Descriptions.Item>
        </Descriptions>
      </Card>

      {/* Edit Profile Modal */}
      <Modal
        title="Edit Profile"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          initialValues={adminProfile}
          onFinish={handleFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProfile;
