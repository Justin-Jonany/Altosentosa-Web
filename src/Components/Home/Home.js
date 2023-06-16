import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Intro from './Intro/Intro';
import Help from './Help/Help'
import Partner from './Partner/Partner'
import Steps from './Steps/Steps'
import Blog from './Blog/Blog'

function Home() {
    return (
        <div className="Home">
            {/* <Header /> */}
            <Intro />
            <Help />
            <Partner />
            <Steps />
            <Blog />
            {/* <Footer /> */}

        </div>
    )
}

export default Home