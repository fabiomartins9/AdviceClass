import { useState } from "react";
import { Button } from "antd";
import DeleteDatabase from "@/components/DeleteDataBase";

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log(selectedFile)
      // Captura o caminho do arquivo (no ambiente do navegador, isso pode ser restrito)
      const filePath = selectedFile.name; // Apenas o nome do arquivo
      setFile(filePath);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file first");
      return;
    }

    try {
      // Enviando o caminho do arquivo para a API
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filePath: file }),
      });

      if (res.ok) {
        const result = await res.json();
        setMessage(result.message);
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
        <h1 className="text-2xl font-bold mb-4">Upload Database</h1>
        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="file"
            webkitdirectory="true"
            onChange={handleFileChange}
            className="border border-gray-300 p-2 rounded-md"
          />
          <div className="flex justify-between items-center">
            <Button className="bg-blue-500 text-white" htmlType="submit">
              Upload Path
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
