import { TbClipboardList } from 'react-icons/tb';
import { TaskToDo } from '../App'
import styles from './Counter.module.css'
import { Tasks } from './Tasks'

interface Props {
    counter: TaskToDo[];
    onDelete: (counterId: string) => void;
    onComplete: (counterId: string) => void;
}

export function Counter({counter, onDelete, onComplete}: Props) {
    const counterQuantity = counter.length;
    const completedTasks = counter.filter((counter) => counter.isCompleted).length

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{counterQuantity}</span>
                </div>

                <div>
                    <p className={styles.p2}>Concluídas</p>
                    <span>{completedTasks} de {counterQuantity}</span>
                </div>
            </header>

            <div className={styles.order}>
                {counter.map((counter) => (
                    <Tasks 
                        key={counter.id} 
                        counter={counter} 
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))} 

                {counter.length <= 0 && (
                    <section className={styles.clipboard}>
                        <TbClipboardList size={50} />
                        <div>
                            <p>
                                Você ainda não tem tarefas cadastradas
                            </p>
                            <span>
                                Crie tarefas e organize seus itens a fazer
                            </span>
                        </div>
                    </section>
                )}             
            </div>
        </section>
    )
}