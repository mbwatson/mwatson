import styles from './projects-list.module.css'
import { Project } from './project'

export const ProjectsList = ({ projects, clickHandler }) => {
  return (
    <div className={ styles.grid }>
      {
        projects.map(({ id, imagePath, name, url }) => (
          <Project
            key={ id }
            id={ id }
            name={ name }
            imagePath={ imagePath }
            url={ url }
            clickHandler={ () => clickHandler(id) }
          />
        ))
      }
    </div>
  )
}