// api/getImageAndSave.js
import fs from 'fs';
import path from 'path';

import { NextResponse } from 'next/server';


export const GET = async () => {
  try {
    
    const imagePath = process.env.PATH_IMG; // Caminho da imagem no .ini

    if (!imagePath) {
      return NextResponse.json({
        success: false,
        message: 'Image path is not defined in .ENV.',
      });
    }

    // 2. Converter a imagem para base64
    const imgData = fs.readFileSync(imagePath); // Leitura do arquivo de imagem
    const imgBase64 = Buffer.from(imgData).toString('base64');

    const imgNome = path.basename(imagePath); // Nome da imagem



    // 8. Retornar a string base64 da imagem recém-inserida
    return NextResponse.json({
      success: true,
      message: 'Imagem convertida.',
      imgBase64, // Retornar a string base64
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      success: false,
      message: 'Ocorreu um erro durante a operação.',
    });
  }
};
