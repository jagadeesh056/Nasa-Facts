import React from 'react';
import styles from './background.module.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>background</h1>
        <div className={styles.stars}></div>
        <div className={styles.alpha}></div>
        <div className={styles.nebula}></div>
      </div>
    );
  }
}

export default App