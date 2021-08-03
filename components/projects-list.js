import styles from './projects-list.module.css'
import { Project } from './project'

export const ProjectsList = ({ projects, clickHandler }) => {
  return (
    <div className={ styles.grid }>
      {
        projects.map(({ id, images, name, url }) => (
          <Project
            key={ id }
            id={ id }
            name={ name }
            image={ images.thumbnail }
            url={ url }
            clickHandler={ () => clickHandler(id) }
          />
        ))
      }
      {
        [...Array(5).keys()].map(i => <div key={ i } className={ styles.filler } />)
      }
    </div>
  )
}