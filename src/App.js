import { useState, useRef } from 'react';
import './App.css';

function Profile(){
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [power, setPower] = useState('');
  const [displayCharacter, setDisplayCharacter] = useState(false);
  return (
    <div className="Profile">
      <h1>Build A Hero</h1>
      <div>
      <label>Name: </label>
      <input type="text" style={{margin: 10}} onChange={(event)=>{setName(event.target.value)}}/>
      <label>Age: </label>
      <input type="number" style={{margin: 10}} onChange={(event)=>{setAge(event.target.value)}}/>
      <label>Height: </label>
      <input type="text" style={{margin: 10}} onChange={(event)=>{setHeight(event.target.value)}}/>
      <label>SuperPower: </label>
      <input type="text" style={{margin: 10}} onChange={(event)=>{setPower(event.target.value)}}/>
      </div>
      <button onClick = {() => {
        setDisplayCharacter(true)
        }}>
          Display Character</button>
      <div>
        <h1>Hero Info</h1>
        {displayCharacter && (
          <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{height}</li>
            <li>{power}</li>
          </ul>
        )}
      </div>
    </div>
  )
}

function TodoApp(){
  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState("");
  const inputValue = useRef(null);
  function addTask(){
    setTodoList([...todoList, {task: currentTask, completed: false}]);
    inputValue.current.value = '';
    setCurrentTask('');
  }
  const deleteItem = (deletedItem) => {
    setTodoList(todoList.filter(item => item.task !== deletedItem));
  }
  const changeStatus = (taskCompleted) => {
    setTodoList(todoList.map(item => {
      return item.task === taskCompleted ? {task: taskCompleted, completed: true}: {task: item.task, completed: item.completed}
    }))
  }
  return (
    <div className="ToDoApp">
      <h1>Todo List</h1>
      <div>
        <input ref={inputValue} type="text" placeholder="New Task..." onChange={(event)=>setCurrentTask(event.target.value)} onKeyDown={(event)=> { if(event.keyCode === 13){addTask()}}}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr></hr>
        <ul>
          {todoList.map((val,key) => {
            return <div key={key}>
              <li className={ val.completed ? 'taskCompleted' : ''}>{val.task}</li>
              <button onClick={()=> {deleteItem(val.task)}}>Delete</button>
              <button onClick={() => {changeStatus(val.task)}}>Completed</button>
              </div>
          })}
        </ul>
    </div>
  )
}

function TodoList(){
  const [currentTask, setCurrentTask]=useState('');
  const [list, setList]=useState([]);
  const inputVal = useRef(null);
  function addItem(){
    setList([...list, {task: currentTask, completed: false}]);
    inputVal.current.value = '';
    setCurrentTask('');
  }
  function deleteTask(deletedItem){
    setList(list.filter(item => item.task !== deletedItem))
  }
  function changeState(taskCompleted){
    setList(list.map(item => {
      return item.task === taskCompleted ? { task: taskCompleted, completed: true }: {task: item.task, completed: item.completed}
    }))
  }
  return (
    <div className="todo">
      <h1>Todo List</h1>
      <div className="todo-bar">
        <input type="text" placeholder='New Task...' onKeyDown={(event)=> { if(event.keyCode === 13){addItem()}}} ref={inputVal} onChange={(event)=> {setCurrentTask(event.target.value)}}/>
        <button onClick={addItem}>Add Task</button>
      </div>
      <hr></hr>
      <div className="todo-list">
        <ul>
          {list.map((val,key) => {
            return (
              <div key={key} className={val.completed ? 'taskCompleted' : ''}>
                <li>{val.task}</li>
                <button onClick={() => {deleteTask(val.task)}}>X</button>
                {!val.completed && (<button onClick={()=>{changeState(val.task)}}>✓</button>)}
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function App() {
  const showProfile = false;
  const showTodod = false;
  return (
    <div className="App">
      {showProfile && <Profile></Profile>}
      {showTodod && <TodoApp></TodoApp>}
      <TodoList></TodoList>
    </div>
  );
}


export default App;
