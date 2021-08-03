import { useState } from 'react'
import { Icon } from './icon'
import { usePortfolio } from '../pages/work'

import styles from './project-summary.module.css'

export const ProjectSummary = () => {
  const { activeProject } = usePortfolio()

  if (!activeProject) {
    return <div>&nbsp;</div>
  }
  return (
    <div className={ styles.drawerContents }>
      <div className={ styles.header }>
        {
          activeProject.url ? (
            <a className={ styles.link } href={ activeProject.url } target="_blank" rel="noopener noreferrer">
              <h2 className={ styles.title }>
                { activeProject.name } <Icon icon="link" fill="#eeeeee" />
              </h2>
            </a>
          ) : (
            <div className={ styles.link }>
              <h2 className={ styles.title }>
                { activeProject.name }
              </h2>
            </div>
          )
        }
      </div>

      <div className={ styles.summary }>
        <p className={ styles.description }>
          { activeProject.description }
        </p>
        <ul className={ styles.tags }>
          { activeProject.tags.sort((s, t) => s.toLowerCase() < t.toLowerCase() ? -1 : 1).map(tag => <li key={ tag }>{ tag }</li>) }
        </ul>
      </div>

      <div className={ styles.preview } style={{ background: `url(${ activeProject.images.fullSize })`, backgroundSize: 'cover' }} />
    </div>
  )
}
