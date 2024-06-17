import React from 'react';
import{Button} from 'antd'

const DeleteDatabase = () => {
  const handleDelete = async () => {
    const userConfirmed = window.confirm('Você realmente quer apagar o arquivo escola.db?');
  
    if (userConfirmed) {
      try {
        const response = await fetch('/.netlify/functions/delete-database', {
          method: 'DELETE',
        });
  
        const result = await response.json();
  
        if (result.success) {
          alert('Arquivo escola.db deletado com sucesso!');
        } else {
          alert(`Falha ao deletar o arquivo: ${result.message}`);
        }
      } catch (error) {
        console.error('Erro ao deletar o arquivo:', error);
        alert('Ocorreu um erro ao tentar deletar o arquivo.');
      }
    }
  };

  return (
    <div>
      <Button style={{ backgroundColor: '#bf0606', color: '#fff' }} onClick={handleDelete}>Deletar DATABASE</Button>
    </div>
  );
};
export default DeleteDatabase;
