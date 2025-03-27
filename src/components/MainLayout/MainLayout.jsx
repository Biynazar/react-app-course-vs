import React from 'react'
import cls from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';


export const MainLayout = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className={cls.mainLayout}>
      <header>header</header>
      <div className={cls.mainWrapper}>
        <main className={cls.main}>
          <Outlet />
        </main>
        <footer className={cls.footer}>
          React Question Cards Application | {currentYear} <br />
          by Biinazar Kainazarov
        </footer>
      </div>
    </div>
  )
}

// После скачиваем npm install react-router-dom
