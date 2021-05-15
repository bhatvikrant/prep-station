import type { AppProps } from 'next/app'

// GLOBAL CSS
import '../styles/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return <Component {...pageProps} />
}


export default MyApp