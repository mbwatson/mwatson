import styles from './project-list.module.css'
import Image from 'next/image'

const projects = [
  {
    name: 'BioData Catalyst',
    id: 'bdc',
    imagePath: '/images/bdc.png',
    url: 'https://biodatacatalyst.nhlbi.nih.gov/',
  },
  {
    name: 'CTMD',
    id: 'ctmd',
    imagePath: '/images/ctmd.png',
    url: 'https://ctmd.renci.org/',
  },
  {
    name: 'RENCI\'S COVID-19 Rsponse',
    id: 'covid',
    imagePath: '/images/covid.png',
    url: 'https://covid-19.renci.org/',
  },
  {
    name: 'Create RENCI App',
    id: 'cra',
    imagePath: '/images/cra.png',
    url: 'https://github.com/renci/create-renci-app',
  },
  {
    name: 'FABRIC Testbed',
    id: 'fabric',
    imagePath: '/images/fabric.png',
    url: 'https://fabric-testbed.net/',
  },
  {
    name: 'HeLx UI',
    id: 'helx',
    imagePath: '/images/helx.png',
    url: 'https://heal-dev.blackbalsam-cluster.edc.renci.org/helx/',
  },
  {
    name: 'Hey, OK! Pictures',
    id: 'heyok',
    imagePath: '/images/hey-ok.png',
    url: 'https://heyokpictures.com/',
  },
  {
    name: 'First Mile to Health',
    id: 'first-mile',
    imagePath: '/images/first-mile.png',
    url: null,
  },
  {
    name: 'Michelle Scaraglino',
    id: 'ms',
    imagePath: '/images/ms.png',
    url: 'https://michellescaraglino.com',
  },
  {
    name: 'DOT Roadway Hazard Finder',
    id: 'rhf',
    imagePath: '/images/rhf.png',
    url: 'https://dotdsi.renci.org/',
  },
  {
    name: 'RENCI\'s SC20 Virtual Booth',
    id: 'sc20',
    imagePath: '/images/sc20.png',
    url: 'https://sc.renci.org/',
  },
]

export const ProjectList = () => {
  return (
    <div className={ styles.grid }>
      {
        projects.map(({ id, imagePath, name, url }) => (
          <Project key={ id } name={ name } imagePath={ imagePath } url={ url } />
        ))
      }
    </div>
  )
}

const Project = ({ name, url, imagePath }) => {
  if (!url) {
    return (
      <span className={ styles.projectLink }>
        <div className={ styles.project } style={{ background: `url(${ imagePath })` }} />
        <div className={ styles.projectName }>{ name }</div>
      </span>
    )
  }
  return (
    <a href={ url } className={ styles.projectLink } target="_blank" rel="noopener noreferrer">
      <div className={ styles.project } style={{ backgroundImage: `url(${ imagePath })` }} />
      <div className={ styles.projectName }>{ name }</div>
    </a>
  )
}
