import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/home.scss'
import '../components/CardInfoLanding/CardInfoLanding.scss'
import '../styles/globals.scss'
import '../components/Navbar/navbar.scss'
import '../components/Footer/footer.scss'
import '../components/GroupCircle/groupCircle.scss'
import '../components/teacherRectangle/teacherRectangle.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
