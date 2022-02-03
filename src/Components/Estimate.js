import React from 'react';
import {
    Card,
    Container,
    CardBody,
    CardText,
    CardTitle
} from 'reactstrap';


const Estimate = () => {
    return(
        <div className='estimatediv' id='/estimate'>
            <h1 className='pagetitle'>Free Estimate</h1>

            <Card className='estimatecard'>
                <CardBody>
                    <CardTitle className='estimatetitle'>Request Your Free Estimate!</CardTitle>
                    <CardText className='estimatetext2' id='estimaterequest'><a href='mailto:Garfieldslawnservice@cos.net'>Click Here to Message Us About Your Estimate.</a></CardText>
                    <CardText className='estimatetext1'>In your message, please include:
                        <ul className='estimatelist'>
                            <li>First and last name</li>
                            <li>How we can contact you (email and phone number).</li>
                            <li>Address of estimate</li>
                            <li>The date and time you are requesting the estimate.</li>
                            <li>Which service(s) you would like us to preform.</li>
                        </ul>
                    </CardText>
                    <CardText className='estimatetext'>Estimates are only performed on Mon, Wed, and Fri between the hours of 9:00 AM and 3:00 PM</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Estimate;