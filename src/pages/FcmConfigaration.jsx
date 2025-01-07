import { useForm } from "react-hook-form";
import { Input, Button, message } from "antd";

const FcmConfigaration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("FCM Configuration Data: ", data);
    message.success("FCM Configuration saved successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl">
        {/* FCM Configuration Form */}
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-8">FCM Configuration</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* FCM API Key */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">FCM API Key</label>
            <Input
              placeholder="Enter FCM API Key"
              {...register("apiKey", {
                required: "FCM API Key is required",
              })}
              className={`w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.apiKey ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.apiKey && (
              <p className="text-red-500 text-sm">{errors.apiKey.message}</p>
            )}
          </div>

          {/* Sender ID */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">FCM Sender ID</label>
            <Input
              placeholder="Enter FCM Sender ID"
              {...register("senderId", {
                required: "FCM Sender ID is required",
              })}
              className={`w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.senderId ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.senderId && (
              <p className="text-red-500 text-sm">{errors.senderId.message}</p>
            )}
          </div>

          {/* Messaging Options */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Message Options</label>
            <Input
              placeholder="Enter FCM Messaging Options"
              {...register("messageOptions", {
                required: "Messaging options are required",
              })}
              className={`w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.messageOptions ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.messageOptions && (
              <p className="text-red-500 text-sm">{errors.messageOptions.message}</p>
            )}
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 py-3 rounded-lg text-white shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              Save Configuration
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FcmConfigaration;
