import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'

// GLOBAL CSS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

// COMPONENTS
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/index'

// CONTEXT
import { AuthProvider } from '@/contexts/AuthContext'

// TOAST
import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<AuthProvider>
			<ToastContainer />
			<div className="font-rubik">
				<Navbar />
				<Component {...pageProps} />
				<Footer />

				<div className="fixed cursor-pointer bottom-10 right-10 hover:opacity-90">
					<Image src="/whatsapp-logo.svg" height="40px" width="40px" />
				</div>

				<Head>
					<title>Prep Station</title>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width"
					/>
					<link rel="icon" type="image/png" href="/logo.png" />
				</Head>
			</div>
		</AuthProvider>
	)
}

export default MyApp
