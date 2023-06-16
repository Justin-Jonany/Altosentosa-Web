import React from 'react'
import './Header.css'
import logo from '../../Assets/logo.png'
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer/Footer"
import { color } from 'framer-motion';
function header() {
  return (
    <>
      <div className="header">
        <img src={logo} className='logo' />
        <ul className="pages">
          <li>
            <Link to="/" className='link-navbar'>
              <span className="link-navbar-text">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link to="/blog" className='link-navbar'>
              <span className="link-navbar-text">
                Blog
              </span>
            </Link>
          </li>
          <li className='service-li'>
            <span data-toggle="dropdown" aria-expanded="false">Services</span>
            <ul className="services-drop-down">
              <li className='border-bottom-li'>
                <Link to="/projek" className='link-navbar'>
                  <span className="link-dropdown-text">
                    Projek
                  </span>
                </Link>
              </li>
              <li className='border-bottom-li'>
                <Link to="/jasarepair" className='link-navbar'>
                  <span className="link-dropdown-text">
                    Jasa Repair
                  </span>
                </Link>
              </li>
              <li className='border-bottom-li'>
                <Link to="/produk" className='link-navbar'>
                  <span className="link-dropdown-text">
                    Produk
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/preventive-maintenance" className='link-navbar'>
                  <span className="link-dropdown-text">
                    Preventive Maintenance
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/repairform" className='link-navbar'>
              <span className="link-navbar-text">
                Repair Form
              </span>
            </Link>
          </li>
          <li>
            <Link to="/whyus" className='link-navbar'>
              <span className="link-navbar-text">
                Why Us
              </span>
            </Link>
          </li>
          <li className='service-li'>
            <span data-toggle="dropdown" aria-expanded="false">About Us</span>
            <ul className="services-drop-down">
              <li className='border-bottom-li'>
                <Link to="/company-profile" className='link-navbar'>
                  <span className="link-dropdown-text">
                    Company Profile
                  </span>
                </Link>
              </li>
              <li>
              <Link to="/career" className='link-navbar'>
                  <span className="link-dropdown-text">
                    Career
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="contactUs">
          <Link to="/contactus" className='link-navbar'>
            <span className="link-contactus-text">
              Contact Us
            </span>
          </Link>
        </div>

      </div>
      <Outlet />
      <Footer />
    </>

  )
}

export default header