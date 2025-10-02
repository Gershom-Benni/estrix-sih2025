import React from 'react'
import styles from "../css_files/Header.module.css"
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.logo_container}>
          <img src="/SIH Estrix Logo Png.png" alt="" className={styles.estrix_logo}/>
          <img src="/rathinam logo.png" alt="" className={styles.rathinam_logo}/>
          <h1 className={styles.heading}>Smart India Hackathon 2025 - Team Estrix</h1>
          <img src="/sih logo.png" alt="" className={styles.sih_logo}/>
          <img src="/railways logo.png" alt="" className={styles.railways_logo}/>
        </div>
        
    </header>
  )
}
export default Header