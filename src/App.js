import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';


function App() {

const teams = [
  {
    name: 'Programação',
    primaryColor: ' #57c278',
    secondColor: ' #D9F7E9'
  },
  {
    name: 'Front-End',
    primaryColor: ' #82cffa',
    secondColor:' #E8F8FF'
  },
  {
    name: 'Data Science',
    primaryColor: ' #A6D157',
    secondColor:' #F0F8E2'
  },
  {
    name: 'Devops',
    primaryColor: ' #E06B69',
    secondColor:' #FDE7E8'
  },
  {
    name: 'UX e Design',
    primaryColor: ' #DB6EBF',
    secondColor:' #FAE9F5'
  },
  {
    name: 'Mobile',
    primaryColor: ' #FFBA05',
    secondColor:' #FFF5D9'
  },
  {
    name: 'Inovação e Gestão',
    primaryColor: ' #FFBA29',
    secondColor:' #FFEEDF'
  },
]

const [employees, setEmployees] = useState([])
const onEmployeeAdded = (employee) => {
  setEmployees([...employees,employee])
}
  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)}onEmployeeAdd={employee => onEmployeeAdded(employee)}/>

      {teams.map(team => 
      <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor}
        secondColor={team.secondColor}
        employees={employees.filter(employee => employee.time === team.name)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
