import Card from 'react-bootstrap/Card';
import image1 from '../img/home.webp';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';


function Home() {
    const [fetchdata, setfetchdata] = useState([])

    async function Getdata() {

        let result = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json", {


        })
        result = await result.json()
        // console.warn(result.articles)
        setfetchdata(result.articles)


    }


    useEffect(() => {
        Getdata();

    }, [])










    return (
        <>

            <h5 className='movetext'>
                Preserve People's Mandate, Ensure Fair Elections: Civil Society Groups Write to Returning Officers
                <Badge bg="danger">Trending</Badge>INDIA Bloc Writes to EC Over 'House Arrest' of Uttar Pradesh Candidate on Poll Day
                Seven Newborns Die in Fire at Delhi Hospital; <Badge bg="danger">Trending</Badge> Fire at Rajkot Game Zone Kills 33
                <Badge bg="danger">Trending</Badge> Bengal Braces for Cyclone Remal: Flights Cancelled,<Badge bg="danger">Trending</Badge>IMD Issues 'Severe' Warning
                PM Modi's Mysuru Stay Bills Pending Even After a Year, Hotel Threatens Legal Action: Report

            </h5>

            <Card className='card'>
                <Card.Img className='cardimg' variant="top" src={image1} />
                <Card.Body>
                    <Card.Text>
                        <h1><Card.Text>
                            We have numbers to form next govt… people will decide on Opposition, says Amit Shah
                        </Card.Text></h1>
                    </Card.Text>
                    <Card.Text>
                        Amit Shah Interview: Ruling out the possibility of Narendra Modi retiring, as was being made out by his opponents, he said not only will Modi be sworn in as Prime Minister again in June but “even in 2029, the Prime Minister will lead us”.
                    </Card.Text>
                    <Card.Text>
                        Maintaining that “we are in a comfortable position” and “already have the numbers” to form the next government, BJP leader and Union Home Minister Amit Shah has said while he agrees that a strong Opposition is good for democracy, “it’s the janata (people) who will decide that” and it cannot be determined by the wishes of a section.

                        Shah made these remarks in an interview with The Indian Express Saturday at his residence in New Delhi, shortly after polling ended for the sixth phase of the elections – the seventh and last phase is on June 1.

                        Asked to comment on the growing bitterness between the ruling party and the Opposition, Shah laid the blame at Congress leader Rahul Gandhi’s door, holding him responsible for the downslide in the country’s political standards.
                        “In my opinion, it’s after the entry of Rahul Gandhi in the party that the Congress’s behaviour has changed, the standards of politics have fallen after that.” This, he said, had also influenced the attitude of those parties which had formed a “gathbandhan” with the Congress.

                        He was confident that at the end of the sixth phase of polling, the BJP was in a position to form the government. “We are somewhere between 300 and 310… this is minus the last phase… we are in a comfortable position,” he said. Ruling out the possibility of Narendra Modi retiring, as was being made out by his opponents, he said not only will Modi be sworn in as Prime Minister again in June but “even in 2029, the Prime Minister will lead us”.
                    </Card.Text>
                </Card.Body>
            </Card>


            <section className='content'>

                <center><h1><Badge bg="light">Most Read News</Badge>
                </h1></center>



                {
                    fetchdata.map((articles) =>

                        <Card style={{ maxWidth: '100%', }}>
                            <Row className='g-0'>
                                <Col md='4'>
                                    <Card.Img src={articles.urlToImage} alt='...' fluid />
                                </Col>
                                <Col md='8'>
                                    <Card.Body>
                                        <Card.Title>{articles.title}</Card.Title>
                                        <Card.Text>
                                            {articles.description}
                                        </Card.Text>
                                        <Card.Text>
                                            {articles.content}
                                        </Card.Text>
                                        <Card.Text>
                                            <small className='text-muted'>Author:<span> {articles.author}</span></small>
                                        </Card.Text>


                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    )
                }


            </section>
        </>
    );
}

export default Home;