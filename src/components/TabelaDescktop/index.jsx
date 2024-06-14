"use client";

import { useState, useEffect, useRef } from "react";
import { Input, Button } from "antd";
import PdfGenerator from "../PdfContent";

async function fetchData(turma, idTurma, setAlunos, setDisciplinas) {
  try {
    if (turma && idTurma) {
      const apiUrlAlunos = `/api/nomeAluno?turma=${encodeURIComponent(turma)}`;
      const responseAlunos = await fetch(apiUrlAlunos);
      if (!responseAlunos.ok) {
        throw new Error(
          `Erro ao buscar os dados da API de alunos. Status: ${responseAlunos.status}`
        );
      }
      const dataAlunos = await responseAlunos.json();
      setAlunos(dataAlunos);
      console.log("Alunos: ", dataAlunos);
    }
  } catch (error) {
    console.error(error);
  }

  try {
    if (turma && idTurma) {
      const apiUrlDisciplinas = `/api/disciplina?id=${encodeURIComponent(
        idTurma
      )}`;
      const responseDisciplinas = await fetch(apiUrlDisciplinas);
      if (!responseDisciplinas.ok) {
        throw new Error(
          `Erro ao buscar os dados da API de disciplinas. Status: ${responseDisciplinas.status}`
        );
      }
      const dataDisciplinas = await responseDisciplinas.json();
      setDisciplinas(dataDisciplinas);
      console.log("nomesDisciplina: ", dataDisciplinas);
    }
  } catch (error) {
    console.error(error);
  }
}

