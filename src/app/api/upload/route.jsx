import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.resolve(
  process.env.ROOT_PATH || "",
  "public",
  "uploads"
);

const FILE_NAME = 'escola.db';

export const POST = async (req) => {
  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const file = body.file || null;

  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR);
    }

    fs.writeFileSync(path.resolve(UPLOAD_DIR, FILE_NAME), buffer);
  } else {
    return NextResponse.json({
      success: false,
    });
  }

  return NextResponse.json({
    success: true,
    name: FILE_NAME,
  });
};

export const DELETE = async (req) => {
  const filePath = path.resolve(UPLOAD_DIR, FILE_NAME);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({
      success: false,
      message: "File not found",
    });
  }

  fs.unlinkSync(filePath);

  return NextResponse.json({
    success: true,
    message: `File ${FILE_NAME} deleted`,
  });
};
