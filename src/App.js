import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  function taskadded(event) {
    setTask(event.target.value);
  }

  function addTask() {
    if (task === "") {
      alert("Please write something.");
    } else {
      setTodoList([...todoList, task]);
      setTask("");
    }
  }

  function removeTask(index) {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  const listItems = todoList.map((task, index) => (
    <li key={index}>
      {task}
      <button className='close' onClick={() => removeTask(index)}>X</button>
    </li>
  ));

  return (
    <div>
    <div className="header">
      <input value={task} onChange={taskadded} type="text" />
      <button className='addBtn' onClick={addTask}>Add</button>
    </div>
      <ul className='myUL"'>{listItems}</ul>
    </div>
  );
}

export default App;
