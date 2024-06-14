import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH || '', 'public', 'uploadImg');
const FILE_NAME = 'brasao.png';

export const POST = async (req) => {
  try {
    // Verificar se o request body é um FormData
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({
        success: false,
        message: 'Invalid content type. Expected multipart/form-data.',
      });
    }

    const formData = await req.formData();
    const file = formData.get('image'); // Mudança aqui para 'image'

    if (!file) {
      return NextResponse.json({
        success: false,
        message: 'No file uploaded.',
      });
    }

    const fileType = file.type;
    if (fileType !== 'image/png') {
      return NextResponse.json({
        success: false,
        message: 'File is not a PNG image.',
      });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }

    const filePath = path.resolve(UPLOAD_DIR, FILE_NAME);
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({
      success: true,
      name: FILE_NAME,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while uploading the file.',
    });
  }
};

export const DELETE = async () => {
  try {
    const filePath = path.resolve(UPLOAD_DIR, FILE_NAME);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return NextResponse.json({
        success: true,
        message: 'File deleted successfully.',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'File does not exist.',
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: 'An error occurred while deleting the file.',
    });
  }
};
