import React from 'react'
import Style from './findcoder.module.css'
import { Link } from 'react-router-dom'

const MenuBlock = () => {
  return (
    <ol id={Style.MenuBlock}>
      <li><Link to='/explore'>Explore Work</Link></li>
      <li><Link to='/hire'>Hire Talents</Link></li>
      <li><Link to='/dev'>Dev Board</Link></li>
      <li><Link to='/challenges'>Challenges</Link></li>
      {/* <div><FontAwesomeIcon icon="fa-solid fa-chevron-down" /></div> */}
    </ol>
  )
}

export default MenuBlock
