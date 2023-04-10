import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Sidemenu from './component/Sidemenu/Sidemenu';
import Welcome from './component/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Sidemenu/>
      <Footer/>
    </div>
  );
}

export default App;
