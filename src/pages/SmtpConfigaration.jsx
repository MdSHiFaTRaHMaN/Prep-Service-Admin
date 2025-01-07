import { useForm } from "react-hook-form";
import { Input, Button, message} from "antd";

const SmtpConfigaration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("SMTP Configuration Data: ", data);
    message.success("SMTP Configuration saved successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-center mb-8 text-blue-600">SMTP Configuration</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* SMTP Server */}
            <div>
              <label className="block text-gray-600 mb-1">SMTP Server</label>
              <Input
                {...register("smtpServer", { required: "SMTP Server is required" })}
                placeholder="Enter SMTP Server"
                className={`py-3 rounded-md border-gray-300 ${errors.smtpServer ? "border-red-500" : ""}`}
              />
              {errors.smtpServer && (
                <p className="text-red-500 text-sm">{errors.smtpServer.message}</p>
              )}
            </div>

            {/* SMTP Port */}
            <div>
              <label className="block text-gray-600 mb-1">SMTP Port</label>
              <Input
                {...register("smtpPort", { required: "SMTP Port is required" })}
                placeholder="Enter SMTP Port"
                type="number"
                className={`py-3 rounded-md border-gray-300 ${errors.smtpPort ? "border-red-500" : ""}`}
              />
              {errors.smtpPort && (
                <p className="text-red-500 text-sm">{errors.smtpPort.message}</p>
              )}
            </div>

            {/* SMTP Email */}
            <div>
              <label className="block text-gray-600 mb-1">Email Address</label>
              <Input
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Enter Email Address"
                className={`py-3 rounded-md border-gray-300 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* SMTP Password */}
            <div>
              <label className="block text-gray-600 mb-1">Password</label>
              <Input.Password
                {...register("password", { required: "Password is required" })}
                placeholder="Enter Password"
                className={`py-3 rounded-md border-gray-300 ${errors.password ? "border-red-500" : ""}`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-16 py-4 rounded-lg shadow-lg hover:bg-blue-500 transform transition-all duration-300"
            >
              Save Configuration
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SmtpConfigaration;
