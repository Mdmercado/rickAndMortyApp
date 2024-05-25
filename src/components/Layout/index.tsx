import React, { ReactNode } from 'react'
import NavBar from './NavBar/NavBar'
import ArrowBack from '../ArrowBack'
import { useLocation } from 'wouter'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [location] = useLocation()
  return (
    <div className="layout">
      <NavBar />
      <main
        className="content"
        style={{
          marginTop: '80px',
        }}
      >
        {location !== '/' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ArrowBack to="/" />
          </div>
        )}
        {children}
      </main>
    </div>
  )
}

export default Layout
