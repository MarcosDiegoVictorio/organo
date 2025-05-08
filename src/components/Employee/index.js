import './Employee.css'

const Employee = ({name,cargo,img,backgroundColor}) => {
    return (
        <div className='employee'> 
            <div className='header' style={{ backgroundColor:backgroundColor }}>
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