// ExcelToEditableJSON
import React, { useState } from "react";
import * as XLSX from "xlsx";

const ExcelToEditableJSON = () => {
  const [jsonData, setJsonData] = useState([]);
  const [error, setError] = useState("");
  const [editingPath, setEditingPath] = useState(null);
  const [newValue, setNewValue] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      readExcelFile(file);
    }
  };

  const readExcelFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });

      const sheetName = workbook.SheetNames[0]; // Read the first sheet
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      if (sheetData.length === 0) {
        setError("The Excel sheet is empty or cannot be parsed.");
        return;
      }

      setJsonData(sheetData);
      setError("");
    };

    reader.onerror = () => {
      setError("Failed to read the file. Please upload a valid Excel file.");
    };

    reader.readAsBinaryString(file);
  };

  const handleEdit = (path) => {
    setEditingPath(path);
    setNewValue(getValueAtPath(jsonData, path));
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleSave = () => {
    const updatedData = updateValueAtPath(jsonData, editingPath, newValue);
    setJsonData(updatedData);
    setEditingPath(null);
  };

  const handleDelete = (path) => {
    const updatedData = deleteValueAtPath(jsonData, path);
    setJsonData(updatedData);
  };

  const handleAddObject = (path) => {
    const updatedData = addValueAtPath(jsonData, path, {});
    setJsonData(updatedData);
  };

  const handleAddArray = (path) => {
    const updatedData = addValueAtPath(jsonData, path, []);
    setJsonData(updatedData);
  };

  const handleDownloadJSON = () => {
    const jsonBlob = new Blob([JSON.stringify(jsonData, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(jsonBlob);
    link.download = "editable-json-data.json";
    link.click();
  };

  const getValueAtPath = (obj, path) =>
    path.reduce(
      (acc, key) => (acc && acc[key] !== undefined ? acc[key] : null),
      obj
    );

  const updateValueAtPath = (obj, path, value) => {
    const updatedObj = JSON.parse(JSON.stringify(obj)); // Deep copy
    const lastKey = path.pop();
    const parent = getValueAtPath(updatedObj, path);
    if (parent && lastKey !== undefined) {
      parent[lastKey] = JSON.parse(value);
    }
    return updatedObj;
  };

  const deleteValueAtPath = (obj, path) => {
    const updatedObj = JSON.parse(JSON.stringify(obj)); // Deep copy
    const lastKey = path.pop();
    const parent = getValueAtPath(updatedObj, path);
    if (parent && lastKey !== undefined) {
      delete parent[lastKey];
    }
    return updatedObj;
  };

  const addValueAtPath = (obj, path, value) => {
    const updatedObj = JSON.parse(JSON.stringify(obj)); // Deep copy
    const parent = getValueAtPath(updatedObj, path);
    if (parent) {
      if (Array.isArray(parent)) {
        parent.push(value);
      } else {
        parent[`newKey_${Object.keys(parent).length}`] = value;
      }
    }
    return updatedObj;
  };

  const renderJSON = (data, path = []) =>
    typeof data === "object" && data !== null ? (
      Array.isArray(data) ? (
        <>
          <span className="text-blue-500">[</span>
          <div className="ml-4">
            {data.map((item, index) => (
              <div key={index}>
                {renderJSON(item, [...path, index])}
                <button
                  onClick={() => handleAddObject([...path, index])}
                  className="text-green-500 ml-2"
                >
                  +{}
                </button>
                <button
                  onClick={() => handleAddArray([...path, index])}
                  className="text-green-500 ml-2"
                >
                  +[]
                </button>
                <button
                  onClick={() => handleDelete([...path, index])}
                  className="text-red-500 ml-2"
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <span className="text-blue-500">]</span>
        </>
      ) : (
        <>
          <span className="text-purple-500">&#123;</span>
          <div className="ml-4">
            {Object.entries(data).map(([key, value]) => (
              <div key={key}>
                <span className="text-gray-700">{key}:</span>{" "}
                {renderJSON(value, [...path, key])}
                <button
                  onClick={() => handleDelete([...path, key])}
                  className="text-red-500 ml-2"
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <span className="text-purple-500">&#125;</span>
        </>
      )
    ) : editingPath && JSON.stringify(path) === JSON.stringify(editingPath) ? (
      <>
        <input
          value={newValue}
          onChange={handleChange}
          onBlur={handleSave}
          className="border border-gray-300 rounded-md px-2 py-1"
        />
      </>
    ) : (
      <span
        onClick={() => handleEdit(path)}
        className="text-gray-800 cursor-pointer"
      >
        {JSON.stringify(data)}
      </span>
    );

  return (
    <div className="flex flex-col mt-[50px] items-center min-h-screen py-10 bg-gradient-to-br from-indigo-100 via-white to-indigo-300">
      {/* Upload Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Excel to Editable JSON with Delete Option
        </h1>
        <input
          type="file"
          onChange={handleFileUpload}
          accept=".xlsx, .xls"
          className="mb-4 px-6 py-3 bg-indigo-500 text-white rounded-md cursor-pointer hover:bg-indigo-600 transition w-full"
        />
        <p className="text-sm text-gray-500 text-center">
          Upload an Excel file (.xlsx or .xls) to convert and edit.
        </p>

        {jsonData.length > 0 && (
          <button
            onClick={handleDownloadJSON}
            className="w-full px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition mt-4"
          >
            Download Edited JSON
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md w-11/12 md:w-1/2 text-center mt-4">
          <p>{error}</p>
        </div>
      )}

      {/* JSON Data Preview */}
      {jsonData.length > 0 && (
        <div className="mt-6 bg-white shadow-lg rounded-lg p-4 w-11/12 md:w-3/4 overflow-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Editable JSON Preview
          </h2>
          <div className="ml-4">{renderJSON(jsonData)}</div>
        </div>
      )}
    </div>
  );
};

export default ExcelToEditableJSON;
