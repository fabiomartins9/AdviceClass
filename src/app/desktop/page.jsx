'use client'

import { useState, useEffect } from 'react';
import { Input, Button } from 'antd';

export default function TabelaAlunos() {
  const [tabela, setTabela] = useState([]);
  const [turma, setTurma] = useState(); // Defina a turma inicial aqui
  const [turmasDisponiveis, setTurmasDisponiveis] = useState([]);

  useEffect(() => {
    // Buscar turmas disponíveis
    async function fetchTurmas() {
      try {
        const response = await fetch('/api/turmaSelect');
        if (!response.ok) {
          throw new Error(`Erro ao buscar as turmas. Status: ${response.status}`);
        }
        const data = await response.json();
        setTurmasDisponiveis(data);
        console.log('TurmasPage: ', turma)
      } catch (error) {
        console.error(error);
      }
    }

    fetchTurmas();
  }, []);

  useEffect(() => {
    // Buscar dados da tabela com base na turma selecionada
    async function fetchData() {
      try {
        if(turma){
        const apiUrl = `/api/dataTable?turma=${encodeURIComponent(turma)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Erro ao buscar os dados da API. Status: ${response.status}`);
        }
        const data = await response.json();
        setTabela(data);
      }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [turma]);

  return (
    <div>
      <div className=''>
      {/* Seletor de turmas */}
      <select className='items-center' value={turma} onChange={(e) => setTurma(e.target.value)}>
        {turmasDisponiveis.map((turmaOption) => (
          <option key={turmaOption} value={turmaOption}>
            {turmaOption}
          </option>
        ))}
      </select>
      </div>

      {/* Tabela de alunos e disciplinas */}
      <table>
        <thead>
          <tr>
            {tabela.length > 0 &&
              tabela[0].map((header, index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {tabela.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
