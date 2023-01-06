import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LeftSidebar from '../components/LeftSidebar'
import MainNavbar from '../components/MainNavbar'
import Content from '../components/Content'
import Mainbar from '../components/Mainbar'
import Rightbar from '../components/RightSidebar'

const Home: NextPage = () => {
  return (
    <div className="flex flex-row h-screen bg-[#17161B]">
      <Head>
        <title>Cryptonagari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftSidebar />
      <Mainbar />
      <Rightbar />
    </div>
  )
}

export default Home
