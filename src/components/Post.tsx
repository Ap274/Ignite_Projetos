import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Post.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'

interface Props {
    onAddTask: (taskContent: string) => void
}

export function Post({onAddTask}: Props) {

    const [content, setContent] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onAddTask(content)
        setContent("")
    }

    function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value)
    }
        
    return (
        <div>
            <form className={styles.tasksForm} onSubmit={handleSubmit}>       
                <input
                    name='comment'
                    placeholder='Adicione uma nova tarefa'
                    onChange={onChangeContent}
                    value={content} 
                />
                <button type='submit'>
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </div>
   
    )

}