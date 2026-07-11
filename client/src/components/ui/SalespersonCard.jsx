import styles from './SalespersonCard.module.scss'
import profile from '../../assets/1.jpg'
import EditIcon from '../../assets/edit.svg?react'

function SalespersonCard(person) {
    return (
        <div className={styles.salesperson}>
            <div className={styles.profile}>
                <img src={profile} alt="profile image" />
                <div className={styles.profileWrapper}>
                    <input type="file" name="file-edit" id={`file-edit-${person.id}`} />
                    <label htmlFor={`file-edit-${person.id}`}>
                        <EditIcon />
                    </label>
                </div>
            </div>
            <div className={styles.inputField}>
                <label htmlFor={`salesperson-name-${person.id}`}>Salesperson</label>
                <input placeholder='Name' type="text" id={`salesperson-name-${person.id}`} name='salesperson-name' value={person.name}/>
            </div>
        </div>
    )
}

export default SalespersonCard;