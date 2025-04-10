import './Team.css'

const Team = (props) => {
    const background = { backgroundColor: props.secondColor}

    return (
        <section className='team' style={background}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        </section>
    ) 
}

export default Team