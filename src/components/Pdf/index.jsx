import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Função para obter o ano atual
function AnoAtual() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  return anoAtual;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 10,
    marginBottom: 10,
  },
  signatureSection: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signature: {
    borderTop: 1,
    width: '45%',
    textAlign: 'center',
    marginTop: 40,
  },
  footer: {
    marginTop: 20,
    fontSize: 10,
    textAlign: 'center',
  },
});

const PDFHeaderAndFooter = ({ turma, coordenadores, diretores }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>ATA DO CONSELHO DE CLASSE E SÉRIE</Text>
      <Text style={styles.subtitle}>{`Bimestre + de ${AnoAtual()} - ${turma} - tipo de ensino`}</Text>
      <Text style={styles.content}>Aos dias letivos do mês de [mês] de [ano], reuniram-se os Professores e o Coordenador Pedagógico para a realização do Conselho de Classe e Série, na forma presencial, com a presença registrada abaixo.</Text>
      <View style={styles.signatureSection}>
        <View style={styles.signature}>
          <Text>Coordenação: {coordenadores}</Text>
          <Text>______________________</Text>
        </View>
        <View style={styles.signature}>
          <Text>Direção: {diretores}</Text>
          <Text>______________________</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export const PDFLink = ({ turma, coordenadores, diretores }) => (
  <PDFDownloadLink document={<PDFHeaderAndFooter turma={turma} coordenadores={coordenadores} diretores={diretores} />} fileName="ata_conselho.pdf">
    {({ loading }) => (loading ? 'Carregando PDF...' : 'Baixar PDF')}
  </PDFDownloadLink>
);
