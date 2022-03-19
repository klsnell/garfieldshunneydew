import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaStar } from 'react-icons/fa';

const handleDragStart = (e) => e.preventDefault();

const items = [

    <Card className='reviewcard'>
        <CardBody>
        <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <br/>
            <CardText className='reviewtext'>"I hire them every year to spray for weeds.This keeps my yard weed free the entire year. I also recently had them install artificial grass in the backyard. It turned out amazing. Really impressed with this company and their work."</CardText>
            <CardTitle className='reviewname'>Yvonne A.</CardTitle>
        </CardBody>
    </Card>,

    <Card className='reviewcard'>
        <CardBody>
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <br/>
            <CardText className='reviewtext'>"Simply an amazing team! From our first interaction with Rick and Nicole I was very impressed with their professionalism, responsiveness, and honesty. They pride themselves in following through with every commitment. They also have a deep sense of ownership and will ensure that the client is 100% satisfied. Honestly, they did great work and it was a true pleasure to interact with them. We had a big job and we were concerned, given our experience with other organizations, but they put us at ease from day one. We trusted them and they did not let us down. They also made sound recommendations that have made a significant impact in reducing the risk of flooding in our back yard. We highly recommend them and wish all businesses would take this much care with their clients."</CardText>
            <CardTitle className='reviewname'>Eduardo U</CardTitle>
        </CardBody>
    </Card>,

    <Card className='reviewcard'>
        <CardBody>
        <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <br/>
            <CardText className='reviewtext'>"Rick and Nicole did such am amazing job on our backyard. Anytime we had a question, no matter what it was, they always responded within 24 hours. They are extremely easy to contact and were very prompt with responses. Our backyard is perfect and they even went above and beyond what we wanted by surprising us with an awesome area they made with extra materials. Now we don't have to wait to put in the fire pit! Thank you so very much for our backyard and we will be coming back for any future work."</CardText>
            <CardTitle className='reviewname'>Kris S</CardTitle>
        </CardBody>
    </Card>,

    <Card className='reviewcard'>
        <CardBody>
        <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <br/>
            <CardText className='reviewtext'>"Rick and Nicole were extremely professional and personable. They communicated throughout the project. Nicole and Rick and their crew did a fantastic job making our flagstone path around our back yard. They even finished ahead of schedule. I would certainly recommend them for any landscaping or yard project and will be going with them again in the future."</CardText>
            <CardTitle className='reviewname'>Denise H</CardTitle>
        </CardBody>
    </Card>,

    <Card className='reviewcard'>
        <CardBody>
        <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <br/>
            <CardText className='reviewtext'>"Garfield's transformed our yard into an absolutely stunning, low-maintenance, and desert-friendly space. Working with Nicole, Louie, and Rick was a true pleasure, and I am beyond thrilled with the outcome. It looks like a totally different yard! They put an immense amount of thought and effort into their work, and it felt like they worked on our yard as if we were family. Very friendly, professional, and thoughtful. I would (and do) recommend them to everyone."</CardText>
            <CardTitle className='reviewname'>Carol O</CardTitle>
        </CardBody>
    </Card>,

    <Card className='reviewcard'>
        <CardBody>
        <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <br/>
            <CardText className='reviewtext'>"I had gotten to the place where I was too exhausted and worn out to finish my landscaping manicure!  I called for an estimate and KNEW this company was my choice.  Rick listened to my complaints and concerns.  Nicole was there to give me education on what I thought was a weed (Rosemary!)  The job was completed sooner than I imagined and not a twig left behind!!   Looks like I will be calling again for my backyard makeover for me to enjoy in retirement!!  Thank you so much for kindness, quality work and  a great front yard!!"</CardText>
            <CardTitle className='reviewname'>Annette M</CardTitle>
        </CardBody>
    </Card>,

    <Card className='reviewcard'>
        <CardBody>
        <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <FaStar className='star' />
            <br/>
            <CardText className='reviewtext'>"Garfield's Hunney-Dew is a 10/10, highly recommend. I was pretty desperate and quite stressed out about a leak that I had in my sprinkler system. The leak was at the manifold and quite close to my house foundation. My yard was a swamp. I called around to the "bigger" landscaping companies and received lack-luster, poor communication, and a general lack of concern...until I talked with Rick. He was able to come out the day I called him for an assessment. He fixed the leak two days later. On a weekend.. He arrived when he said he would, he was finished before he said he would be, and he charged less than what he quoted. Amazing from beginning to end. I will use him again and suggest you do too."</CardText>
            <CardTitle className='reviewname'>Cosette G</CardTitle>
        </CardBody>
    </Card>,


]

const Reviews = () => {
    return (
        
        <AliceCarousel mouseTracking items={items}
            autoPlay={true}
            autoPlayInterval={5000}
            infinite={true}
            disableButtonsControls={true}
        />
    )
}

export default Reviews;