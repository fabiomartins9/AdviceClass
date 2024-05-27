// PdfComponents.js

"use client"
import React from "react";
import { PDFDownloadLink, Document, Page, Text, View } from "@react-pdf/renderer";

export const PdfDocument = ({ data }) => (
  <Document>
    <Page>
      {data.map((aluno, index) => (
        <View key={index}>
          <Text>Nome: {aluno.nome}</Text>
          {Object.keys(aluno.disciplinas).map((disciplina, idx) => (
            <Text key={idx}>
              {disciplina}: {aluno.disciplinas[disciplina]}
            </Text>
          ))}
        </View>
      ))}
    </Page>
  </Document>
);

export const DownloadPdfButton = ({ data }) => {
  return (
    <PDFDownloadLink
      document={<PdfDocument data={data} />}
      fileName="alunos_disciplinas.pdf"
    >
      {({ loading }) => (loading ? "Gerando PDF..." : "Baixar PDF")}
    </PDFDownloadLink>
  );
};
