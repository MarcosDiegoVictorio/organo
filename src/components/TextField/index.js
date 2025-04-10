import './TextField.css'
const TextField = (props) => {

    const onDigited = (evento) => {
       props.onAltered(evento.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onDigited} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField