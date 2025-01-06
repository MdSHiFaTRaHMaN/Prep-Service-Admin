import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const ManegeRates = () => {
  const [rows, setRows] = useState([{ units: "", rate: "" }]);

  const handleAddRow = () => {
    setRows([...rows, { units: "", rate: "" }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full">
        <h1 className="text-xl font-bold mb-4">Select Rate</h1>
        <select className="w-full p-2 mb-4 border rounded-md">
          <option>Select Rate</option>
          <option>Rate 1</option>
          <option>Rate 2</option>
        </select>

        {rows.map((row, index) => (
          <div key={index} className="flex items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Add FBA Units"
              className="w-full p-2 border rounded-md"
              value={row.units}
              onChange={(e) =>
                handleInputChange(index, "units", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Add FBA Rate"
              className="w-full p-2 border rounded-md"
              value={row.rate}
              onChange={(e) => handleInputChange(index, "rate", e.target.value)}
            />
            <button
              onClick={handleAddRow}
              className="p-2 bg-orange-300 rounded-md flex items-center justify-center"
            >
              <PlusOutlined />
            </button>
            {rows.length > 1 && (
              <button
                onClick={() => handleRemoveRow(index)}
                className="p-2 bg-red-500 text-white rounded-md flex items-center justify-center"
              >
                <MinusOutlined />
              </button>
            )}
          </div>
        ))}
        <div className="w-3/6 mx-auto">
          <button
            className="w-full p-3 bg-gradient-to-r from-cyan-500 to-blue-500 ... text-white font-bold rounded-md hover:bg-gradient-to-r hover:from-indigo-500 from-10% via-sky-500 via-30% hover:to-emerald-500 to-90% ... "
          >
            Add New
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManegeRates;
