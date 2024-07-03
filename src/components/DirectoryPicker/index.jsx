import { useState } from "react";
import { Button } from "antd";
import DeleteDatabase from "@/components/DeleteDataBase";

const UploadComponent = () => {
  const [path, setPath] = useState("");
  const [message, setMessage] = useState("");

  const handlePathChange = (e) => {
    setPath(e.target.value);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!path) {
      setMessage("Please enter a database path first");
      return;
    }

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path }),
      });

      if (res.ok) {
        setMessage("Database path set successfully");
      } else {
        const errorMessage = await res.text();
        setMessage(`Error: ${errorMessage}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Set Database Path</h1>
        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="text"
            value={path}
            onChange={handlePathChange}
            placeholder="Enter database path"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          <div className="flex justify-between items-center">
            <Button className="bg-blue-500 text-white" htmlType="submit">
              Set Path
            </Button>
            <DeleteDatabase />
          </div>
          {message && <p className="text-sm text-gray-600">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default UploadComponent;
