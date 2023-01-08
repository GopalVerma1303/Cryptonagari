import type { NextPage } from 'next'
import Head from 'next/head'
import HomeNavbar from '../components/home/HomeNavbar'
import LandingPage from '../components/home/LandingPage'
import ConnectMetamaskSidebar from '../components/home/ConnectMetamaskSidebar'
import Mainbar from '../components/posts/Mainbar'
import Rightbar from '../components/posts/RightSidebar'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cryptonagari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
