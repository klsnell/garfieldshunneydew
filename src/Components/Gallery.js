import React from 'react';
import { Card, CardBody, CardImg, CardText, Container } from 'reactstrap';


const Gallery = () => {
    return (
        <div className='gallerydiv'>
            <h1 className='pagetitle' id='gallerytitle'>Gallery</h1>
            {/* <div className='gallerytitlebox'>
                <h3>Scroll Down to See Some Our Work!</h3>
            </div> */}
            <h2 className='galleryimgtitle'>Stone Work</h2>
            <Container className='gallerycontainer'>
                {/* <Card className='galleryimgtitle'><h1>Stone Work</h1></Card> */}

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/0001.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/0002.jpg')}>
                    </CardImg>
                </Card>


                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/001.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/002.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/003.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/004.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/005.jpg')}>
                    </CardImg>
                </Card>


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


            <h2 className='galleryimgtitle'>Lawn Services</h2>
            <Container className='gallerycontainer1'>
                {/* <Card className='galleryimgtitle'><h1>Lawn Services</h1></Card> */}
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/04.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/05.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/06.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/07.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/08.jpg')}>
                    </CardImg>
                </Card>


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

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/1-1.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/1-2.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/1-3.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/1-4.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/1-5.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/1-6.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/1-0.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/tramp4.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/tramp3.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/tramp2.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/tramp1.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/01.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/02.jpg')}>
                    </CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/03.jpg')}>
                    </CardImg>
                </Card>

            </Container>

            <h2 className='galleryimgtitle'>Outdoor Kitchens</h2>
            <Container className='gallerycontainer'>
                {/* <Card className='galleryimgtitle'><h1>Trees</h1></Card> */}

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/39.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/40.jpg')}>
                    </CardImg>
                </Card>

                <Card>
                    <CardImg className='galleryimg'
                        src={require('../assets/41.jpg')}>
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


        </div>
    )
}

export default Gallery;