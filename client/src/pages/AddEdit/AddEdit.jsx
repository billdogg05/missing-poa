import styles from './AddEdit.module.scss'
import Button from '../../components/ui/Button'

function AddEdit() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="form-container">
            <h1>Add</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.dropdown}>
                    <label htmlFor="salesperson-name">Salesperson Name</label>
                    <select name="salesperson-name" id="salesperson-name">
                        <option value="1">John Adams</option>
                    </select>
                </div>
                <div className={styles.inputWrapper}>
                    <div>
                        <label htmlFor="salesperson-customer">Customer</label>
                        <input type="text" id='salesperson-customer' placeholder='"KANSLER" MCHJ' />
                    </div>
                    <div>
                        <label htmlFor="salesperson-tax">Tax ID</label>
                        <input type="text" id='salesperson-tax' placeholder='304144925' />
                    </div>
                    <div>
                        <label htmlFor="salesperson-sales-number">Sales Number</label>
                        <input type="text" id='salesperson-sales-number' placeholder='S02026' />
                    </div>
                    <div>
                        <label htmlFor="salesperson-sales-date">Sales Date</label>
                        <input type="date" id='salesperson-sales-date' />
                    </div>
                </div>
                <Button text='Add/Edit' variant="primary" />
            </form>
        </div>
    )
}

export default AddEdit