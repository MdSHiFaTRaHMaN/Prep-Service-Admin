import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Upload,
  message,
  Typography,
  InputNumber,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import { API } from "../api/api";

const { Title } = Typography;

function EditBoxDimention({ inventoryDetails, isOpen, onClose, refetch }) {
  const { control, register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    // Reset form fields when inventoryDetails changes
    if (inventoryDetails) {
      reset({
        box: inventoryDetails.box || "",
        dimension: inventoryDetails.dimension || "",
      });
    }
  }, [inventoryDetails, reset]);

  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await API.put(
        `/inventory/box-dimension/${inventoryDetails?.id}`,
        data
      ); // Updated endpoint

      if (response.status === 200) {
        message.success(`Box & Dimension updated successfully!`);
      }

      refetch();
      onClose(); // Close modal on success
    } catch (error) {
      message.error(`Failed to add Box & Dimension. Try again.`);
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={<Title level={3}>Upload - Box & Dimension</Title>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        {/* Box */}
        <Form.Item label="Box">
          <Controller
            name="box"
            defaultValue={inventoryDetails?.box}
            control={control}
            rules={{ required: "Box is required" }}
            render={({ field }) => (
              <Input placeholder="Enter Box..." {...field} />
            )}
          />
        </Form.Item>

        {/* Dimension */}
        <Form.Item label="Dimension">
          <Controller
            name="dimension"
            defaultValue={inventoryDetails?.dimension}
            control={control}
            rules={{ required: "Dimension is required" }}
            render={({ field }) => (
              <Input placeholder="Enter Dimension..." {...field} />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            style={{ width: "100%" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditBoxDimention;
