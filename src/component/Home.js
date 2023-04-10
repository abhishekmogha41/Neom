import Navbar from './Navbar/Navbar'
import Welcome from './Welcome/Welcome'
import Dashboard from './Dashboard/Dashboard'
import Sidemenu from './Sidemenu/Sidemenu'
import Footer from './Footer/Footer'
import '../App.css'

function Home() {
  return (
    <>
       <Navbar/>
       <Welcome/>
       <Sidemenu/>
       <Dashboard/>
       <Footer/>
       
    </>
  )
}

export default Home