import "./Form.css";
import TextField from '../TextField';
import SuspendedList from "../ListaSuspensa";
import Button from "../Button";
import { useState } from "react";

 const Form = (props) => {

    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')

    const onSave = (evento) => {
        evento.preventDefault()
        props.onEmployeeAdd({
            nome,
            cargo,
            image,
            time
        })
        setNome('')
        setCargo('')
        setImage('')
        setTime('')
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    onAltered = {valor => setNome(valor)}
                 />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    onAltered = {valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={image}
                    onAltered = {valor => setImage(valor)}
                />
                <SuspendedList 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.teams}
                    valor={time}
                    onAltered = {valor => setTime(valor)}
                />
                <Button children="Criar card"/>
            </form>
        </section>
    );
};

export default Form;
