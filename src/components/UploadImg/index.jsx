import { useState } from 'react';
import { Button } from 'antd';

const UploadImgForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!selectedFile) {
      setMessage("Nenhum arquivo selecionado.");
      return;
    }

    if (!selectedFile.type.startsWith('image/')) {
      setMessage("Por favor, selecione um arquivo de imagem.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('/api/uploadImg', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer upload da imagem.");
      }

      const result = await response.json();
      setMessage(result.message || "Imagem carregada com sucesso.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleDeleteImage = async () => {
    try {
      const response = await fetch('/api/uploadImg', {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar a imagem.");
      }

      const result = await response.json();
      setMessage(result.message || "Imagem deletada com sucesso.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Upload Imagem PNG ATA</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            className="border border-gray-300 p-2 rounded-md"
          />
      <div className="flex justify-between items-center">

          <Button className="bg-green-600 text-white cursor-pointer" htmlType="submit">
            Upload
          </Button>          
            <Button 
              className="bg-red-600 text-white cursor-pointer" 
              onClick={handleDeleteImage}
            >
              Deletar Imagem
            </Button>
          </div>
          {message && <p className="text-sm text-gray-600">{message}</p>}
        </form>
      </div>
    </div>
  );
  
};

export default UploadImgForm;
