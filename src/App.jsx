import styles from './styles/App.module.css'
import Menu from './components/Menu'
import { useRef, useState } from 'react'
import { Link } from "react-router-dom"

const App = () => {
  const [inputValue, updateInputValue] = useState('')
  const divRef = useRef(null)
  const inputRef = useRef('')

  return (
    <>
      <div className={`${styles.mainPageDiv}`}>
        <div className={`${styles.mainDivContainer} h-100`} style={{ position: 'relative' }}>
          <Menu reff={divRef} reff2={inputRef} />
          <div className={styles.mainDivSubContainer}>
            <div className={styles.mainPageTitle}>TODO</div>
            <div className={styles.mainPageSubTitle}>FUSION</div>
            <div className={styles.mainPagePhrase}>Handle your <b><i>&nbsp;biz</i></b><div>Like the big boss</div></div>
            <div className={styles.btnDiv}>
              <button className={styles.mainPageBtn}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App