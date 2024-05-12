"use client";

import { useState, useEffect, useRef  } from "react";
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
  switch (direction) {
    case "ArrowUp":
      newIndex -= numCols;
      break;
    case "ArrowDown":
      newIndex += numCols;
      break;
    case "ArrowLeft":
      newIndex -= 1;
      break;
    case "ArrowRight":
      newIndex += 1;
      break;
    default:
      break;
  }

  // Limitar o índice dentro dos limites da tabela
  newIndex = Math.min(numRows * numCols - 1, Math.max(0, newIndex));
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
      const isNumberKey = /^[1-3]$/.test(key);
      const isLetterKey = /^[hHjJkK]$/.test(key);
      const isArrowKey = /^Arrow(Up|Down|Left|Right)$/.test(key);
      if (isArrowKey && tableRef.current) {
        const numRows = alunos.length;
        const numCols = disciplinas.length;
        const currentCellIndex = document.activeElement.tabIndex - 2; // -2 para compensar os índices de célula começando em 1
        const nextCellIndex = getNextCellIndex(currentCellIndex, numRows, numCols, key);
        const nextRowIndex = Math.floor(nextCellIndex / numCols);
        const nextColIndex = nextCellIndex % numCols;
        const nextCell = tableRef.current.rows[nextRowIndex + 1].cells[nextColIndex + 1]; // +1 para compensar o cabeçalho

        if (nextCell) {
          nextCell.querySelector("button").focus();
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

        // Determinar qual botão será focado a seguir
        let nextButtonIndex = focusedButtonIndex;
        if (isNumberKey) {
          const newName = key === "1" ? "F" : key === "2" ? "N" : "NF";
          updateButton(buttons[focusedButtonIndex], newName);
        } else if (isLetterKey) {
          const newName = key === "h" ? "F" : key === "j" ? "N" : "NF";
          updateButton(buttons[focusedButtonIndex], newName);
        }

      }
    }

    //document.addEventListener("keydown", handleKeyDown);
    tableRef.current.addEventListener("keydown", handleKeyDown);
    return () => {
      //document.removeEventListener("keydown", handleKeyDown);
      tableRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, [alunos, disciplinas]);


  const generateTabIndex = (rowIndex, cellIndex) => {
    return rowIndex * disciplinas.length + cellIndex + 2; // +2 para contornar o cabeçalho e começar de 1
  };

// Função para manipular o clique em uma célula
const handleDisciplinaClick = (aluno, disciplina) => {
  const disciplinaKey = aluno + "_" + disciplina;
  const numCliques = (numCliquesCelula[disciplinaKey] || 0) + 1;
  setNumCliquesCelula({ ...numCliquesCelula, [disciplinaKey]: numCliques % 4 });
};

// Função para atualizar o nome e a cor do botão
const updateButton = (button, nome) => {
  button.innerText = nome;
  button.style.backgroundColor =
    nome === "F" ? "green" : nome === "N" ? "blue" : nome === "NF" ? "red" : "";
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
      <table ref={tableRef} className="table-auto border-collapse border border-gray-500">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-2">Nome Aluno</th>
              {disciplinas &&
                disciplinas.map((disciplina, index) => (
                  <th key={index} className="border px-1 py-2 text-xs">
                    {disciplina}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno, alunoIndex) => (
              <tr key={alunoIndex}>
                <td className="px-2 py-2 border border-gray-500 text-xs">
                  <span>{aluno}</span>
                </td>
                {disciplinas &&
                  disciplinas.map((disciplina, disciplinaIndex) => {
                    const disciplinaKey = aluno + "_" + disciplina;
                    const numCliques = numCliquesCelula[disciplinaKey] || 0;
                    const buttonName = numCliques === 1 ? "F" : numCliques === 2 ? "N" : numCliques === 3 ? "NF" : "Selecionar";
                    return (
                      <td key={disciplinaIndex} className="border px-1 py-2">
                        <Button
                          size="small"
                          onClick={() => {
                            handleDisciplinaClick(aluno, disciplina);
                            const buttons = document.querySelectorAll("button");
                            updateButton(buttons[alunoIndex * disciplinas.length + disciplinaIndex], buttonName);
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
  );
}
