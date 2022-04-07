import React from 'react';
import { Card, Container, Row, Col, CardGroup, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import { FaWater, FaTree, FaRandom, FaLeaf, FaGripHorizontal, FaAngleDoubleUp } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='servicediv' id='top' >
            <h1 className='pagetitle'>Services Provided</h1>

            <Container className='servicebtncontainer' >
                {/* <Card> */}


                {/* <a className='servicelink' href='#/services#/irrigation'>
                    <button className='servicebtn'>
                        <FaWater />
                        <h2 id='btntext'>Irrigation</h2>
                    </button>
                </a>



                <a className='servicelink' href='#trees'>
                    <button className='servicebtn'>
                        <FaTree />
                        <h2 id='btntext'>Trees</h2>
                    </button>
                </a>



                <a className='servicelink' href='#lawn'>
                    <button className='servicebtn'>
                        <FaLeaf />
                        <h2 id='btntext'>Lawn Services</h2>
                    </button>
                </a>



                <a className='servicelink' href='#rock'>
                    <button className='servicebtn'>
                        <FaGripHorizontal />
                        <h2 id='btntext'>Stone & Gravel</h2>
                    </button>
                </a>



                <a className='servicelink' href='#misc'>
                    <button className='servicebtn'>
                        <FaRandom />
                        <h2 id='btntext'>Miscellaneous</h2>
                    </button>
                </a> */}



                {/* </Card> */}
            </Container>

            {/* <h3>Click a service or scroll down to see what we do!</h3> */}
            <h3>Scroll down to see what we do!</h3>

            <Card className='servicecard'>
                <CardBody>
                    <CardTitle className='cardtitle' id='/irrigation'>Irrigation</CardTitle>
                    <CardText>Irrigation System Repairs</CardText>
                    <CardText>Irrigation Spring Start-ups</CardText>
                    <CardText>Irrigation Winterization</CardText>
                    <CardText>New Irrigation System Installs</CardText>
                    <CardImg className='cardimg' width='500vw' src={require('../assets/23.jpg')} />
                </CardBody>
                <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>
            </Card>

            <Card className='servicecard1'>
                <CardBody>
                    <CardTitle className='cardtitle' id='#trees'>Tree Services</CardTitle>
                    <CardText>Tree Trimming Above 8'</CardText>
                    <CardText>Selective Tree Removals</CardText>
                    <CardText>New Plant/Tree Installation</CardText>
                    <CardImg className='cardimg' width='500vw' src={require('../assets/22.jpg')} />
                </CardBody>
                <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>
            </Card>

            <Card className='servicecard'>
                <CardBody>
                    <CardTitle className='cardtitle' id='#lawn'>Lawn Service and Maintenance</CardTitle>
                    <CardText>Artificial Turf installation</CardText>
                    <CardText>Raised Planter Beds</CardText>
                    <CardText>Lawn Aeration and Seeding</CardText>
                    <CardText>New Sod Installation</CardText>
                    <CardText>Spring and Fall Clean-ups</CardText>
                    <CardText>Mulching Services</CardText>
                    <CardText>Roto-tilling Services</CardText>
                    <CardText>Field Cuts</CardText>
                    <CardText>Pre & Post Emergent Weed Spray</CardText>
                    <CardImg className='cardimg' width='500vw' src={require('../assets/36.jpg')} />
                </CardBody>
                <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>
            </Card>

            <Card className='servicecard1'>
                <CardBody>
                    <CardTitle className='cardtitle' id='#rock'>Stone Work and Gravel</CardTitle>
                    <CardText>Paver Driveways, Walkways, and Patios</CardText>
                    <CardText>Retaining Walls</CardText>
                    <CardText>Flagstone Installation</CardText>
                    <CardText>Flagstone Grouting Services</CardText>
                    <CardText>Gravel Installs</CardText>
                    <CardText>Border Edge Stone Installs</CardText>
                    <CardImg className='cardimg' width='500vw' src={require('../assets/28.png')} />
                </CardBody>
                <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>
            </Card>

            <Card className='servicecard'>
                <CardBody>
                    <CardTitle className='cardtitle' id='#misc'>Miscellaneous</CardTitle>
                    <CardText>Outdoor Fireplaces</CardText>
                    <CardText>Gazebo/Pergola Installations</CardText>
                    <CardText>Dry River Bed Installations</CardText>
                    <CardText>Flag Pole Installations</CardText>
                    <CardText>Storm Water Drainage Catchment Systems</CardText>
                    <CardText>Single Story Gutter Clean-outs</CardText>
                    <CardImg className='cardimg' width='500vw' src={require('../assets/truck.jpg')} />
                </CardBody>
                <a href='#top'><FaAngleDoubleUp className='uparrow' /></a>
            </Card>
        </div>
    )
}

export default Services;