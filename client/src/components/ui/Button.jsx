import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

function Button({ text, link, variant = 'secondary', IconBefore, IconAfter }) {
  return (
    <Link to={link} className={styles[variant]}>
      {IconBefore && <IconBefore  height={12} />}
      {text}
      {IconAfter && <IconAfter  height={12}  />}
    </Link>
  )
}

export default Button