import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children , title, description}) {
  return (
    <>
      <Head>

      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}