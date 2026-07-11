import styles from './Table.module.scss'
import Button from '../../ui/Button'
import CopyIcon from '../../../assets/copy.svg?react'

function TableRow({ row, mode, onCheck }) {

    function handleCopy(text) {
        navigator.clipboard.writeText(text);
    }

    return (
        <tr>
            <td><span />{row.salesperson}</td>
            <td>{row.number}</td>
            <td>{row.customer}</td>
            <td>{row.taxId} <CopyIcon className={styles.copyIcon} onClick={() => handleCopy(row.taxId)} /></td>
            <td>{row.date}</td>
            <td>
                {mode === "missing" ? (
                    <>
                        <Button text="Edit" variant='tableEdit' link={"/edit/:" + row.id} />
                        <input type="checkbox" className={styles.checkbox} />  {/* checked={row.received} onChange={() => onCheck(row.id)}*/}
                    </>
                ) : (
                    <>
                        <Button text="Delete" variant='tableDelete' link={"/delete/:" + row.id} />
                        <input type="checkbox" checked={true} className={styles.checkbox} />  {/* checked={row.received} onChange={() => onCheck(row.id)}*/}
                    </>
                )}
            </td>
        </tr>
    )
}

export default TableRow