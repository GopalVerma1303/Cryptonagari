import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LeftSidebar from '../components/SideNavbar'
import MainNavbar from '../components/Navbar'
import Content from './Posts'
import Mainbar from '../components/posts/Mainbar'
import Rightbar from '../components/posts/RightSidebar'
import PostContent from './Posts'

const Home: NextPage = () => {
  return (
    <div className="flex flex-row h-screen bg-[#17161B]">
      <Head>
        <title>Cryptonagari</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
