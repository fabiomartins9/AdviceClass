import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const imageUrl = '/uploadImg/brasao.png'; // Caminho relativo ajustado

function DeteAtual() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataTextoFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);
  return {
    anoAtual: anoAtual,
    dataTextoFormatada: dataTextoFormatada,
  };
}

let dateAtual = DeteAtual();

const generatePDFFileName = () => {
  const now = new Date();
  const date = now.toLocaleDateString().replace(/\//g, '-');
  const time = now.toLocaleTimeString().replace(/:/g, '-');
  return `Ata_conselho_${date}_${time}.pdf`;
};

const fetchImageAsBase64 = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = 'Anonymous'; // Pode ser necessário se a imagem não estiver no mesmo domínio

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      resolve(canvas.toDataURL('image/png'));
    };

    img.onerror = (err) => reject(err);
  });
};

const PdfGenerator = ({ updatedButtonValues, coordenadores, diretores, turma, cabecalho, tipoEnsino, conceitoFinal, disciplinas }) => {
  const [imageBase64, setImageBase64] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const base64 = await fetchImageAsBase64(imageUrl);
        setImageBase64(base64);
      } catch (error) {
        console.error('Erro ao carregar a imagem:', error);
      }
    };

    loadImage();
  }, []);

  const handleGeneratePDF = () => {
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
      orientation: 'landscape', // Orientação da página
      unit: 'pt', // Unidade de medida
      format: 'a4', // Formato da página
    });

    // Configurar fontes
    doc.setFont('Arial', 'bold', 20);

    // Adicionar a imagem ao PDF (caso esteja carregada)
    if (imageBase64) {
      doc.addImage(imageBase64, 'PNG', 50, 40, 50, 50); // Ajuste as coordenadas e tamanho conforme necessário
    } else {
      console.error('Imagem não carregada corretamente');
    }

    console.log("tipoEnsino_parse: ", tipoEnsino_parse)
    console.log("CONCEITOfINAL: ", conceitoFinal)

    // Adicionar cabeçalho
    doc.text(`${nomeEscola}`, doc.internal.pageSize.getWidth() / 2, 40, { align: 'center' });
    doc.text(`${cidade}`, doc.internal.pageSize.getWidth() / 2, 70, { align: 'center' });
    doc.text('ATA DO CONSELHO DE CLASSE E SÉRIE', doc.internal.pageSize.getWidth() / 2, 100, { align: 'center' });

    if(conceitoFinal==true){
      doc.text(`CONCEITO FINAL DE ${dateAtual.anoAtual} - ${turma} - ${tipoEnsino_parse}`, doc.internal.pageSize.getWidth() / 2, 140, { align: 'center' });
    }
    else{
      doc.text(`${bimestre}º BIMESTRE DE ${dateAtual.anoAtual} - ${turma} - ${tipoEnsino_parse}`, doc.internal.pageSize.getWidth() / 2, 140, { align: 'center' });
    }

    doc.setFontSize(12);
    doc.text(`Na data de, ${dateAtual.dataTextoFormatada}, reuniram-se os Professores e o Coordenador Pedagógico`, doc.internal.pageSize.getWidth() / 2, 180, { align: 'center' });
    doc.text(`para a realização do Conselho de Classe e Série, na forma presencial, com a presença registrada abaixo.`, doc.internal.pageSize.getWidth() / 2, 200, { align: 'center' });

    doc.text(`Legendas: NF:  Nota e Falta | N:  Nota abaixo da média | F: Frequência abaixo de 75%  | A: Aprovado | R: Reprovado | AC: Aprovado pelo Conselho`, doc.internal.pageSize.getWidth() / 2, 235, { align: 'center' });

    // Criar cabeçalho da tabela
    let columns = ['Nome'];
    if (conceitoFinal) {
      // Disciplinas fixas fornecidas pela props
      columns = columns.concat(disciplinas);
    } else {
      // Extrair nomes de disciplinas de updatedButtonValues
      const disciplines = new Set();
      const students = Object.keys(updatedButtonValues);
      for (const student of students) {
        for (const discipline in updatedButtonValues[student]) {
          disciplines.add(discipline);
        }
      }
      columns = columns.concat([...disciplines].sort());
    }

    // Criar linhas da tabela com dados dos alunos
    const rows = [];
    const students = Object.keys(updatedButtonValues);
    for (const student of students) {
      const row = [student];
      for (const discipline of columns.slice(1)) {
        row.push(updatedButtonValues[student][discipline] || '');
      }
      rows.push(row);
    }

    // Gerar a tabela com jspdf-autotable
    doc.autoTable({
      theme: 'grid',
      startY: 250, // Posição inicial da tabela
      head: [columns],
      body: rows,
      styles: {
        fontSize: 9,
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
        0: { fontStyle: 'bold', cellWidth: 'auto', fillColor: [220, 220, 220] }, // Ajustando a largura da primeira coluna
      },
    });

    // Adicionar uma nova página para as assinaturas
    doc.addPage();

    doc.text(`Assinaturas dos professores, coordenação e direção responsáveis pela turma: ${turma} - ${tipoEnsino_parse}`, doc.internal.pageSize.getWidth() / 2, 40, { align: 'center' });

    doc.setFontSize(10);
    doc.text('PROFESSORES(AS)', 100, 80);
    doc.text('ASSINATURA', 300, 80);

    // Adicionar linhas
    for (let i = 0; i < 30; i++) {
      const lineY = 90 + 10 + i * 15;
      doc.line(100, lineY, 270, lineY); // Linha horizontal para professores
      doc.line(300, lineY, 390, lineY); // Linha horizontal para assinaturas
    }

    // Adicionar espaços para as assinaturas do coordenador e da direção
    doc.text(`COORDENAÇÃO: ${coordenadores}`, 500, 80);
    doc.text('______________________', 550, 100);
    doc.text(`DIREÇÃO: ${diretores}`, 500, 150);
    doc.text('______________________', 550, 170);

    doc.text(`${bimestre}º BIMESTRE DE ${dateAtual.anoAtual} - ${turma} - ${tipoEnsino_parse}`, doc.internal.pageSize.getWidth() / 2, 570, { align: 'center' });

    // Salvar o documento
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
