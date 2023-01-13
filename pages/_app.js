/* default */
import { Inter } from '@next/font/google'

/* componentes */
import '../components/Navbar/navbar.scss'
import '../components/Footer/footer.scss'
import '../components/GroupCircle/groupCircle.scss'
import '../components/teacherRectangle/teacherRectangle.scss'

/* styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import '../pages/home.scss'
import '../components/CardInfoLanding/CardInfoLanding.scss'
import '../components/GroupCard/groupCard.scss'
import '../components/FormGroup/formGroup.scss'
import '../components/GroupCardDisplay/groupCardDisplay.scss'

const inter = Inter()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
