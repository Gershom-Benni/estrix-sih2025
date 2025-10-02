import React from 'react'
import Team_member_card from './Team_member_card'
import styles from '../css_files/Team_members.module.css'
const Team_members = () => {
  return (
    <>
        <h1 className={styles.heading}>Our Team</h1>
        <div className={styles.card_container}>
            <Team_member_card img_path="prem image.jpg" name="Bagya Prem K" role="Team Leader"></Team_member_card>
            <Team_member_card img_path="Gershom image.jpg" name="Gershom Benni P" role="Software and IOT"></Team_member_card>
            <Team_member_card img_path="Vikraman Image.png" name="Vikraman S" role="Software"></Team_member_card>
            <Team_member_card img_path="abhijith image.jpeg" name="Abhijith" role="Research and Development"></Team_member_card>
            <Team_member_card img_path="dhuyukshaa image.jpg" name="Dhuyukshaa A" role="R&D and IOT"></Team_member_card>
            <Team_member_card img_path="no image.jpg" name="Milan R" role="Hardware"></Team_member_card>
        </div>
    </>
  )
}

export default Team_members