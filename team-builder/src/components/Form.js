import React from 'react';

const Form = (props) => {
    const {formValues, update, submit} = props;

    const change = e => {
        const {name, value} = e.target
         update(name, value)
        console.log({name,value})
      }

    const newSubmit = e => {
        e.preventDefault()
         update()
    }

    return (
        <form onSubmit={newSubmit} className='form-container'>
     <div className='form-group inputs'>
     <label>Name:
       <input name='name' type='text' onChange={change} value={formValues.change} placeholder='Name here...'></input>
     </label>
     <label>Email:
       <input name='email' type='text' onChange={change} value={formValues.change} placeholder='Email here...'></input>
     </label>
     <label>Role:
       <input name='role' type='text' onChange={change} value={formValues.change} placeholder='Role here...'></input>
     </label>
     <button onClick={change}>
         Submit
     </button>
     </div>
   </form>
    );
};

export default Form;