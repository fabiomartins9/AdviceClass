import { useState } from "react";
import { Button } from "antd";
import DeleteDatabase from "@/components/DeleteDataBase";

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file first");
      return;
    }
  
    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const res = await fetch('/.netlify/functions/upload-database', {
          method: 'POST',
          body: reader.result.split(',')[1], // Get base64 content
          headers: {
            'Content-Type': 'application/octet-stream'
          }
        });
  
        if (res.ok) {
          setMessage("File uploaded successfully");
        } else {
          const errorMessage = await res.text();
          setMessage(`Error: ${errorMessage}`);
        }
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center items-center h-screen">
  <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold mb-4">Upload Database</h1>
    <form onSubmit={handleUpload} className="space-y-4">
      <input
        type="file"
        onChange={handleFileChange}
        className="border border-gray-300 p-2 rounded-md"
      />
      <div className="flex justify-between items-center">
        <Button className="bg-blue-500 text-white" htmlType="submit">
          Upload
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
