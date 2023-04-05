import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Counter } from './components/Counter'
import { v4 as uuidv4 } from 'uuid';

import './global.css'

export interface TaskToDo {
  // map(arg0: (counter: { id: string; isCompleted: any; }) => { id: string; isCompleted: any; }): unknown;
  // filter(arg0: (counter: { id: string; }) => boolean): unknown;
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {

  const [counter, setCounter] = useState<TaskToDo[]>([]);

  function addTasks(taskContent: string) {
    setCounter([...counter, 
    {
      id: uuidv4(),
      content: taskContent,
      isCompleted: false,
    }])
  }

  console.log(setCounter)

  function deleteTaskById(counterId: string) {
    const newTask = counter.filter((counter: { id: string; }) => counter.id != counterId)
    setCounter(newTask)
  }

  function TaskCompletedById(counterId: string) {
    const newTask = counter.map((counter: { id: string; isCompleted: any; }) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          isCompleted: !counter.isCompleted,
        }
      }
      return counter
    })
    setCounter(newTask)
  }

  return (
    <div>
      <Header/>
      <main>
        <Post onAddTask={addTasks}/>
      </main>

      <div>
        <Counter 
          counter={counter} 
          onDelete={deleteTaskById}
          onComplete={TaskCompletedById}
        />
      </div>
    </div>
     
    
  )
}

export default App