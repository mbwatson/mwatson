import Head from 'next/head'
import { createContext, useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container center-contents full-height">
      <Link href="/work"><a className="view-work-link">View Recent Work</a></Link>
    </div>
  )
}
