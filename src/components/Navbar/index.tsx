import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ICONS
import { MenuIcon } from '@heroicons/react/solid'

// MUI
import { Avatar, Popover, SwipeableDrawer } from '@material-ui/core'

// DATA
import { navLinks } from './nav-links.data'

// CONTEXT
import { useAuth } from '@/lib/auth'

const Navbar: React.FC = () => {
	const [showSidebar, setShowSidebar] = useState<boolean>(false)

	const { currentUser, logout } = useAuth()

	console.log('currentUser', currentUser)

	const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	return (
		<div className="flex justify-between px-8 py-4 text-white bg-black">
			{/* ======= LOGO ======= */}
			<Link href="/">
				<a>
					<div className="flex items-center space-x-4">
						<Image
							src="/logo.png"
							layout="fixed"
							height="75"
							width="150"
							alt="Prep Station logo"
						/>
						{/* <p className="text-xl font-bold md:text-2xl">Prep Station</p> */}
					</div>
				</a>
			</Link>

			{/* ======= HAMBURGER MENU (MOBILE) ======= */}
			<div className="flex items-center space-x-4 cursor-pointer">
				<MenuIcon className="h-6 md:hidden" onClick={() => setShowSidebar(true)} />
			</div>

			{/* ======= NAV LINKS (DESKTOP) ======= */}
			<div className="items-center hidden space-x-8 md:flex">
				{navLinks.map(link => (
					<div key={link.label}>
						<Link href={link.url}>
							<a className="hover:text-red-500">{link.label}</a>
						</Link>
					</div>
				))}
				{currentUser?.uid ? (
					<Avatar
						src={currentUser.photoUrl}
						aria-describedby={id}
						onClick={handleClick}
						className="cursor-pointer"
					/>
				) : (
					<Link href="/login">
						<a className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">Login</a>
					</Link>
				)}
			</div>

			{/* ======= NAV LINKS (MOBILE) ======= */}
			<SwipeableDrawer
				anchor="left"
				open={showSidebar}
				onClose={() => setShowSidebar(false)}
				onOpen={() => setShowSidebar(true)}>
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
					{navLinks.map(link => (
						<div key={link.label} className="my-2">
							<Link href={link.url}>
								<a className="hover:text-red-500">{link.label}</a>
							</Link>
						</div>
					))}

					<div className="mt-4">
						{currentUser?.uid ? (
							<Avatar
								src={currentUser.photoUrl}
								aria-describedby={id}
								onClick={handleClick}
								className="cursor-pointer"
							/>
						) : (
							<Link href="/login">
								<a className="block px-4 py-2 text-center text-white bg-red-500 rounded hover:bg-red-600">
									Login
								</a>
							</Link>
						)}
					</div>
				</div>
			</SwipeableDrawer>

			{/* ========= LOGGEDIN USER POPOVER DRAWER ========= */}
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}>
				<div className="px-4 py-2 cursor-pointer">
					<ul>
						<li
							onClick={async () => {
								handleClose()
								await logout()
							}}>
							Logout
						</li>
					</ul>
				</div>
			</Popover>
		</div>
	)
}

export default Navbar
