import React from 'react';
import {Card, CardBody, CardImg, CardText, Container} from 'reactstrap';


const Gallery = () => {
    return(
        <div className='gallerydiv'>
            <h1 className='pagetitle'>Gallery</h1>

            <Container className='gallerycontainer'>
                <Card>
                    <CardImg className='galleryimg'  src={require('../assets/2021-08-29.jpg')}></CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'  src={require('../assets/2021-08-29.jpg')}></CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'  src={require('../assets/2021-08-29.jpg')}></CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'  src={require('../assets/2020-08-02.png')}></CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'  src={require('../assets/2021-08-29.jpg')}></CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'  src={require('../assets/irrigation.jpg')}></CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'  src={require('../assets/truck.jpg')}></CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'  src={require('../assets/2021-08-29.jpg')}></CardImg>
                </Card>
                <Card>
                    <CardImg className='galleryimg'  src={require('../assets/2021-08-29.jpg')}></CardImg>
                </Card>
                
                
            </Container>

        </div>
    )
}

export default Gallery;