import React from 'react';
import { Card, CardBody, CardImg, CardText, Container } from 'reactstrap';


const Gallery = () => {
    return (
        <div className='gallerydiv'>
            <h1 className='pagetitle'>Gallery</h1>
            <h2 className='galleryimgtitle'>Stone Work</h2>
            <Container className='gallerycontainer'>
                {/* <Card className='galleryimgtitle'><h1>Stone Work</h1></Card> */}
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/27.png')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/26.png')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/28.png')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/15.png')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/33.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/12.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/8.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/29.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/7.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/10.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/9.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/14.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/37.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/6.jpg')}>
                    </CardImg>
                </Card>


                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/32.jpg')}>
                    </CardImg>
                </Card>


                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/24.png')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/25.png')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/38.jpg')}>
                    </CardImg>
                </Card>
            </Container>




            <h2 className='galleryimgtitle'>Irrigation</h2>
            <Container className='gallerycontainer'>
                {/* <Card className='galleryimgtitle'><h1>Irrigation</h1></Card> */}
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/23.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/irrigation.jpg')}>
                    </CardImg>
                </Card>

            </Container>




            <h2 className='galleryimgtitle'>Trees</h2>
            <Container className='gallerycontainer'>
                {/* <Card className='galleryimgtitle'><h1>Trees</h1></Card> */}

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/20.jpg')}>
                    </CardImg>
                </Card>
                
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/21.jpg')}>
                    </CardImg>
                </Card>

            </Container>




            <h2 className='galleryimgtitle'>Lawn Services</h2>
            <Container className='gallerycontainer1'>
                {/* <Card className='galleryimgtitle'><h1>Lawn Services</h1></Card> */}
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/18.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/19.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/35.jpg')}>
                    </CardImg>
                </Card>

            </Container>
        </div>
    )
}

export default Gallery;