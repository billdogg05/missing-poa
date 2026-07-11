import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={styles.footer}>
                    <p>Created by <a href="https://github.com/billdogg05" target="_blank" el="noreferrer">billdogg05</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer