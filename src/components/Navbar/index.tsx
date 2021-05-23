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
    <div className="flex justify-between px-8 py-4 text-white bg-black">
      {/* ======= LOGO ======= */}
      <Link href="/">
        <a>
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              layout="fixed"
              height="50"
              width="100"
              alt="Prep Station logo"
            />
            <p className="text-xl font-bold md:text-2xl">Prep Station</p>
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
      <div className="items-center hidden space-x-8 md:flex">
        {navLinks.map((link) => (
          <div key={link.label}>
            <Link href={link.url}>
              <a className="hover:text-red-500">{link.label}</a>
            </Link>
          </div>
        ))}

        <Link href="/login">
          <a className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">Login</a>
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
            <Image
              src="/logo.png"
              layout="fixed"
              height="100"
              width="200"
              alt="Prep Station logo"
            />
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
              <a className="block px-4 py-2 text-center text-white bg-red-500 rounded hover:bg-red-600">
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
