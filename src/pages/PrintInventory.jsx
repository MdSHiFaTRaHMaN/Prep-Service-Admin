import { Button } from "antd";

const PrintInventory = () => {
  const invoiceData = {
    key: "3",
    date: "01/01/2024",
    name: "Afran Nishu",
    image: "https://i.ibb.co/fd31Gdx/strawberry.jpg",
    transaction: "101-00979",
    type: "FBM",
    quantity: 1,
    status: "Pending",
    amount: "34,295",
  };

  const handlePrint = () => {
    window.print(); // Trigger browser print functionality
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg min-h-screen mx-auto mt-10">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Invoice</h1>
          <p className="text-sm text-gray-500">Transaction ID: {invoiceData.transaction}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Date: {invoiceData.date}</p>
          <p className="text-sm text-gray-500">Status: 
            <span
              className={`ml-1 px-2 py-1 rounded ${
                invoiceData.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"
              }`}
            >
              {invoiceData.status}
            </span>
          </p>
        </div>
      </div>

      {/* User Details */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={invoiceData.image}
          alt={invoiceData.name}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{invoiceData.name}</h2>
          <p className="text-sm text-gray-500">Invoice Type: {invoiceData.type}</p>
        </div>
      </div>

      {/* Transaction Details */}
      <table className="table-auto w-full text-left border border-gray-200 mb-6">
        <thead>
          <tr className="bg-gray-100 text-gray-800">
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Quantity</th>
            <th className="px-4 py-2 border">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Order Payment</td>
            <td className="px-4 py-2 border">{invoiceData.quantity}</td>
            <td className="px-4 py-2 border">{invoiceData.amount} ৳</td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">Thank you for your business!</p>
        <Button
          type="primary"
          className="bg-blue-500 hover:bg-blue-600 text-white"
          onClick={handlePrint}
        >
          Print Invoice
        </Button>
      </div>
    </div>
  );
};

export default PrintInventory;
