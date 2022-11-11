/* default */
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

/* styles */
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * 
 * @param {children} 
 * @param {title} string - customization of the title of each page 
 * @param {...any} param0 
 * @returns Layout
 */

export default function Layout({ children, title, ...props }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600&family=Roboto&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{title}</title>
      </Head>

      <div class='conteiner '>
        <div className="row">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}