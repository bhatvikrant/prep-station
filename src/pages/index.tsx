// import Head from 'next/head'
// import Image from 'next/image'

import Landing from '../components/Home/Landing'
import HowWeCanAssistYou from '../components/Home/HowWeCanAssistYou'

export const Home = (): JSX.Element => (
  <div className="">
    <Landing />

    <HowWeCanAssistYou />
  </div>
)

export default Home
