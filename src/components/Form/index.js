import "./Form.css";
import TextField from '../TextField';
import SuspendedList from "../ListaSuspensa";
import Button from "../Button";

const Form = () => {
const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]

const TheSave = (evento) => {
    evento.preventDefault()
    console.log('Form Submetido')
}

    return (
        <section className="form">
            <form onSubmit={TheSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
                <SuspendedList obrigatorio={true} label="Time" itens={times}/>
                <Button children="Criar card"/>
            </form>
        </section>
    );
};
export default Form;
