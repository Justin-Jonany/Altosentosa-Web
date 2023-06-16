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
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route exact path="/company-profile" element={<Companyprofile />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/repairform" element={<Repairform />} />
        <Route exact path="/jasarepair" element={<Jasarepair />} />
        <Route exact path="/preventive-maintenance" element={<Preventive />} />
        <Route exact path="/produk" element={<Produk />} />
        <Route exact path="/projek" element={<Projek />} />
        <Route exact path="/whyus" element={<Whyus />} />
        <Route exact path="/contactus" element={<Contactus />} />
      </Route>

    </Routes>

  )
}

export default App;
