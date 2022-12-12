import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './HomePage.module.css'
import { users } from '../../../meta_data/metaData'

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.header}>Вход на аукцион</h1>
      <span className={css.subHeader}>Войти как:</span>
      <ul className={css.userList}>
        {users.map((user, i) => 
          <li key={user.name}><NavLink to={`/auction?userIndex=${i}`}>{user.name}</NavLink></li>
        )}
      </ul>
    </div>
  )
}

export default HomePage