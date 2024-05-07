"use client";

import { useState, useEffect } from "react";
import { Input, Button } from "antd";

export default function TabelaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [turma, setTurma] = useState(null); // Defina a turma inicial aqui
  const [idTurma, setIdTurma] = useState(null); // Defina a turma inicial aqui
  const [disciplinas, setDisciplinas] = useState(null); // Defina a turma inicial aqui

  const [turmasDisponiveis, setTurmasDisponiveis] = useState([]);

  useEffect(() => {
    // Buscar turmas disponíveis
    async function fetchTurmas() {
      try {
        const response = await fetch("/api/turmaSelect");
        if (!response.ok) {
          throw new Error(
            `Erro ao buscar as turmas. Status: ${response.status}`
          );
        }
        const data = await response.json();
        console.log("data: ", data);
        setTurmasDisponiveis(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTurmas();
  }, []);

 // useEffect(() => {
    // Buscar dados da tabela com base na turma selecionada
    async function fetchData() {
      try {
        if (turma) {
          const apiUrl = `/api/nomeAluno?turma=${encodeURIComponent(turma)}`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error(
              `Erro ao buscar os dados da API. Status: ${response.status}`
            );
          }
          const data = await response.json();
          setAlunos(data);
          console.log("Alunos: ", data);
        }
      } catch (error) {
        console.error(error);
      }

      // buscar disciplinas com base na turma selecionada
      try {
        if (turma) {
          const apiUrl = `/api/disciplina?id=${encodeURIComponent(
            idTurma
          )}`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error(
              `Erro ao buscar os dados da API. Status: ${response.status}`
            );
          }
          const data = await response.json();
          setDisciplinas(data);
          console.log("nomesDisciplina: ", data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    //fetchData();
  //}, [turma]);

  const handleTurmaChange = async  (e) => {
    const selectedTurma = e.target.value;
    const selectedTurmaObject = turmasDisponiveis.find(turma => turma.nome_turma === selectedTurma);
  
    if (selectedTurmaObject) {
      // Verifica se a opção selecionada não é vazia
      setTurma(selectedTurmaObject.nome_turma);
      setIdTurma(selectedTurmaObject.id); // Definindo o ID da turma
      // Chama a função fetchData para buscar os dados da API
      await fetchData();
      console.log("IDTurmaSelected: ", idTurma)
    } else {
      setTurma(null);
      setIdTurma(null); // Define o ID da turma como null se uma opção vazia for selecionada
    }
  };

  return (
    <div className="">
      {/* Seletor de coordenador */}
      <div className="mt-10">
        <span>Selecione o coordenador</span>
        <select></select>
      </div>

      {/* Seletor de turmas */}
      <div className="mt-10">
        <span>Selecione a turma</span>
        <select className="p-2" value={turma} onChange={handleTurmaChange}>
          {turmasDisponiveis.map(({ nome_turma }) => (
            <option className="text-black" key={nome_turma} value={nome_turma}>
              {nome_turma}
            </option>
          ))}
        </select>
      </div>

      {/* Tabela de alunos e disciplinas */}
      <div className="mt-10">
      <table className="table-auto">
        <thead>
          <tr>
            {/* Coluna do Nome do Aluno */}
            <th className="border px-4 py-2">Nome Aluno</th>

            {/* Colunas das Disciplinas */}
            {disciplinas && disciplinas.map((disciplina, index) => (
              <th key={index} className="border px-4 py-2">{disciplina}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Iterando sobre cada aluno */}
          {alunos.map((aluno, alunoIndex) => (
            <tr key={alunoIndex}>
              {/* Nome do Aluno */}
              <td>{aluno}</td>

              {/* Células clicáveis como botões para cada disciplina */}
              {disciplinas && disciplinas.map((disciplina, disciplinaIndex) => (
                <td key={disciplinaIndex} className="border px-4 py-2">
                  <Button onClick={() => handleDisciplinaClick(aluno, disciplina)}>Selecionar</Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
