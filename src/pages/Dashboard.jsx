import { useContext, useState } from "react";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import add from '../../public/add.png'
import AddStudent from "../components/AddStudent";

export default function Dashboard() {
  const { nameFilter, setNameFilter } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header />
      <div className="m-12">
        <div className="mb-8 flex flex-wrap justify-between">
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">TABELA DE ACOMPANHAMENTO DE ALUNOS</h2>
            <h5 className='text-gray font-semibold'>Escola Municipal São Francisco</h5>
          </div>
          <button
            className="bg-primary text-secondary font-bold flex flex-row rounded-lg px-4 py-1 h-fit"
            onClick={handleOpenModal}
          >
            <img src={add} alt="add" className="mr-2 my-auto" />
            <span className="mt-[1px]">
              Adicionar Estudante
            </span>
          </button>
        </div>
        <div className="flex flex-row mb-4">
          {/* BOTÃO FILTRAR */}
          <input
            id="nameFilter"
            type="text"
            name="nameFilter"
            value={nameFilter}
            placeholder="Buscar estudantes"
            onChange={({ target }) => setNameFilter(target.value)}
            className="border border-gray px-4 py-1 text-sm"
          />
        </div>
        <table className="w-full">
          <thead className="bg-secondary text-white w-full h-11">
            <tr>
              <th>Nome</th>
              <th>Ano</th>
              <th>Progresso</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center h-screen">
        <AddStudent isOpen={isOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
}