import Head from 'next/head'
import { createContext, useContext, useState } from 'react'
import Image from 'next/image'
import { Button } from '../components/button'
import Link from 'next/link'

const PortfolioContext = createContext({})
export const usePortfolio = () => useContext(PortfolioContext)

export default function Home() {
  return (
    <div className="container center-contents full-height">
      <Link href="/work"><a className="view-work-button">View Recent Work</a></Link>
    </div>
  )
}
