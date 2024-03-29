import { useState } from 'react'
import { usePortfolio } from '../pages/work'
import styles from './project.module.css'

export const Project = ({ id, name, url, image, clickHandler }) => {
  const { activeProject } = usePortfolio()

  return (
    <div
      className={ `${ styles.wrapper } ${ activeProject && activeProject.id === id ? styles.active : 'inactive' }` }
      onClick={ clickHandler }
    >
      <div
        className={ styles.image }
        style={{ background: `url(${ image })`, backgroundSize: 'cover' }}
      />
      <div
        className={ styles.name }
      >
        { name }
      </div>
    </div>
  )
}
