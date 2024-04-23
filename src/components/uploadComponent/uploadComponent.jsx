import { useState } from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const XLSXUploader = () => {
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);

  // Função para lidar com a seleção de arquivo
  const handleFileChange1 = (info) => {
    if (info.file.status === 'done') {
      setSelectedFile1(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      console.error('Erro ao carregar o arquivo 1');
    }
  };

  const handleFileChange2 = (info) => {
    if (info.file.status === 'done') {
      setSelectedFile2(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      console.error('Erro ao carregar o arquivo 2');
    }
  };

  // Função para lidar com o envio do arquivo
  const handleFileUpload = async () => {
    if (!selectedFile1 || !selectedFile2) {
      console.error('Dois arquivos devem ser selecionados');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('xlsxFile1', selectedFile1);
      formData.append('xlsxFile2', selectedFile2);

      console.log("fomdata: ", formData)

      const response = await fetch('/api/converter', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao processar os arquivos');
      }

      const jsonData = await response.json();
      console.log('Dados JSON retornados:', jsonData);

      // Aqui você pode fazer o que quiser com os dados JSON retornados

    } catch (error) {
      console.error('Erro ao enviar os arquivos:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <Upload onChange={handleFileChange1}>
          <Button icon={<UploadOutlined />}>Selecionar Arquivo 1</Button>
        </Upload>
      </div>
      <div className="mb-4">
        <Upload onChange={handleFileChange2}>
          <Button icon={<UploadOutlined />}>Selecionar Arquivo 2</Button>
        </Upload>
      </div>
      <div>
        <Button type="primary" onClick={handleFileUpload}>Importar</Button>
      </div>
    </div>
  );
};

export default XLSXUploader;
