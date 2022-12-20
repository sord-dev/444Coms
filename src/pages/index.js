import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Benefits, Hero, OfferSection } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>444Coms - Simple Conference Calls.</title>
        <meta name="description" content="Fast, reliable & simple conference calls from all around the world." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Hero />
      
      <Benefits />

      <OfferSection />
     
    </div>
  )
}
