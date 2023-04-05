import styles from './Header.module.css'
import LogoToDo from '../assets/Logo.png'

console.log(LogoToDo)

export function Header() {
    return (
        <header className={styles.header}>
            <img src={LogoToDo} alt="Logotipo do Desafio ToDo List" />
        </header>
    )

}