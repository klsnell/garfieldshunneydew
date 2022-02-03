import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Footer';
import Services from './Services';
import Contact from './Contact';
import Estimate from './Estimate';
import {
    Card,
    Container,
    CardBody,
    CardText,
    CardTitle,
    CardImg
} from 'reactstrap';


const Home = () => {



    return (
        <div className='homediv'>
                <h1 className='pagetitle' id='titlepicture'>Garfield's Hunney-Dew Lawn Service LLC</h1>

                <div className='aboutdiv'>
                    <Card>
                        
                        <h1>About Us</h1>
                        <Card className='aboutcard'>
                            <CardBody>
                                <CardTitle className='aboutcardtitle'>Local and Family Owned Since 1999.</CardTitle>
                                <CardText className='abouttext'>Licensed, bonded and insured we pride ourselves on being a small local and family owned business. There is a reason that many of our current customers who started with us in the beginning are still with us today. We truly value each and every opportunity we are given to be the landscaper you choose to work with. Contact us today for a free estimate!</CardText>
                                <br/>
                                <CardText className='abouttext'>We specialize in regular yard maintenance, complete yard transformations, new plant and tree installations, new irrigation system installation, repairs and tune-ups to existing irrigation systems, rototilling and prep work for new sod installation, bush and plant removals, tree trimming and smaller tree removals.</CardText>
                                <CardText>
                                <a href='https://www.bbb.org/us/az/sierra-vista/profile/landscape-contractors/garfields-hunney-dew-lawn-service-1286-20044466/#sealclick%22' target='blank'><button className='BBB'></button></a>
                                </CardText>
                                <CardImg className='aboutcardimg' width='300vw' src={require('../assets/Sperle.jpg')}></CardImg>
                            </CardBody>
                        </Card>
                    </Card>

                    <Card>
                        
                    </Card>
                </div>
                {/* <Footer/> */}
                {/* <Services/>
                <Contact/>
                <Estimate/> */}
        </div>
       
        
           
           
        
      
    )
}
export default Home;