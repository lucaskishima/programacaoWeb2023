import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';

import "./modal.css";

interface InputProps {
    id: string,
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ id, label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input id={id} value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title, 
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input id="title" label="title" value={title} updateValue={setTitle}/>
                    <Input id="price" label="price" value={price} updateValue={setPrice}/>
                    <Input id="image" label="image" value={image} updateValue={setImage}/>
                </form>
                <button id='postar' onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}