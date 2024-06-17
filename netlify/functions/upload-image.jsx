const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const filePath = path.join(__dirname, '../../public/uploads/', 'brasao.png');
    fs.writeFileSync(filePath, Buffer.from(event.body, 'base64'));
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Image uploaded successfully' }),
    };
  } catch (error) {
    console.log(`Error: ${error.message}`)
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};
