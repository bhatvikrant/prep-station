// import Head from 'next/head'
// import Image from 'next/image'

import Landing from '../components/Home/Landing'
import HowWeCanAssistYou from '../components/Home/HowWeCanAssistYou'
import OurOfferings from '../components/Home/OurOfferings'

export const Home = (): JSX.Element => (
  <div className="">
    <Landing />

    <HowWeCanAssistYou />
    <OurOfferings />
  </div>
)

export default Home
