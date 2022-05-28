import styles from '../styles/Home.module.css';

const Mainlayout = ({ children }) => {
  return (
    <>
        <header className={styles.header}>
          <h1>CinemaBar </h1>
          <p>気分によって映画を提案</p>
        </header>
        <main>
            {children}
        </main>
    </>
  )
}

Mainlayout.propTypes = {}

export default Mainlayout