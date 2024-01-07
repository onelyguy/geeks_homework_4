import React, { useState } from 'react';

const FormPage = () => {

  const [inputValue, setInputValue] = useState({
    user:'',
    age:'',
    position:''
  })
  console.log(inputValue);
  const changeInput = (event) => {
    setInputValue({...inputValue,
      [event.target.name]:event.target.value
    })
  }

  const check = () =>{
    if(inputValue.user === '') {
      alert('user пустой')
    }
    if(inputValue.age === '') {
      alert('age пустой')
    }
    if(inputValue.position === '') {
      alert('position пустой')
    }

  }

  return (
    <div>
      <input
        name="user"
        type="text"
        placeholder='user'
        onChange={ changeInput}

      />
      <input
        name="age"
        type="number"
        placeholder='age'
        onChange={ changeInput}

      />
      <input
        name='position'
        type="number"
        placeholder='position'
        onChange={ changeInput}
      />
      <button onClick={check}>Проверить</button>
    </div>
  );
};

export default FormPage;