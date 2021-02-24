import Form from './components/Form';
import  { useState } from 'react';
import './App.css';

function App() {

  const team = [
    {name: 'Randy', email: 'Randyortiz@email.com', role: 'FullStack-Developer'},
    {name: 'Lucia', email: 'Lucia@email.com', role: 'Teacher'},
    {name: 'Ronnie', email: 'Ronnie@email.com', role: 'Business-Owner'},
    {name: 'Naomi', email: 'Naomi@email.com', role: 'Guidance-Counselor'},
    {name: 'Luis', email: 'Luis@email.com', role: 'BackEnd-Developer'}
  ]

  //* Each Input is empty
  const initialFormValue = {
    name: '',
    email: '',
    role: ''
  }

  //* TeamMembers Array useState
    const [teamMembers, setTeamMembers] = useState(team)

  //* Forms  starting empty
    const[formValues, setFormValues] = useState(initialFormValue)


    const updateForm = (name, value) => {
      setFormValues({
        ...formValues,
        [name]: value
      })
    }

    const submitNewMember = () => {

      const newMember = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role.trim(),
      }

      if (!newMember.name || !newMember.email || !newMember.role) {
        return;
      }

      setTeamMembers(teamMembers.concat(newMember))
       setFormValues(initialFormValue)
    }

  return (
    <>
   <div className='container'>
     <h1>Team-Builder</h1>
     {teamMembers.map((members, idx) => {
       return (
         <div className="team-container" key={idx}>
           <h2>{members.name}</h2>
           <h5>{members.email}</h5>
           <h5>{members.role}</h5>
         </div>
       )
     })}
   </div>
   <Form formValues={formValues} update={updateForm} submit={submitNewMember}/>
   </>
  );
}

export default App;
