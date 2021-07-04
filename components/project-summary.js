import { useState } from 'react'
import { Icon } from './icon'
import { usePortfolio } from '../pages/index'

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
          {
            Math.random() > 0.5
            ? `Table 8-bit faded render-farm otaku pen Shibuya market carbon nano-hotdog semiotics. Computer render-farm-ware papier-mache long-chain hydrocarbons grenade spook tanto dome sprawl j-pop kanji rebar towards modem pistol Legba. Bicycle assassin bridge cyber-shanty town paranoid otaku. Tanto camera math-digital Tokyo DIY courier drugs rifle tank-traps realism hacker. `
            : `Skyscraper plastic monofilament military-grade pre-denim woman. Shoes construct face forwards Shibuya DIY physical range-rover dissident order-flow silent garage grenade systema shanty town bomb. Dome Chiba paranoid math-stimulate digital face forwards into beef noodles Legba garage sensory-space singularity. Human garage plastic free-market Shibuya silent boat rain San Francisco sensory jeans smart-physical beef noodles table computer-space. Math-nano-girl BASE jump grenade bicycle geodesic DIY claymore mine kanji tower artisanal. Dome lights courier 8-bit sprawl neon sunglasses. `
          }
        </p>
        <ul className={ styles.tags }>
          { activeProject.tags.sort((s, t) => s.toLowerCase() < t.toLowerCase() ? -1 : 1).map(tag => <li key={ tag }>{ tag }</li>) }
        </ul>
      </div>

      <div className={ styles.preview } style={{ background: `url(${ activeProject.imagePath })`, backgroundSize: 'cover' }} />
    </div>
  )
}
