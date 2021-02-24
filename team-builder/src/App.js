import Form from './components/Form';
import  { useState } from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  background: rgb(127, 106, 221);
  border-radius: 0.5rem;
  margin: 0 auto;
  text-align: start;
  width: 80%;
  padding: 1px 0;
  color:white;

  h1{
    text-align: center;
    padding-top:10px;
  }
`
const TeamDiv = styled.div`
  margin: 0px 30px;
  padding: 0px 0;
  width: 90%;
`

function App() {

  const team = [
    {name: 'Randy', email: 'Randyortiz@email.com', role: 'FullStack-Developer'},
    {name: 'Lucia', email: 'Lucia@email.com', role: 'Teacher'},
    {name: 'Ronnie', email: 'Ronnie@email.com', role: 'Business-Owner'},
    {name: 'Naomi', email: 'Naomi@email.com', role: 'Guidance-Counselor'},
    {name: 'Luis', email: 'Luis@email.com', role: 'Backend-Developer'}
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
   <ContainerDiv>
     <h1>Team-Builder</h1>
     <Form formValues={formValues} update={updateForm} submit={submitNewMember}/>
     {teamMembers.map((members, idx) => {
       return (
         <TeamDiv key={idx}>
           <h2>{members.name}</h2>
           <h5>Email: {members.email}</h5>
           <h5>Role: {members.role}</h5>
         </TeamDiv>
       )
     })}
   </ContainerDiv>
   </>
  );
}

export default App;