export default function TabelaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [turma, setTurma] = useState(null);
  const [idTurma, setIdTurma] = useState(null);
  const [disciplinas, setDisciplinas] = useState([]);
  const [numCliquesCelula, setNumCliquesCelula] = useState({});
  const [turmasDisponiveis, setTurmasDisponiveis] = useState([]);
  const [updatedButtonValues, setUpdatedButtonValues] = useState({});
  const [coordenadores, setCoordenadores] = useState([]);
  const [diretores, setDiretores] = useState([]);
  const [selectedCoordenador, setSelectedCoordenador] = useState("");
  const [selectedDiretor, setSelectedDiretor] = useState("");
  const [cabecalho, setCabecalho] = useState([]);
  const [tipoEnsino, setTipoEnsino] = useState([]);

  const tableRef = useRef(null);

  useEffect(() => {
    async function fetchPessoas() {
      try {
        const response = await fetch("/api/pessoas");
        if (!response.ok) {
          throw new Error(
            `Erro ao buscar as pessoas. Status: ${response.status}`
          );
        }
        const data = await response.json();
        setCoordenadores(data.coordenadores);
        setDiretores(data.diretores);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPessoas();
  }, []);

  useEffect(() => {
    async function fetchCabecalho() {
      try {
        const response = await fetch(`/api/cabecalho?nomeTurma=${turma}`);
        if (!response.ok) {
          throw new Error(
            `Erro ao buscar o cabeçalho. Status: ${response.status}`
          );
        }
        const data = await response.json();
        setCabecalho(data.cabecalho);
        setTipoEnsino(data.tipoEnsino);
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchCabecalho();
  }, [turma]);
  

  useEffect(() => {
    async function fetchTurmas() {
      try {
        const response = await fetch("/api/turmaSelect");
        if (!response.ok) {
          throw new Error(
            `Erro ao buscar as turmas. Status: ${response.status}`
          );
        }
        const data = await response.json();
        setTurmasDisponiveis(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTurmas();
  }, []);

  useEffect(() => {
    if (turma && idTurma) {
      fetchData(turma, idTurma, setAlunos, setDisciplinas);
    }
  }, [turma, idTurma]);

  const handleTurmaChange = (e) => {
    const selectedTurma = e.target.value;
    const selectedTurmaObject = turmasDisponiveis.find(
      (turma) => turma.nome_turma === selectedTurma
    );

    if (selectedTurmaObject) {
      setTurma(selectedTurmaObject.nome_turma);
      setIdTurma(selectedTurmaObject.id);
    } else {
      setTurma(null);
      setIdTurma(null);
    }
  };

  useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key;
      const isNumberKey = /^[0-3]$/.test(key);
      const isLetterKey = /^[hHjJkKLl]$/.test(key);
      const isArrowKey = /^Arrow(Up|Down|Left|Right)$/.test(key);
      if (isArrowKey && tableRef.current) {
        event.preventDefault();
        const currentCell = event.target.closest("td");
        const rowIndex = currentCell?.parentElement.rowIndex - 1;
        const cellIndex = currentCell?.cellIndex - 1;
        let nextCell;
  
        switch (key) {
          case "ArrowUp":
            nextCell = tableRef.current.rows[rowIndex]?.cells[cellIndex + 1];
            break;
          case "ArrowDown":
            nextCell =
              tableRef.current.rows[rowIndex + 2]?.cells[cellIndex + 1];
            break;
          case "ArrowLeft":
            nextCell = currentCell?.previousSibling;
            break;
          case "ArrowRight":
            nextCell = currentCell?.nextSibling;
            break;
          default:
            break;
        }
  
        if (nextCell) {
          const button = nextCell.querySelector("button");
          if (button) {
            button.focus();
          }
        }
      }
  
      if (isNumberKey || isLetterKey) {
        event.preventDefault();
        const buttons = tableRef.current.querySelectorAll("button");
  
        let focusedButtonIndex = Array.from(buttons).findIndex(
          (button) => button === document.activeElement
        );
        if (focusedButtonIndex === -1) focusedButtonIndex = 0;
  
        const button = buttons[focusedButtonIndex];
        const currentCell = event.target.closest("td");
        const rowIndex = currentCell?.parentElement.rowIndex - 1;
        const cellIndex = currentCell?.cellIndex - 1;
        const aluno = alunos[rowIndex];
        const disciplina = disciplinas[cellIndex];
  
        const stateToClass = {
          "F": "bg-green-500",
          "N": "bg-blue-500",
          "NF": "bg-red-500",
          "": ""
        };
  
        const newName = isNumberKey
          ? key === "0"
            ? "Selecionar"
            : key === "1"
            ? "F"
            : key === "2"
            ? "N"
            : key === "3"
            ? "NF"
            : ""
          : isLetterKey
          ? key.toLowerCase() === "h"
            ? "F"
            : key.toLowerCase() === "j"
            ? "N"
            : key.toLowerCase() === "k"
            ? "NF"
            : key.toLowerCase() === "l"
            ? "Selecionar"
            : ""
          : "";
  
        button.innerText = newName;
  
        // Remove todas as classes de estado
        button.classList.remove("bg-green-500", "bg-blue-500", "bg-red-500");
  
        // Adiciona a classe correspondente ao novo estado
        if (stateToClass[newName]) {
          button.classList.add(stateToClass[newName]);
        }
  
        const alunoDisciplinaKey = `${aluno}_${disciplina}`;
  
        const updatedValues = {
          ...updatedButtonValues,
          [aluno]: {
            ...updatedButtonValues[aluno],
            [disciplina]: newName,
          },
        };
        setUpdatedButtonValues(updatedValues);
        setUpdatedButtonValues(updatedValues);
        console.log("updatedValues: ", updatedValues);
      }
    }
  
    if (tableRef.current) {
      tableRef.current.addEventListener("keydown", handleKeyDown);
    }
  
    return () => {
      if (tableRef.current) {
        tableRef.current.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [alunos, disciplinas, updatedButtonValues]);
  

  const handleDisciplinaClick = (aluno, disciplina) => {
    // chave unica aluno_disciplina
    const disciplinaKey = aluno + "_" + disciplina;

    const numCliques = (numCliquesCelula[disciplinaKey] || 0) + 1;
    const newNumCliquesCelula = {
      ...numCliquesCelula,
      [disciplinaKey]: numCliques % 4,
    };

    console.log("newNumCliquesCelula: ", newNumCliquesCelula);

    setNumCliquesCelula(newNumCliquesCelula);

    const updatedButtonValue =
      numCliques === 1
        ? "F"
        : numCliques === 2
        ? "N"
        : numCliques === 3
        ? "NF"
        : "Selecionar";
    const updatedValues = {
      ...updatedButtonValues,
      [aluno]: {
        ...updatedButtonValues[aluno],
        [disciplina]: updatedButtonValue,
      },
    };
    setUpdatedButtonValues(updatedValues);
  };

  const handleCoordenadorChange = (e) => {
    setSelectedCoordenador(e.target.value);
  };

  const handleDiretorChange = (e) => {
    setSelectedDiretor(e.target.value);
  };

  return (
    <div>
      <div className="flex gap-4">
  <div className="w-1/3 mb-4 bg-white rounded-lg shadow-md">
    <span className="block mb-2 px-2 py-1 bg-blue-500 text-white rounded-t-lg">Selecione o coordenador:</span>
    <select
      className="p-2 w-full border border-blue-500 rounded-b-lg"
      value={selectedCoordenador}
      onChange={handleCoordenadorChange}
    >
      <option value="">Selecione um Coordenador</option>
      {coordenadores.map(({ id, nome }) => (
        <option key={id} value={nome}>{nome}</option>
      ))}
    </select>
  </div>

  <div className="w-1/3 mb-4 bg-white rounded-lg shadow-md">
    <span className="block mb-2 px-2 py-1 bg-blue-500 text-white rounded-t-lg">Selecione o diretor:</span>
    <select
      className="p-2 w-full border border-blue-500 rounded-b-lg"
      value={selectedDiretor}
      onChange={handleDiretorChange}
    >
      <option value="">Selecione um Diretor</option>
      {diretores.map(({ id, nome }) => (
        <option key={id} value={nome}>{nome}</option>
      ))}
    </select>
  </div>

  <div className="w-1/3 mb-4 bg-white rounded-lg shadow-md">
    <span className="block mb-2 px-2 py-1 bg-blue-500 text-white rounded-t-lg">Selecione uma turma:</span>
    <select
      className="p-2 w-full border border-blue-500 rounded-b-lg"
      value={turma}
      onChange={handleTurmaChange}
    >
      <option value="">Selecione uma turma:</option>
      {turmasDisponiveis.map(({ nome_turma }) => (
        <option key={nome_turma} value={nome_turma}>{nome_turma}</option>
      ))}
    </select>
  </div>
</div>

      <div className="overflow-x-auto">
        <div className="max-h-540 overflow-y-auto overflow-x-auto mx-4">
          <table
            ref={tableRef}            
            className="table-auto border-collapse border border-gray-500 w-full px-4 text-xs"
          >
            <thead className="bg-gray-500 sticky -top-px z-10">
              <tr>
                <th className="border px-2 py-2 bg-gray-300 sticky top-0 z-10">
                  Nome Aluno
                </th>
                {disciplinas.map((disciplina, index) => (
                  <th
                    key={index}
                    className="border px-1 py-2 text-xs bg-gray-300 sticky top-0 z-10"
                  >
                    {disciplina}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno, alunoIndex) => (
                <tr key={alunoIndex}>
                  <td className="px-2 py-2 border border-gray-500  bg-gray-200 style={{ fontSize: '8px' }} overflow-x-auto ">
                    <span>{aluno}</span>
                  </td>
                  {disciplinas.map((disciplina, disciplinaIndex) => {
                    const disciplinaKey = aluno + "_" + disciplina;
                    const numCliques = numCliquesCelula[disciplinaKey] || 0;
                    const buttonName =
                      numCliques === 1
                        ? "F"
                        : numCliques === 2
                        ? "N"
                        : numCliques === 3
                        ? "NF"
                        : "Selecionar";
                    return (
                      <td key={disciplinaIndex} className="border px-1 py-2">
                      <button
                        className={`p-1 ${
                          numCliques === 1 ? 'bg-green-500' :
                          numCliques === 2 ? 'bg-blue-500' :
                          numCliques === 3 ? 'bg-red-500' :
                          ''
                        } w-full rounded`}
                        onClick={() => {
                          handleDisciplinaClick(aluno, disciplina);
                        }}
                      >
                        {buttonName}
                      </button>
                    </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {console.log("Data: ", updatedButtonValues)}
        </div>
      </div>
      <PdfGenerator
        updatedButtonValues={updatedButtonValues}
        coordenadores={selectedCoordenador}
        diretores={selectedDiretor}
        turma={turma}
        cabecalho={cabecalho}
        tipoEnsino={tipoEnsino}
      />
    </div>
  );
}