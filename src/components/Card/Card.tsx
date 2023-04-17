
import styles from './Card.module.css';

import { TfiTrash } from 'react-icons/tfi'
import { ITask } from '../../App';

interface Icard {
    task: ITask
    handleChecked: (id: string) => void;
    handleDelete: (id: string) => void;

}

const Card = ({ task, handleChecked, handleDelete }: Icard) => {
    return (
        <article className={styles.card}>
            <div className={styles.circle}>
                <input type='checkbox' id={task.id} checked={task.isChecked}
                    onChange={() => handleChecked(task.id)} />
                <label htmlFor={task.id}></label>
            </div>
            <p className={task.isChecked ? styles.checked : styles.notChecked}>{task.description}</p>
            <TfiTrash className={styles.trash}
                onClick={() => handleDelete(task.id)} />
        </article>
    )
}

export default Card