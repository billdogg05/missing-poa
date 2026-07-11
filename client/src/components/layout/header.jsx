import styles from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'

import ArrowLeftIcon from '../../assets/arrow-left.svg?react'


function Header() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <header>
            <div className="container">
                <div className={styles.header}>
                    {isHome ? <Link to="/" className={`${styles.logo} ${location.pathname === '/' ? styles.active : ''}`}>Home</Link> : <Link to="/" className={styles.logo}><ArrowLeftIcon />Home</Link>}                    
                    <nav className={styles.nav}>
                        <Link to="/received" className={`${styles.navLink} ${location.pathname === '/received' ? styles.active : ''}`}>Received PoA</Link>
                        <Link to="/salespersons" className={`${styles.navLink} ${location.pathname === '/salespersons' ? styles.active : ''}`}>Manage Salespersons</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header