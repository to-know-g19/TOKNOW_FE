import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children , title}) {
  return (
    <>
      <Head> 
        <link rel="shortcut icon" href="/favicon.ico" />       
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600&family=Roboto&display=swap" rel="stylesheet"/>
        
        <title>{title}</title> 
            
      </Head>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}