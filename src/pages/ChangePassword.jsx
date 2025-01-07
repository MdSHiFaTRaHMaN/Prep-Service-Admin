import { useForm } from "react-hook-form";
import { Button, Input, message } from "antd";
import { LockOutlined } from "@ant-design/icons";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Watching the new password to validate confirm password field
  const watchNewPassword = watch("newPassword", "");

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    message.success("Password changed successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl p-8 w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Change Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">

            {/* Current Password */}
            <div>
              <label className="block text-gray-600 mb-1">Current Password</label>
              <Input.Password
                prefix={<LockOutlined className="text-gray-500" />}
                placeholder="Enter current password"
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
                className={`border-gray-300 py-3 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.currentPassword ? "border-red-500" : ""
                }`}
              />
              {errors.currentPassword && (
                <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>
              )}
            </div>

            {/* New Password */}
            <div>
              <label className="block text-gray-600 mb-1">New Password</label>
              <Input.Password
                prefix={<LockOutlined className="text-gray-500" />}
                placeholder="Enter new password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className={`border-gray-300 py-3 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.newPassword ? "border-red-500" : ""
                }`}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-600 mb-1">Confirm New Password</label>
              <Input.Password
                prefix={<LockOutlined className="text-gray-500" />}
                placeholder="Confirm new password"
                {...register("confirmPassword", {
                  required: "Please confirm your new password",
                  validate: (value) =>
                    value === watchNewPassword || "Passwords don't match",
                })}
                className={`border-gray-300 py-3 rounded-md focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Save Button */}
            <div className="flex justify-center">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-16 py-4 rounded-lg shadow-lg hover:bg-blue-500 transform transition-all duration-300"
              >
                Change Password
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
