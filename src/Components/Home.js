import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Footer';
import Services from './Services';
import Contact from './Contact';
import Estimate from './Estimate';
import Reviews from './Reviews';
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
                <h1 className='testimonials'>Client Testimonials</h1>
                <Reviews/>
                <button className='reviewbutton1'> <a className='review' href='https://www.google.com/search?hl=en-US&gl=us&q=Garfield%27s+Hunney-Dew,+1927+S+Bowser+Ln,+Sierra+Vista,+AZ+85635&ludocid=8539317709904910133&lsig=AB86z5WEZJacUzALYTagVZ0MLq6X#lrd=0x86d7296af46107f7:0x7681c036c3159735,3' target='blank'>Write a Review</a></button>

            <button className='reviewbutton1'> <a className='review' href='https://www.google.com/search?hl=en-US&gl=us&q=Garfield%27s+Hunney-Dew,+1927+S+Bowser+Ln,+Sierra+Vista,+AZ+85635&ludocid=8539317709904910133&lsig=AB86z5WEZJacUzALYTagVZ0MLq6X#lrd=0x86d7296af46107f7:0x7681c036c3159735,1' target='blank'> View All Reviews</a></button>
                {/* <Footer/> */}
                {/* <Services/>
                <Contact/>
                <Estimate/> */}
        </div>
    )
}
export default Home;