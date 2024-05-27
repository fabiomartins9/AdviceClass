import React, { useState } from 'react';
import { Button, message } from 'antd';

export default function DirectoryPicker() {
  const [fileNames, setFileNames] = useState([]);

  async function handlePastaSelecionada(event) {
    const files = event.target.files;
    const extractedNames = [];
  
    for (let i = 0; i < files.length; i++) {
      const fileName = files[i].name.replace(/\.[^/.]+$/, ''); // Remove a extensão do nome do arquivo
      extractedNames.push(fileName);
    }
  
    setFileNames(extractedNames);
    
    // Enviando os nomes dos arquivos para a API
    console.log('Dados enviados para a API:', extractedNames); // Apenas para verificar o que está sendo enviado
  
    try {
      const response = await fetch('/api/importador/turma', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(extractedNames), // Envie a array de strings diretamente
      });
  
      if (response.ok) {
        message.success('Nomes dos arquivos inseridos com sucesso na tabela turma.');
      } else {
        message.error('Erro ao inserir os nomes dos arquivos na tabela turma.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição para a API:', error);
      message.error('Erro ao conectar-se à API.');
    }
  }
  

  return (
    <div>
      <h2>Selecione uma pasta</h2>
      <input
        type="file"
        directory=""
        webkitdirectory=""
        onChange={handlePastaSelecionada}
      />
      <ul>
        {fileNames.map((fileName, index) => (
          <li key={index}>{fileName}</li>
        ))}
      </ul>
    </div>
  );
}
