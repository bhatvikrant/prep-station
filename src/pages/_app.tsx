import type { AppProps } from 'next/app'
import Head from 'next/head'

// GLOBAL CSS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../styles/global.css'

// COMPONENTS
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/index'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className="font-inter">
      <Navbar />
      <Component {...pageProps} />
      <Footer />

      <Head>
        <title>Prep Station</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
    </div>
  )
}

export default MyApp
