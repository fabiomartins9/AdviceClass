"use client";

import { useState, useEffect, useRef } from "react";
import { Input, Button } from "antd";

// Função fetchData movida para fora do componente
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

// Função para determinar o índice da célula seguinte com base na tecla pressionada
function getNextCellIndex(currentIndex, numRows, numCols, direction) {
  let newIndex = currentIndex;
  console.log("Direção:", direction);
  console.log("Índice Atual:", currentIndex);

  const currentRow = Math.floor(currentIndex / numCols); // Obtém o número da linha atual
  const currentCol = currentIndex % numCols; // Obtém o número da coluna atual

  switch (direction) {
    case "ArrowUp":
      newIndex = Math.max(0, currentIndex - numCols);
      break;
    case "ArrowDown":
      newIndex = Math.min(
        (numRows - 1) * numCols + currentCol,
        currentIndex + numCols
      );
      break;
    case "ArrowLeft":
      newIndex = Math.max(currentRow * numCols, currentIndex - 1);
      break;
    case "ArrowRight":
      newIndex = Math.min((currentRow + 1) * numCols - 1, currentIndex + 1);
      break;
    default:
      break;
  }

  console.log("Novo Índice:", newIndex);
  return newIndex;
}

export default function TabelaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [turma, setTurma] = useState(null);
  const [idTurma, setIdTurma] = useState(null);
  const [disciplinas, setDisciplinas] = useState(null);
  const [numCliquesCelula, setNumCliquesCelula] = useState({});

  const [turmasDisponiveis, setTurmasDisponiveis] = useState([]);

  const tableRef = useRef(null);

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
    // Chamada inicial para buscar dados da API quando turma e idTurma forem definidos
    if (turma && idTurma) {
      fetchData(turma, idTurma, setAlunos, setDisciplinas);
    }
  }, [turma, idTurma]);

  const handleTurmaChange = async (e) => {
    const selectedTurma = e.target.value;
    const selectedTurmaObject = turmasDisponiveis.find(
      (turma) => turma.nome_turma === selectedTurma
    );

    if (selectedTurmaObject) {
      setTurma(selectedTurmaObject.nome_turma);
      setIdTurma(selectedTurmaObject.id);
      console.log("IDTurmaSelected: ", idTurma);
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
        const rowIndex = currentCell.parentElement.rowIndex;
        const cellIndex = currentCell.cellIndex;
        let nextCell;

        switch (key) {
          case "ArrowUp":
            nextCell = tableRef.current.rows[rowIndex - 1]?.cells[cellIndex];
            break;
          case "ArrowDown":
            nextCell = tableRef.current.rows[rowIndex + 1]?.cells[cellIndex];
            break;
          case "ArrowLeft":
            nextCell = currentCell.previousSibling;
            break;
          case "ArrowRight":
            nextCell = currentCell.nextSibling;
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
        const buttons = document.querySelectorAll("button");

        // Função para atualizar o nome e a cor do botão
        function updateButton(button, name) {
          button.innerText = name;
          button.style.backgroundColor =
            name === "F"
              ? "green"
              : name === "N"
              ? "blue"
              : name === "NF"
              ? "red"
              : "";
        }

        // Determinar qual botão está focado atualmente
        let focusedButtonIndex = Array.from(buttons).findIndex(
          (button) => button === document.activeElement
        );
        if (focusedButtonIndex === -1) focusedButtonIndex = 0;

        if (isNumberKey) {
          const newName =
            key === "0"
              ? "Selecionar"
              : key === "1"
              ? "F"
              : key === "2"
              ? "N"
              : key === "3"
              ? "NF"
              : "";
          updateButton(buttons[focusedButtonIndex], newName);
        } else if (isLetterKey) {
          const newName =
            key === "h"
              ? "F"
              : key === "j"
              ? "N"
              : key === "l"
              ? "Selecionar"
              : key === "H"
              ? "F"
              : key === "J"
              ? "N"
              : key === "L"
              ? "Selecionar"
              : "NF";
          updateButton(buttons[focusedButtonIndex], newName);
        }
      }
    }

    tableRef.current.addEventListener("keydown", handleKeyDown);
    return () => {
      tableRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, [alunos, disciplinas]);

  // Função para manipular o clique em uma célula
  const handleDisciplinaClick = (aluno, disciplina) => {
    const disciplinaKey = aluno + "_" + disciplina;
    const numCliques = (numCliquesCelula[disciplinaKey] || 0) + 1;
    setNumCliquesCelula({
      ...numCliquesCelula,
      [disciplinaKey]: numCliques % 4,
    });
  };

  // Função para atualizar o nome e a cor do botão
  const updateButton = (button, nome) => {
    button.innerText = nome;
    button.style.backgroundColor =
      nome === "F"
        ? "green"
        : nome === "N"
        ? "blue"
        : nome === "NF"
        ? "red"
        : "";
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
      <div className="overflow-x-auto">
        <div className="max-h-540 overflow-y-auto overflow-x-auto mx-4">
          <table
            ref={tableRef}
            className="table-auto border-collapse border border-gray-500 w-full px-4"
          >
            <thead className="bg-gray-200 sticky -top-px z-10">
              <tr>
                <th className="border px-2 py-2 bg-gray-200 sticky top-0 z-10">
                  Nome Aluno
                </th>
                {disciplinas &&
                  disciplinas.map((disciplina, index) => (
                    <th
                      key={index}
                      className="border px-1 py-2 text-xs bg-gray-200 sticky top-0 z-10"
                    >
                      {disciplina}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno, alunoIndex) => (
                <tr key={alunoIndex}>
                  <td className="px-2 py-2 border border-gray-500 text-xs overflow-x-auto">
                    <span>{aluno}</span>
                  </td>
                  {disciplinas &&
                    disciplinas.map((disciplina, disciplinaIndex) => {
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
                          <Button
                            size="small"
                            onClick={() => {
                              handleDisciplinaClick(aluno, disciplina);
                              const buttons =
                                document.querySelectorAll("button");
                              updateButton(
                                buttons[
                                  alunoIndex * disciplinas.length +
                                    disciplinaIndex
                                ],
                                buttonName
                              );
                            }}
                          >
                            {buttonName}
                          </Button>
                        </td>
                      );
                    })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
