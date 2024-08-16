import { Header } from './components/MainComponents/Header'
import { Footer } from './components/MainComponents/Footer'
import { Outlet} from 'react-router-dom'
import { Home } from './components/Pages/Home'

function App() {
  return (
    <>
      <Header />
          <Outlet />
        <Home/>
      <Footer />
    </>
  )
}

export default App
