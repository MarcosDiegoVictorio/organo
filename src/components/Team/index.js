import Employee from '../Employee'
import './Team.css'

const Team = (props) => {
    const background = { backgroundColor: props.secondColor}

    return (
        <section className='team' style={background}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => <Employee 
                                                    key={employee.name}
                                                    name={employee.nome} 
                                                    cargo={employee.cargo}
                                                    img={employee.image}
                                                    />)}
            </div>
        </section>
    ) 
}

export default Team