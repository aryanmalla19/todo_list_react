import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState('')
  const [todos,setTodos] = useState([])
  const handleChange = (e) => {
    const new_value = e.target.value;
    setValue(new_value);
  }
  const delTodo = ()=>{
    todos.shift()
    console.log(todos)
    setTodos([...todos])
  }
  const addTodo=()=>{
    if(value!=""){
      setTodos([...todos,value])
    }
    setValue('')
  }
  return (
    <div className='container'>
      <h1 className='heading'>TODO LIST</h1>
      <div className='input-container'>
      <button onClick={delTodo}> Delete todo</button>
        <input type='text' value={value} onChange={handleChange}/>
        <button onClick={addTodo}> Add todo</button>
      </div>
      <div>
        <ol>
          {todos.map((todos,index)=>{
            return <li key={index}>{todos}</li>
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
