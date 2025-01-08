import React, { useState } from "react";
import { Avatar, Card, Descriptions, Button, Modal, Form, Input, message } from "antd";

const AdminProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminInfo, setAdminInfo] = useState({
    name: "MD SHiFaT RaHMaN",
    email: "admin@example.com",
    phone: "123-456-7890",
    role: "Administrator",
    address: "123 Admin St, City, Country",
  });

  const showEditModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFinish = (values) => {
    setAdminInfo({ ...adminInfo, ...values });
    setIsModalOpen(false);
    message.success("Admin Profile Update Successfully")
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
            {adminInfo.name?.charAt(0) || "A"}
          </Avatar>
        </div>
        <Descriptions column={1} bordered>
          <Descriptions.Item label="Name">{adminInfo.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{adminInfo.email}</Descriptions.Item>
          <Descriptions.Item label="Phone">{adminInfo.phone}</Descriptions.Item>
          <Descriptions.Item label="Role">{adminInfo.role}</Descriptions.Item>
          <Descriptions.Item label="Address">
            {adminInfo.address}
          </Descriptions.Item>
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
          initialValues={adminInfo}
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
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
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
