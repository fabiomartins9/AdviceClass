import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';


// Função para buscar o caminho da imagem do backend
const fetchImage = async () => {
  try {
    const response = await fetch('/api/getImagePath'); // Chama a API para pegar o caminho da imagem
    const data = await response.json();
    
    if (data.success) {
      
      return data.imgBase64;
    } else {
      console.error('Error fetching image path:', data.message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching image path:', error);
    return null;
  }
};


const PdfGenerator = ({ updatedButtonValues, coordenadores, diretores, turma, cabecalho, tipoEnsino, conceitoFinal, disciplinas, date }) => {
  const [imageBase64, setImageBase64] = useState(null);
  const [localUpdateButtonValues, setLocalUpdateButtonValues] = useState(updatedButtonValues);
  
  // useEffect para atualizar localUpdateButtonValues quando updatedButtonValues mudar
  useEffect(() => {
    setLocalUpdateButtonValues(updatedButtonValues);
  }, [updatedButtonValues]);

  

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image64 = await fetchImage(); // Pega o caminho da imagem
        
        if (image64) {
          setImageBase64(image64); // Define o estado da imagem
        }
      } catch (error) {
        console.error('Erro ao carregar a imagem:', error);
      }
    };

    loadImage(); // Carrega a imagem quando o componente é montado
  }, []); // Dependência vazia para garantir que execute apenas uma vez

  const handleGeneratePDF = () => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataTextoFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);
  
    const generatePDFFileName = () => {
      const now = new Date();
      const date = now.toLocaleDateString().replace(/\//g, '-');
      const time = now.toLocaleTimeString().replace(/:/g, '-');
      return `Ata_conselho_${date}_${time}.pdf`;
    };
  
    let nomeEscola = '';
    let bimestre = '';
    let cidade = '';
    let tipoEnsino_parse = '';
  
    if (tipoEnsino) {
      tipoEnsino_parse = tipoEnsino.nome_tipo_ensino;
    }
  
    cabecalho.forEach((item) => {
      nomeEscola = item.nome;
      bimestre = item.bimestre;
      cidade = item.cidade;
    });
  
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: 'a4',
    });
  
    // Configurar fontes e adicionar imagem
    doc.setFont('Arial', 'bold', 20);
  
    if (imageBase64) {
      doc.addImage(imageBase64, 'PNG', 50, 40, 50, 50);
    } else {
      console.error('Imagem não carregada corretamente');
    }
  
    doc.text(`${nomeEscola}`, doc.internal.pageSize.getWidth() / 2, 40, { align: 'center' });
    doc.text(`${cidade}`, doc.internal.pageSize.getWidth() / 2, 70, { align: 'center' });
    doc.text('ATA DO CONSELHO DE CLASSE E SÉRIE', doc.internal.pageSize.getWidth() / 2, 100, { align: 'center' });
  
    if (conceitoFinal) {
      doc.text(`CONCEITO FINAL DE ${anoAtual} - ${tipoEnsino_parse}`, doc.internal.pageSize.getWidth() / 2, 140, { align: 'center' });
      doc.text(` ${turma} -`, doc.internal.pageSize.getWidth() / 2, 160, { align: 'center' });
    } else {
      doc.text(`${bimestre}º BIMESTRE DE ${anoAtual} - ${tipoEnsino_parse}`, doc.internal.pageSize.getWidth() / 2, 140, { align: 'center' });
      doc.text(` ${turma}`, doc.internal.pageSize.getWidth() / 2, 160, { align: 'center' });
    }
  
    doc.setFontSize(12);
    doc.text(`Na data de, ${date}, reuniram-se os Professores e o Coordenador Pedagógico`, doc.internal.pageSize.getWidth() / 2, 180, { align: 'center' });
    doc.text(`para a realização do Conselho de Classe e Série, na forma presencial, com a presença registrada abaixo.`, doc.internal.pageSize.getWidth() / 2, 200, { align: 'center' });
  
    doc.text(`Legendas: NF:  Nota e Falta | N:  Nota abaixo da média | F: Frequência abaixo de 75%  | A: Aprovado | R: Reprovado | AC: Aprovado pelo Conselho`, doc.internal.pageSize.getWidth() / 2, 235, { align: 'center' });
  
    // Criar cabeçalho da tabela
    let columns = ['Nome'];
    if (conceitoFinal) {
      columns = columns.concat(disciplinas);
    } else {
      const disciplines = new Set();
      const students = Object.keys(localUpdateButtonValues);
      for (const student of students) {
        for (const discipline in localUpdateButtonValues[student]) {
          disciplines.add(discipline);
        }
      }
      columns = columns.concat(disciplinas.sort());
    }

    // Log para verificação
    console.log("Colunas geradas:", columns);
    console.log("localUpdateButtonValues:", localUpdateButtonValues);
    
  
    // Criar linhas da tabela com dados dos alunos
    const rows = [];
    const students = Object.keys(localUpdateButtonValues);
    for (const student of students) {
      const row = [student];
      for (const discipline of columns.slice(1)) {
        row.push(localUpdateButtonValues[student][discipline] || '');
      }
      rows.push(row);
    }
  
    // Função para dividir as linhas entre a primeira página e as demais
    const splitRowsByPage = (rows) => {
      const firstPageRows = rows.slice(0, 6); // Primeira página com 4 linhas
      const otherPageRows = rows.slice(8); // Demais linhas
      return [firstPageRows, otherPageRows];
    };
  
    const [firstPageRows, otherPageRows] = splitRowsByPage(rows);
  
    // Adicionar a tabela da primeira página com 4 linhas
    doc.autoTable({
      theme: 'grid',
      startY: 250,
      head: [columns],
      body: firstPageRows,
      styles: {
        fontSize: 7,
        textColor: '#333',
        cellPadding: 5,
        lineColor: '#000',
        valign: 'middle',
      },
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: '#000',
        fontStyle: 'bold',
        halign: 'center',
      },
      columnStyles: {
        0: { fontStyle: 'bold', cellWidth: 'auto', fillColor: [220, 220, 220] },
      },
    });
  
    // Adicionar as páginas seguintes com 6 linhas por página
    let remainingRows = otherPageRows;
    while (remainingRows.length > 0) {
      doc.addPage(); // Nova página
  
      const rowsForThisPage = remainingRows.slice(0, 10);
      remainingRows = remainingRows.slice(15);
  
      doc.autoTable({
        theme: 'grid',
        startY: 50, // Ajuste conforme necessário
        head: [columns],
        body: rowsForThisPage,
        styles: {
          fontSize: 7,
          textColor: '#333',
          cellPadding: 5,
          lineColor: '#000',
          valign: 'middle',
        },
        headStyles: {
          fillColor: [255, 255, 255],
          textColor: '#000',
          fontStyle: 'bold',
          halign: 'center',
        },
        columnStyles: {
          0: { fontStyle: 'bold', cellWidth: 'auto', fillColor: [220, 220, 220] },
        },
      });
    }
  
    // Adicionar uma nova página para as assinaturas
    doc.addPage();
  
    doc.text(`Assinaturas dos professores, coordenação e direção responsáveis pela turma:`, doc.internal.pageSize.getWidth() / 2, 40, { align: 'center' });
    doc.text(` ${turma} - ${tipoEnsino_parse}`, doc.internal.pageSize.getWidth() / 2, 60, { align: 'center' });
  
    doc.setFontSize(10);
    doc.text('PROFESSORES(AS)', 150, 100);
    doc.text('ASSINATURA', 300, 100);
  
    for (let i = 0; i < 20; i++) {
      const lineY = 120 + 10 + i * 15;
      doc.line(100, lineY, 270, lineY); // Linha horizontal para professores
      doc.line(300, lineY, 390, lineY); // Linha horizontal para assinaturas
    }
  
    doc.text(`COORDENAÇÃO: ${coordenadores}`, 500, 100);
    doc.text('______________________', 550, 120);
    doc.text(`DIREÇÃO: ${diretores}`, 500, 170);
    doc.text('______________________', 550, 190);
  
    doc.text(`${bimestre}º BIMESTRE DE ${anoAtual} - ${turma} - ${tipoEnsino_parse}`, doc.internal.pageSize.getWidth() / 2, 570, { align: 'center' });
  
    doc.save(generatePDFFileName());
  };
  

  return (
    <div className="text-center mt-4">
      <button 
        onClick={handleGeneratePDF} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Gerar PDF
      </button>
    </div>
  );
};

export default PdfGenerator;
