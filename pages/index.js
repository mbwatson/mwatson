import Head from 'next/head'
import { createContext, useContext, useState } from 'react'
import styles from '../components/projects-list.module.css'
import Image from 'next/image'
import { ProjectsList } from '../components/projects-list'
import { Project } from '../components/project'
import { Drawer } from '../components/drawer'
import { ProjectSummary } from '../components/project-summary'
import { projects } from '../content/projects'

const PortfolioContext = createContext({})
export const usePortfolio = () => useContext(PortfolioContext)

export default function Home() {
  const [activeProject, setActiveProject] = useState()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleToggleDrawer = () => setDrawerOpen(!drawerOpen)
  const handleCloseDrawer = () => setActiveProject(null)

  const handleClickProject = id => {
    if (activeProject && activeProject.id === id) {
      setActiveProject(null)
    } else {
      const newProject = projects.find(project => project.id === id)
      if (!newProject) {
        return
      }
      setActiveProject(newProject)
    }
  }

  return (
    <PortfolioContext.Provider value={{ activeProject, handleClickProject }}>
      <div className={ styles.container }>
        <ProjectsList projects={ projects } clickHandler={ handleClickProject } />
        <Drawer open={ activeProject } closeHandler={ handleCloseDrawer }>
          <ProjectSummary key={ activeProject?.id || 'key' } />
        </Drawer>
      </div>
    </PortfolioContext.Provider>
  )
}
