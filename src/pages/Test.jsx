// // Over view
// <div className="bg-white shadow-md rounded-lg p-6">
// <div className="flex items-center justify-between">
//   <h3 className="text-xl font-semibold mb-4">Deals Details</h3>

//   {/* Filters */}
//   <div className="bg-white rounded-lg mb-6">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div>
//         <label className="block text-gray-600 mb-1">Select Type</label>
//         <Select
//           placeholder="Select a type"
//           className="w-full"
//           options={[
//             { value: "padding", label: "Padding" },
//             { value: "delivered", label: "Delivered" },
//             { value: "out of stock", label: "Out of Stock" },
//           ]}
//         />
//       </div>
//       <div>
//         <label className="block text-gray-600 mb-1">
//           Select Date Range
//         </label>
//         <RangePicker className="w-full" />
//       </div>
//       <div className="flex items-end">
//         <Button
//           type="primary"
//           icon={<FilterOutlined />}
//           className="w-full bg-green-600"
//         >
//           Apply Filters
//         </Button>
//       </div>
//     </div>
//   </div>
// </div>
// <Table
//   dataSource={dataSource}
//   columns={columns}
//   pagination={{
//     pageSize: 5, // Items per page
//     showSizeChanger: true, // Allow user to change page size
//     pageSizeOptions: ["5", "10", "20"], // Options for page size
//   }}
//   className="custom-table"
// />
// </div>
