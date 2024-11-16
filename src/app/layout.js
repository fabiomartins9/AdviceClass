import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import AuthProvider from "./Context/nextauth";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Advice Class",
  description: "Faça seu conselho de classe de forma simples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>
        <Header/>
        {children}
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
