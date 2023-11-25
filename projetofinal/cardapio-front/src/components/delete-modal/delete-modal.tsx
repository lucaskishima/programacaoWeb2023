import { useEffect, useState } from 'react';
import { useFoodDeleteData } from '../../hooks/useFoodDeleteData';

import './modal.css';

interface InputProps {
    id: string;  
    label: string;
    value: string | number;
    updateValue(value: any): void;
}

interface ModalProps {
    closeModal(): void;
}

const Input = ({id, label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input id={id}value={value} onChange={(event) => updateValue(event.target.value)}></input>
    </>
  );
};

export function CreateDeleteModal({ closeModal }: ModalProps) {
  const [id, setID] = useState(0);
  const { mutate, isSuccess, isLoading } = useFoodDeleteData();

  const submit = () => {
    // You only need to pass the ID to delete
    mutate(id);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess, closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Delete um item do cardápio</h2>
        <form className="input-container">
          {/* Assuming 'id' is a number, if not, you might need to adjust the type */}
          <Input id="deletar_elem" label="id" value={id} updateValue={setID} />
        </form>
        <button id="deletar" onClick={submit} className="btn-secondary">
          {isLoading ? 'deletando...' : 'deletar'}
        </button>
      </div>
    </div>
  );
}