import { useState } from "react";
import { Button, Modal, Form, Select, InputNumber, message } from "antd";
import { API, useSingleRate } from "../../api/api";
import { EditOutlined } from "@ant-design/icons";

const EditRateModel = ({ rateId }) => {
  const { singleRate, refetch } = useSingleRate(rateId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  console.log(singleRate, "rate")

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      console.log("Updated Rate Data:", values);
      const response = await API.post(`/rate/update/${rateId}`, values);
      console.log(response)
      if (response.status === 200) {
        message.success("Create Rate Successfully");
        refetch();
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating rate:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title="Edit Rate"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            rate_type: singleRate?.rate_type,
            start_unit: singleRate?.start_unit,
            end_unit: singleRate?.end_unit,
            rate: singleRate?.rate
          }}
        >
          <Form.Item
            label="Rate Type"
            name="rate_type"
            rules={[{ required: true, message: "Rate Type is required" }]}
          >
            <Select
              options={[
                { value: "Misc", label: "Misc" },
                { value: "FBA", label: "FBA" },
                { value: "FBM", label: "FBM" },
              ]}
              placeholder="Select Rate Type"
            />
          </Form.Item>

          <div className="flex gap-6 w-full">
            <Form.Item
              label="Start Unit"
              name="start_unit"
              className="w-full"
              rules={[{ required: true, message: "Start Unit is required" }]}
            >
              <InputNumber
                className="w-full"
                min={1}
                placeholder="Enter Start Unit..."
              />
            </Form.Item>

            <Form.Item
              label="End Unit"
              name="end_unit"
              className="w-full"
              rules={[{ required: true, message: "End Unit is required" }]}
            >
              <InputNumber
                className="w-full"
                min={1}
                placeholder="Enter End Unit..."
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Rate"
            name="rate"
            rules={[{ required: true, message: "Rate is required" }]}
          >
            <InputNumber
              className="w-full"
              step={0.1}
              min={0}
              placeholder="Enter Rate..."
            />
          </Form.Item>

          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              {loading ? "Updating..." : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EditRateModel;
