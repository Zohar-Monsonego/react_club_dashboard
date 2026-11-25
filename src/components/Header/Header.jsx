// Header - big, centered, bold title.
// Renders an <h1> with the text: Campus Club Dashboard
import styles from './Header.module.css'

export default function Header(props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{props.header_title}</h1>
    </header>
  )
}
