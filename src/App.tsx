import { ChangeEvent, FormEvent, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

import { AiOutlinePlusCircle } from 'react-icons/ai'

import './gobal.css';
import styles from './App.module.css'
import Header from './components/Header/Header';
import Card from './components/Card/Card';


export interface ITask {
  id: string;
  isChecked: boolean;
  description: string;
}



function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(event.target.value)
  }

  const handleAddNewTask = (event: FormEvent) => {
    event.preventDefault()

    const newTask: ITask = {
      id: uuidv4(),
      isChecked: false,
      description: newTaskText
    }

    setTasks([...tasks, newTask]);
    setNewTaskText('');

  }

  const handleChangeCheckedValue = (id: string) => {

    const listWithEditedTask = tasks.map(task => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }
      return task;

    });

    setTasks(listWithEditedTask);
  }

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const isDisable = !newTaskText.length;
  const completed = tasks.filter(task => task.isChecked).length;

  return (
    <div className={styles.App}>
      <div>
        <Header />

        <main className={styles.wrapper}>

          <form onSubmit={handleAddNewTask} className={styles.form}>
            <input name='task' type='text'
              placeholder='Adicione uma tarefa'
              value={newTaskText}
              onChange={handleNewTaskChange} />
            <button disabled={isDisable} type='submit'>
              criar <AiOutlinePlusCircle size={20} />
            </button>
          </form>

          <div className={styles.taskContainer}>
            <div className={styles.overview}>
              <strong data-count={tasks.length} className={styles.tasksCreated}>Tarefas criadas</strong>
              <strong data-count={`${completed} de ${tasks.length}`} className={styles.completed}> Concluídas</strong>
            </div>
            <section className={styles.section}>
              {

                tasks.map(task => {
                  return (<Card key={task.id} task={task}
                    handleChecked={handleChangeCheckedValue}
                    handleDelete={handleDeleteTask}

                  />)
                })
              }
            </section>
          </div>

        </main>



      </div>
    </div>
  )
}

export default App
