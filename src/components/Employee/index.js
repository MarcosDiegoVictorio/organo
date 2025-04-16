import './Employee.css'

const Employee = ({name,cargo,img}) => {
    return (
        <div className='employee'> 
            <div className='header'>
                <img src={img} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Employee