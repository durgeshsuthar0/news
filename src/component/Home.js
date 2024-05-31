import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Crd from './Crd';



function Home() {
    const [fetchdata, setfetchdata] = useState([])

    // async function Getdata() {

    //     let result = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json", {


    //     })
    //     result = await result.json()
    //     // console.warn(result.articles)
    //     setfetchdata(result.articles)


    // }





    useEffect(() => {
        fetch("/news").then(
            response => response.json()
        ).then(
            data => {
                console.warn(data)
                setfetchdata(data)
            }
        )

    }, [])










    return (
        <div className='home'>
            <div className='mov'>
                <h5 className='movetext'>
                    Preserve People's Mandate, Ensure Fair Elections: Civil Society Groups Write to Returning Officers
                    <Badge bg="danger">Trending</Badge>INDIA Bloc Writes to EC Over 'House Arrest' of Uttar Pradesh Candidate on Poll Day
                    Seven Newborns Die in Fire at Delhi Hospital; <Badge bg="danger">Trending</Badge> Fire at Rajkot Game Zone Kills 33
                    <Badge bg="danger">Trending</Badge> Bengal Braces for Cyclone Remal: Flights Cancelled,<Badge bg="danger">Trending</Badge>IMD Issues 'Severe' Warning
                    PM Modi's Mysuru Stay Bills Pending Even After a Year, Hotel Threatens Legal Action: Report

                </h5></div>


            <div className='toptxt'>
                <center><h1><Badge bg="light"><span>Top News</span></Badge>
                </h1></center>
            </div>




            <Card className='card'>
                <Card.Text>
                        <h1><Card.Text>
                            <b>We have numbers to form next govt… people will decide on Opposition, says Amit Shah</b>
                        </Card.Text></h1>
                    </Card.Text>
                <div className='video'>
                    <ReactPlayer className="vd" url="https://www.youtube.com/watch?v=6WaG9hVOhM0" controls={true}></ReactPlayer>
                </div>

                <Card.Text className='cardtext'>
                    Amit Shah Interview: Ruling out the possibility of Narendra Modi retiring, as was being made out by his opponents, he said not only will Modi be sworn in as Prime Minister again in June but “even in 2029, the Prime Minister will lead us”.
                </Card.Text>
                <Card.Body>
                   
{/* 
                    <Card.Text className='cardtext'>
                        Maintaining that “we are in a comfortable position” and “already have the numbers” to form the next government, BJP leader and Union Home Minister Amit Shah has said while he agrees that a strong Opposition is good for democracy, “it’s the janata (people) who will decide that” and it cannot be determined by the wishes of a section.

                        Shah made these remarks in an interview with The Indian Express Saturday at his residence in New Delhi, shortly after polling ended for the sixth phase of the elections – the seventh and last phase is on June 1.

            

                    </Card.Text> */}
                </Card.Body>
            </Card>

            <div className='toptxt'>
                <center><h1><Badge bg="light"><span>Trending Videos</span></Badge>
                </h1></center>
            </div>

            <Row xs={1} md={2} className="g-4">
               
                    <Col >
                        <Card>
                        <iframe  src="https://www.youtube.com/embed/AsE0Tqxrres?si=fCrcmS9WHLL8IKgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <Card.Body>
                                <Card.Title>PM Modi Live | Public meeting in Hoshiarpur, Punjab | Lok Sabha Election 2024</Card.Title>
                                <Card.Text>
                                    {/* This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer. */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card>
                            <iframe src="https://www.youtube.com/embed/cxH1ikA_RDY?si=e20mxqwzasY9ov6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <Card.Body>
                                <Card.Title>Narendra Modi | Why Will PM Modi Meditate For 24 Hours In Kanniyakumari | Lok Sabha Elections</Card.Title>
                                <Card.Text>
                                    {/* This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer. */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
               
            </Row>




            <section className='content'>

                <center><h1><Badge bg="light">Most Read News</Badge>
                </h1></center>



                {
                    fetchdata.map((data) =>

                        <Card style={{ maxWidth: '100%', }}>
                            <Row className='g-0'>
                                <Col md='4'>
                                    {/* <Card.Img src={articles.urlToImage} alt='...' fluid /> */}
                                </Col>
                                <Col md='8'>
                                    <Card.Body>
                                        <Card.Title>{data.content}</Card.Title>
                                        <Card.Text>
                                            {data.discription}
                                        </Card.Text>
                                        <Card.Text>
                                            {data.title}
                                        </Card.Text>
                                        <Card.Text>
                                            <small className='text-muted'>Author:<span></span></small>
                                        </Card.Text>


                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    )
                }

                <Crd />
            </section>
        </div>
    );
}

export default Home;