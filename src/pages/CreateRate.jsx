import React, { useState } from "react";
import { Form, InputNumber, Select, Button, Card, message } from "antd";
import { API } from "../api/api";

const CreateRate = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true); // Start loading when submitting form
    try {
      const response = await API.post("/rate/create", values);
      if (response.status === 200) {
        message.success("Create Rate Successfully");
        form.resetFields(); // Reset form after success
      }
    } catch (error) {
      console.error(error);
      message.error("Something went wrong");
    } finally {
      setLoading(false); // Stop loading after request completes
    }
  };

  return (
    <div className="p-6  flex flex-col items-center">
      <Card className="w-full lg:w-10/12 mx-auto !border-none" title="Create Rate">
        <Form form={form} layout="vertical" className="" onFinish={handleSubmit}>
          <Form.Item
            label="Rate Type"
            name="rate_type"
            rules={[{ required: true, message: "Rate Type is required" }]}
          >
            <Select
              className="h-[42px]"
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
                className="w-full py-1.5"
                placeholder="Enter Start Unit..."
                min={1}
              />
            </Form.Item>

            <Form.Item
              label="End Unit"
              name="end_unit"
              className="w-full"
              rules={[{ required: true, message: "End Unit is required" }]}
            >
              <InputNumber
                className="w-full py-1.5"
                placeholder="Enter End Unit..."
                min={1}
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Rate"
            name="rate"
            rules={[{ required: true, message: "Rate is required" }]}
          >
            <InputNumber className="w-full py-1.5" placeholder="Enter Rate..." step={0.1} min={0} />
          </Form.Item>

          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              {loading ? "Creating..." : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreateRate;
