// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { GetAPITokenJava } from './pages/functions/getAPIToken';


function App() {

  GetAPITokenJava();

  return (
    <div className='admin-dashboard'>
      <Header />
      <SideBar />
      <Main />
      <Footer />
      
      <BackToTop />
    </div>
  )
}

export default App;
