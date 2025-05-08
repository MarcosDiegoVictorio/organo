import './SuspendedList.css'

const SuspendedList = (props) => {
    return (
        <div className='suspended-list'>
            <label>{props.label}</label>
            <select 
                onChange={evento => props.onAltered(evento.target.value)} 
                required={props.obrigatorio} 
                value={props.valor}>
                    <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SuspendedList