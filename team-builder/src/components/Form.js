import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    background-color: rgb(75, 36, 216);
    border: 1px solid rgb(75, 36, 216);
    border-radius: 10px;
    box-shadow: 0px 1px 6px -2px #807f7f;
    padding: 32px;
    margin-bottom: 24px;
`

const GroupForm = styled.div`
  color:white;
  padding: 30px;

  label{
    display: flex;
    justify-content: space-between;
  }

  input{
    height: 1.5rem;
    width: 150px;
    margin: 8px 8px 8px 0;
    border-radius: 0.4rem;
  }
`

const Form = (props) => {
    const {formValues, update, submit} = props;

    const change = e => {
        const {name, value} = e.target
         update(name, value)
        console.log({name,value})
      }

    const newSubmit = e => {
        e.preventDefault()
         submit()
    }

    return (
        <FormContainer onSubmit={newSubmit} >
     <GroupForm>
     <label>Name:
       <input name='name' type='text' onChange={change} value={formValues.change} placeholder='Name here...'></input>
     </label>
     <label>Email:
       <input name='email' type='text' onChange={change} value={formValues.change} placeholder='Email here...'></input>
     </label>
     <label>Role:
       <input name='role' type='text' onChange={change} value={formValues.change} placeholder='Role here...'></input>
     </label>
     <button disabled={!formValues.name || !formValues.email || !formValues.role} onClick={change}>
         Submit
     </button>
     </GroupForm>
   </FormContainer>
    );
};

export default Form;