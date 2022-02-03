import React from 'react';
import {
    Card,
    Container,
    CardBody,
    CardText,
    CardTitle
} from 'reactstrap';


const Contact = () => {
    return(
        <div className='contactdiv' id='/contact'>
            <h1 className='pagetitle'>Contact Us</h1>

            <Card className='contactcard'>
                <CardBody>
                <CardTitle className='contacttitle'>We Would Love to Hear From You!</CardTitle>

                <CardText className='contacttext'><a className='contactlink' href='mailto:Garfieldslawnservice@cox.net'>Garfieldslawnservice@cox.net</a></CardText>

                <CardText className='contacttext'><a className='contactlink' href='tel:+1-520-417-1171'><h3 className='contactphone'>520-417-1171</h3></a></CardText>

                <CardText className='contacttext'><a className='contactlink' href='tel:+1-520-456-6288'><h3 className='contactphone'>520-456-6288</h3></a></CardText>

                <CardText className='contacttext'><a className='contactlink' href='tel:+1-520-559-3211'> <h3 className='contactphone'>520-559-3211</h3></a></CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Contact;