import { useEffect, useState, useContext } from 'react'
import axios from '../utils/axios'
import { useAuth } from '../context/auth'
import { useRouter } from 'next/router'
import { infoToast, errorToast, sucsessToast } from './toast'
import { toast } from 'react-toastify'

export default function AddTask({ tasks, setTasks, getTasks }) {
  const API_BASE_URL = 'https://todo-app-csoc.herokuapp.com/';

  const router = useRouter()
  const [title, setTitle] = useState('');

  const { token } = useAuth();
  
  const addTask = () => {

    const dataForApiRequest = {
      title: title
    }

    if(!title)
    {
      errorToast("Please add title to the task")
      return;
    }

    infoToast("Please wait...")

    axios({
      url: API_BASE_URL + 'todo/create/',
      method: 'POST',
      data: dataForApiRequest,
      headers: {
        Authorization: "Token " + token
      }
    })

      .then(function (res) {
        toast.dismiss()

        setTitle('')
        getTasks();
        
        sucsessToast("Task Addded")

      })


      .catch(function (err) {
        console.log(err)

        toast.dismiss()
        errorToast('error in adding tasks')
      })


    /**
     * @todo Complete this function.
     * @todo 1. Send the request to add the task to the backend server.
     * @todo 2. Add the task in the dom.
     */
  }


  return (
    <div className='flex items-center max-w-sm mt-24'>
      <input
        id="inputTask"
        type='text'
        className='todo-add-task-input px-4 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full'
        placeholder='Enter Task'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type='button'
        className='todo-add-task bg-transparent hover:bg-green-500 text-green-700 text-sm hover:text-white px-3 py-2 border border-green-500 hover:border-transparent rounded'
        onClick={addTask}
      >
        Add Task
      </button>

    </div>
  )
}