import { Navbar } from '../Navbar/Navbar'
import React from 'react'

export function Main(props) {
  return (
    <div>
      <header className="h-0">
        <Navbar />
      </header>
      <main className="bg-white-fronteira">{props.children}</main>
    </div>
  )
}
