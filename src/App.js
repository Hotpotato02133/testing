// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './components/Header';

import Main from './components/Main';
import Footer from './components/Footer';
// import BackToTop from './components/BackToTop';
import { GetAPITokenJava } from './pages/functions/getAPIToken';
import SideBar from './components/SideBar';
import FloatingAIButton from './components/FloatingAIButton';
// import SideBar1 from './components/SideBar1';


function App() {

  GetAPITokenJava();

  return (
    <div className='admin-dashboard'>
      <Header />
      <SideBar />
      <Main />
      <Footer />
      
      {/* <BackToTop /> */}
      <FloatingAIButton />
    </div>
  )
}

export default App;
