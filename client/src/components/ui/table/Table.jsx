// import { useState, useMemo } from 'react';
import styles from './Table.module.scss'
import TableRow from './TableRow'

const mockRows = [
    { id: 1, salesperson: 'Benjamin Franklin', number: 'S55555', customer: '"O-STIN" mas`uliyati cheklangan jamiyati', taxId: '999999999', date: '2026-05-06', received: false },
    { id: 2, salesperson: 'John Adams', number: 'S55556', customer: 'Another Company LLC', taxId: '88', date: '2026-04-01', received: false },
    { id: 3, salesperson: 'John Adams', number: 'S55556', customer: 'Another Company LLC', taxId: '88', date: '2026-04-01', received: true },
    { id: 4, salesperson: 'John Adams', number: 'S55556', customer: 'Another Company LLC', taxId: '88', date: '2026-04-01', received: true },
];

function Table({ mode = "missing" }) {

    const displayedRows = mockRows.filter(row =>
        mode === 'missing' ? !row.received : row.received
    )

    function handleCheck(id) {
        mockRows(prev =>
            prev.map(r => r.id === id ? { ...r, received: true } : r)
        );
    }


    return (
        <>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr>
                        <th>Salesperson</th>
                        <th>Number</th>
                        <th>Customer</th>
                        <th>Tax ID</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {displayedRows.map(row => (
                        <TableRow key={row.id} row={row} mode={mode} onCheck={handleCheck}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table