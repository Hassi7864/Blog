import '../styles/globals.css'
import MainHead from '../components/MainHead'

function MyApp({ Component, pageProps }) {

  return<> 
  
  <MainHead/>
  <Component {...pageProps} />
  </>
}

export default MyApp
