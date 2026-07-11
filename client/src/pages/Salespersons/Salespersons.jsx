import styles from '../../components/ui/SalespersonCard.module.scss'
import SalespersonCard from '../../components/ui/SalespersonCard'
import Button from '../../components/ui/Button'
import EditIcon from '../../assets/edit.svg?react'

const salespersons = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Joe Goldberg' },
    { id: 4, name: 'Nikki Freeman' },
]

function Salespersons() {
    return (
        <>
            <h1>Salespersons</h1>
            <div className={styles.salespersons}>
                {salespersons.map((person) => (
                    <SalespersonCard key={person.id} {...person} />
                ))}
                <div className={styles.salesperson}>
                    <div className={styles.profile}>
                        <img src="" alt="profile image"/>
                        <div className={styles.profileWrapper}>
                            <input type="file" name="file-edit" id="file-edit" />
                            <label htmlFor="file-edit">
                                <EditIcon />
                            </label>
                        </div>
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor={`salesperson-name`}>New Salesperson</label>
                        <input placeholder='Name' type="text" id={`salesperson-name`} name='salesperson-name' />
                    </div>
                    <Button variant="secondary" text="+" />
                </div>
            </div>
            <Button text="Save" variant="primary" />
        </>
    )
}

export default Salespersons