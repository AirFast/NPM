import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.app_header}>
        <div className={styles.logo_block}>
          <img src={logo} className={styles.app_logo} alt="logo" />
          <span className={styles.site_name}>React shop</span>
        </div>
      </header>
    </div>
  );
}

export default App;
