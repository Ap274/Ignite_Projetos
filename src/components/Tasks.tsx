import { TaskToDo } from '../App'
import styles from '../components/Tasks.module.css'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
    counter: TaskToDo;
    onDelete: (counterId: string) => void
    onComplete: (counterId: string) => void;

}

export function Tasks({counter, onDelete, onComplete}: Props) {
    return (
        <div className={styles.tasks}>
            <button className={styles.check} onClick={() => onComplete(counter.id)}>
                {counter.isCompleted ? <BsFillCheckCircleFill/> : <div />}
            </button>

            <p className={counter.isCompleted ? styles.text : styles.text2}>
            {counter.content}
            </p>

            <button className={styles.delete} onClick={() => onDelete(counter.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}