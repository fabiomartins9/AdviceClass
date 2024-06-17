const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod !== 'DELETE') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const filePath = path.join(__dirname, '../../public/uploads/', 'brasao.png');
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Image deleted successfully' }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'File not found' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};
