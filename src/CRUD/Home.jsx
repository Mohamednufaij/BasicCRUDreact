import React from 'react'
import style from './crud.module.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section id={style.home}>
        <article id={style.main}>
            
            <Link to='/'>Create-User</Link>
            <Link to='/user'>User</Link>
            

        </article>
    </section>
  )
}

export default Home
