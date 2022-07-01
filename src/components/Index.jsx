import React from 'react'
import HeroPage from './HeroPage'
import Content from './Content'
import Tilt from 'react-vanilla-tilt'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Contact from './Contact'

const Index = () => {
    return (
        <>
            <Router>
                <div className='background flexy'>
                    {/* <Tilt className="theme-box p-0"> */}
                    <div className="theme-box m-4">
                        <Navbar />
                        <Routes>
                            <Route exact path='/' element={<HeroPage />} />
                            <Route exact path='/content' element={<Content />} />
                            <Route exact path='/contact' element={<Contact />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Index
