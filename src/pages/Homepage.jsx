import React from 'react'
import styles from "../css_files/Homepage.module.css"
 import { Routes, Route, Link } from 'react-router-dom';
import Header from '../components/Header'
import Team_members from '../components/Team_members.jsx'
const Homepage = () => {
  return (
    <>
      <Header></Header>
      <Team_members></Team_members>
      <Link to="/solution" style={{ textDecoration: "none", color: "inherit" }}><button className={styles.btn}>View Our Solution</button></Link>
    </>
  )
}

export default Homepage