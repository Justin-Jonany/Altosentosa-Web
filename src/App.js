import './App.css';
import Home from './Components/Home/Home';
import Companyprofile from './Components/AboutUs/companyprofile/companyprofile'
import Career from './Components/AboutUs/career/career'
import Blog from './Components/Blog/Blogpage'
import Repairform from './Components/Repairform/Repairform'
import Jasarepair from './Components/Services/Jasarepair/jasarepair'
import Preventive from './Components/Services/Preventivemaintanance/preventivemaintanance'
import Produk from './Components/Services/Produk/produk'
import Projek from './Components/Services/Projek/Projek'
import Whyus from './Components/Whyus/Whyus'
import Layout from './Layout'
import Contactus from './Components/Contactus/Contactus'
import { Route, Routes, Link } from 'react-router-dom';

// import { react, route } from './r'
function App() {
  return (
    // <Home />
    <Routes>
      <Route path='/Altosentosa-Web/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route exact path="/Altosentosa-Web/company-profile" element={<Companyprofile />} />
        <Route exact path="/Altosentosa-Web/career" element={<Career />} />
        <Route exact path="/Altosentosa-Web/blog" element={<Blog />} />
        <Route exact path="/Altosentosa-Web/repairform" element={<Repairform />} />
        <Route exact path="/Altosentosa-Web/jasarepair" element={<Jasarepair />} />
        <Route exact path="/Altosentosa-Web/preventive-maintenance" element={<Preventive />} />
        <Route exact path="/Altosentosa-Web/produk" element={<Produk />} />
        <Route exact path="/Altosentosa-Web/projek" element={<Projek />} />
        <Route exact path="/Altosentosa-Web/whyus" element={<Whyus />} />
        <Route exact path="/Altosentosa-Web/contactus" element={<Contactus />} />
      </Route>

    </Routes>

  )
}

export default App;
