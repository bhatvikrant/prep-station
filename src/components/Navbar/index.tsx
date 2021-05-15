import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ICONS
import { MenuIcon } from '@heroicons/react/solid'

// MUI
import { SwipeableDrawer } from '@material-ui/core'

// DATA
import { navLinks } from './nav-links.data'

const Navbar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  return (
    <div className="flex justify-between bg-black text-white px-8 py-4">
      {/* ======= LOGO ======= */}
      <Link href="/">
        <a>
          <div className="flex items-center space-x-4">
            <Image src="/logo.png" layout="fixed" height="50" width="100" />
            <p className="font-bold text-xl md:text-2xl">Prep Station</p>
          </div>
        </a>
      </Link>

      {/* ======= HAMBURGER MENU (MOBILE) ======= */}
      <div className="flex items-center space-x-4 cursor-pointer">
        <MenuIcon
          className="h-6 md:hidden"
          onClick={() => setShowSidebar(true)}
        />
      </div>

      {/* ======= NAV LINKS (DESKTOP) ======= */}
      <div className="hidden md:flex items-center  space-x-8">
        {navLinks.map((link) => (
          <div key={link.label}>
            <Link href={link.url}>
              <a className="hover:text-red-500">{link.label}</a>
            </Link>
          </div>
        ))}

        <Link href="/login">
          <a className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Login</a>
        </Link>
      </div>

      {/* ======= NAV LINKS (MOBILE) ======= */}
      <SwipeableDrawer
        anchor="left"
        open={showSidebar}
        onClose={() => setShowSidebar(false)}
        onOpen={() => setShowSidebar(true)}
      >
        <div className="px-8 py-4">
          <div>
            <Image src="/logo.png" layout="fixed" height="100" width="200" />
          </div>
          {navLinks.map((link) => (
            <div key={link.label} className="my-2">
              <Link href={link.url}>
                <a className="hover:text-red-500">{link.label}</a>
              </Link>
            </div>
          ))}

          <div className="mt-4">
            <Link href="/login">
              <a className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white block text-center">
                Login
              </a>
            </Link>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default Navbar
