import { useState } from 'react';

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file first');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (res.ok) {
        setMessage('File uploaded successfully');
      } else {
        const errorMessage = await res.text();
        setMessage(`Error: ${errorMessage}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };
  

  return (
    <div>
      <h1>Upload Database</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadComponent;
