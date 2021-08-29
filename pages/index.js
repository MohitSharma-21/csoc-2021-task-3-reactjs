import TodoListItem from '../components/TodoListItem'
import AddTask from '../components/AddTask'
import { useEffect, useState , useContext } from 'react'
import axios from '../utils/axios'
import { useAuth } from '../context/auth'
import { AuthContext } from '../context/auth'
import { infoToast, errorToast, sucsessToast } from '../components/toast'
import { toast } from 'react-toastify'
import router from 'next/router'

export default function Home() {
  
  const API_BASE_URL = 'https://todo-app-csoc.herokuapp.com/';
  
  const { token } = useAuth()
  const [tasks, setTasks] = useState([])

  // useAuthRequired();
  // NoAuthRequired();
  // AuthReq();
  
  useEffect(  ()=>{
    if(token) 
    getTasks();
    else
    router.replace('/login')
  },[]);
  

  function getTasks() {
    /***
     * @todo Fetch the tasks created by the user.
     * @todo Set the tasks state and display them in the using TodoListItem component
     * The user token can be accessed from the context using useAuth() from /context/auth.js
     */

     axios({
      url: API_BASE_URL + 'todo/',
      method: 'GET',
      headers: {
        Authorization: "Token " + token
      }
    })
    .then(({data}) => {
      console.log(data)
      setTasks(data)
    })
      .catch((err) =>  {
        console.log(err);
        errorToast("Error in Loading")
      })
  }

  return (
    <div>
      <center>
        <AddTask tasks={tasks} setTasks={setTasks} getTasks={getTasks}/>
        <ul className='flex-col mt-9 max-w-sm mb-3 '>
          <span className='inline-block bg-blue-600 py-1 mb-2 px-9 text-sm text-white font-bold rounded-full '>
            Available Tasks
          </span>
          {
            tasks.map((task) => (
              <TodoListItem key={task.id} tasks={tasks} task={task} setTasks={setTasks} getTasks={getTasks} /> 
            ))
          }
        </ul>
      </center>
    </div>
  )
}
