import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import BoostLinkToday from '../components/BoostLinkToday'
import Content from '../components/Content'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Banner/>
      <Content/>
      <BoostLinkToday/>
      <Footer/>
    </div>
  )
}

export default Home
