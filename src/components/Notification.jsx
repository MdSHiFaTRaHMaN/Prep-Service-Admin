import { Drawer, List, Avatar, Badge, Space, Typography } from "antd";
import UserIMG from "../assets/images/UserIMG.png"
const { Text } = Typography;

const Notification = ({ onClose, open }) => {
  // Mock order data
  const orders = [
    {
      id: "T12345",
      customer: "John Doe",
      date: "2025-01-05",
      status: "Pending",
      avatar: UserIMG,
    },
    {
      id: "T67890",
      customer: "Jane Smith",
      date: "2025-01-06",
      status: "Delivered",
      avatar: UserIMG,
    },
    {
      id: "T98765",
      customer: "Robert Brown",
      date: "2025-01-07",
      status: "Out of Stock",
      avatar: UserIMG,
    },
  ];

  // Status colors
  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return <Badge color="orange" text={status} />;
      case "Delivered":
        return <Badge color="green" text={status} />;
      case "Out of Stock":
        return <Badge color="red" text={status} />;
      default:
        return <Badge color="blue" text={status} />;
    }
  };

  return (
    <Drawer
      title="Order Notifications"
      placement="right"
      onClose={onClose}
      open={open}
      width={350}
    >
      <List
        itemLayout="horizontal"
        dataSource={orders}
        renderItem={(order) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={order.avatar}  className="bg-gray-200"/>}
              title={
                <Space>
                  <Text strong>Order ID:</Text> {order.id}
                </Space>
              }
              description={
                <div>
                  <Text>Customer: {order.customer}</Text>
                  <br />
                  <Text>Order Date: {order.date}</Text>
                </div>
              }
            />
            {getStatusBadge(order.status)}
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default Notification;
