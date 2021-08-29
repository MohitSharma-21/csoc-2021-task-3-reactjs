/* eslint-disable @next/next/no-img-element */
import { info } from "autoprefixer";
import { useState, useRef } from "react"
import { useAuth } from '../context/auth'
import axios from "axios";
import { useRouter } from 'next/router'

import { Flip, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { errorToast, infoToast, sucsessToast } from "./toast";

export default function TodoListItem({ tasks, task, setTasks, getTasks }) {


  const API_BASE_URL = 'https://todo-app-csoc.herokuapp.com/';

  const { token } = useAuth();
  const router = useRouter()

  const [isedit, editMode] = useState(false);
  const [title, setTitle] = useState('')

  const editTask = (id) => {
    /**
     * @todo Complete this function.
     * @todo 1. Update the dom accordingly
     */
    editMode(true)
    infoToast("Edit task")
  }

  const deleteTask = (id) => {
    /**
     * @todo Complete this function.
     * @todo 1. Send the request to delete the task to the backend server.
     * @todo 2. Remove the task from the dom.
     */
    infoToast("Deleting Task...");

    axios({
      url: `https://todo-app-csoc.herokuapp.com/todo/${id}/`,
      method: 'DELETE',
      headers: {
        Authorization: "Token " + token
      }
    }).then((res) => {

      toast.dismiss()
      setTasks(tasks.filter(task => task.id != id));

      sucsessToast("Task Deleted")

    }).catch((err) => {
      console.log(err)
      errorToast("Error In Deleting Task")
    })


  }

  const updateTask = (id) => {
    /**
     * @todo Complete this function.
     * @todo 1. Send the request to update the task to the backend server.
     * @todo 2. Update the task in the dom.
     */

    toast.dismiss();

    const dataForApiRequest = {
      title: title
    }

    if (!title) {
      editMode(false)
      return;
    }


    infoToast("Udating Task...");

    axios({
      url: API_BASE_URL + 'todo/' + id + '/',
      method: 'PATCH',
      data: dataForApiRequest,
      headers: {
        Authorization: "Token " + token
      },

    })

      .then(({ data }) => {

        editMode(false)
        toast.dismiss();

        setTasks(tasks.map((task) => (
          task.id === id ? { ...task, title: data.title } : task
        )))

        setTitle('')

        sucsessToast("Task Updated")
      })


      .catch(function (err) {
        console.log(err)
        errorToast("error in updating tasks")
      })
  }

  return (
    <>
      <li className='border flex border-gray-500 rounded px-2 py-2 justify-between items-center mb-2'>
        <input
          id={`input-button-${task.id}`}
          type='text'
          className={`${isedit ? "" : "hideme"
            } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring  todo-edit-task-input`}
          placeholder='Edit The Task'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div id={`done-button-${task.id}`} className={`${isedit ? "" : "hideme"}`}>
          <button
            className='bg-transparent hover:bg-gray-500 text-gray-700 text-sm  hover:text-white py-2 px-3 border border-gray-500 hover:border-transparent rounded todo-update-task'
            type='button'
            onClick={() => updateTask(task.id)}
          >
            Done
          </button>
        </div>

        <div id={`task-${task.id}`} className={`${isedit ? 'hideme' : 'todo-task  text-gray-600'}`}>
          {task.title}
        </div>

        <span id={`task-actions-${task.id}`} className={`${isedit ? 'hideme' : ''}`}>
          <button
            style={{ marginRight: '5px' }}
            type='button'
            onClick={() => editTask(task.id)}
            className='bg-transparent hover:bg-yellow-500 hover:text-white border border-yellow-500 hover:border-transparent rounded px-2 py-2'
          >
            <img
              src='https://res.cloudinary.com/nishantwrp/image/upload/v1587486663/CSOC/edit.png'
              width='18px'
              height='20px'
              alt='Edit'
            />
          </button>
          <button
            type='button'
            className='bg-transparent hover:bg-red-500 hover:text-white border border-red-500 hover:border-transparent rounded px-2 py-2'
            onClick={() => deleteTask(task.id)}
          >
            <img
              src='https://res.cloudinary.com/nishantwrp/image/upload/v1587486661/CSOC/delete.svg'
              width='18px'
              height='22px'
              alt='Delete'
            />
          </button>
        </span>
      </li>
    </>
  )
}
