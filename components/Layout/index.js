/* default */
import Head from 'next/head'

/* components */
import Header from '../Header'
import Footer from '../Footer'

/* styles */
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * 
 * @param {children} 
 * @param {string} title - customization of the title of each page 
 * @param {...any} param0 
 * @returns Layout component
 */

export default function Layout({ children, title, ...props }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{title}</title>
      </Head>
      <div className='conteiner'>
        <div className="">
          <div className="col">
            <div className='wwrapper'>
            <Header />
            <main className='content'>{children}</main>
            <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}