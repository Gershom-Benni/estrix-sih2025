import React from 'react'
import styles from '../css_files/Team_member_card.module.css'
const Team_member_card = (props) => {
  return (
    <div className={styles.card_container}>
        <img src={props.img_path} className={styles.img}/>
        <h3 className={styles.name}>{props.name}</h3>
        <p className={styles.role}>{props.role}</p>
    </div>
  )
}

export default Team_member_card