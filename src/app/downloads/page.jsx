export default function DowloadPage() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
   
      <h1 className="text-4xl font-bold">
        <span className="text-blue-500">Advice</span>
        <span className="text-black">Class</span>
      </h1>
      <p className="text-lg mt-4">Seu sistema para o conselho de classes</p>
      
      <a 
        href="https://drive.google.com/file/d/1NAIDn-G-9Tc2Y4TzZeWIAGV7pYY-YsKq/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 underline mt-4"
      >
        Modelos de tabelas
      </a>
      <a 
        href="https://drive.google.com/file/d/1W4f2ndNl6kAIbaenvrDZJPEPE2tcjxS3/view?usp=drive_link" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 underline mt-4"
      >
       Importador AdviceClass
      </a>
    </div>
  );
}
