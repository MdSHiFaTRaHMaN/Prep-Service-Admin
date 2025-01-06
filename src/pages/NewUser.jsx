import { useState } from "react";
import { Input, Button, Upload, message } from "antd";
import { CameraOutlined, SaveOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const NewUser = () => {
  const [formData, setFormData] = useState({
    siteName: "",
    copyright: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    logo: null,
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully.`);
      setFormData({ ...formData, logo: info.file.response });
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  const handleSave = () => {
    console.log(formData);
    message.success("NewUser saved successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        {/* Upload Logo */}
        <div className="flex flex-col items-center mb-8">
          <Upload name="logo" showUploadList={false} onChange={handleUpload}>
            <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-200 rounded-full">
              <CameraOutlined className="text-gray-500 text-xl" />
            </div>
          </Upload>
          <p className="text-blue-600 mt-2 cursor-pointer">Upload Logo</p>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First name  */}
          <div>
            <label className="block text-gray-600 mb-1">First Name</label>
            <Input
              variant="filled"
              placeholder="Enter First Name *"
              value={formData.siteName}
              onChange={(e) => handleInputChange("siteName", e.target.value)}
              className="border-gray-300  py-3"
            />
          </div>
          {/* last name  */}
          <div>
            <label className="block text-gray-600 mb-1">Last Name</label>
            <Input
              variant="filled"
              placeholder="Enter Last Name *"
              value={formData.copyright}
              onChange={(e) => handleInputChange("copyright", e.target.value)}
              className="border-gray-300 py-3"
            />
          </div>
          {/* email  */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <Input
              variant="filled"
              placeholder="Enter Email *"
              value={formData.copyright}
              onChange={(e) => handleInputChange("copyright", e.target.value)}
              className="border-gray-300 py-3"
            />
          </div>
          {/* phone  */}
          <div>
            <label className="block text-gray-600 mb-1">Phone</label>
            <Input
              variant="filled"
              placeholder="Enter Phone *"
              value={formData.copyright}
              onChange={(e) => handleInputChange("copyright", e.target.value)}
              className="border-gray-300 py-3"
            />
          </div>
          {/* password  */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <Input
              variant="filled"
              placeholder="Enter Password *"
              value={formData.copyright}
              onChange={(e) => handleInputChange("copyright", e.target.value)}
              className="border-gray-300 py-3"
            />
          </div>
          {/* confirm password  */}
          <div>
            <label className="block text-gray-600 mb-1">Confirm Password</label>
            <Input
              variant="filled"
              placeholder="Enter Confirm Password *"
              value={formData.copyright}
              onChange={(e) => handleInputChange("copyright", e.target.value)}
              className="border-gray-300 py-3"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <Button
            type="primary"
            size="large"
            onClick={handleSave}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 ... px-24 py-5"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
