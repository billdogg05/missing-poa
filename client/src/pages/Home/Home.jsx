import styles from './Home.module.scss'
import Button from '../../components/ui/Button'
import Table from '../../components/ui/table/Table'
import ArrowRightIcon from '../../assets/arrow-right.svg?react'

function Home() {
    return (
        <>
            <div className={styles.topContent}>
                <h1>Missing Power of Attorneys</h1>
                <Button text="Add new" variant="secondary" link="/add" />
            </div>
            <Table />
            <Button text="Received" variant="primary" link="/received" IconAfter={ArrowRightIcon}/>
        </>
    )
}

export default Home