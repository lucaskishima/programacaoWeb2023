import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
import { CreateDeleteModal } from './components/delete-modal/delete-modal';
import { CreateUpdateModal } from './components/update-modal/update-modal';


function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const [isUpModalOpen, setIsUpModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const handleOpenDelModal = () => {
    setIsDelModalOpen(prev => !prev)
  }

  const handleOpenUpModal = () => {
    setIsUpModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          <Card
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      {isDelModalOpen && <CreateDeleteModal closeModal={handleOpenDelModal}/>}
      {isUpModalOpen && <CreateUpdateModal closeModal={handleOpenUpModal}/>}
      <div className="button-container">
        <button onClick={handleOpenModal} id='cadastrar'>Cadastrar Novo</button>
        <button onClick={handleOpenUpModal} id='atualizar'>atualizar</button>
        <button onClick={handleOpenDelModal} id='deletar'>Deletar</button>
      </div>
    </div>
  )
}

export default App
