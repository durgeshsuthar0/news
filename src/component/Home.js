import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import img4 from '../img/kata-fakatara-3_ac992b1ee8a99c79b45d775a0a756428.avif'
import img1 from '../img/up-lok-sabha-election-2024_c83ffc1de2e309003324dd118fd9a991.avif'
import img2 from '../img/salmana-khana_463275d3165975ef257f30e24d49da71.avif'
import img3 from '../img/bihar-news_13e50c0d95921e1e133d69e4c6c834e6.avif'
import img5 from '../img/lkasabha-canava-2024-ka-alga-alga-caranae-ma-matathana-paratashata_02ae59a0f6b752b626bc2cac72b2f64d.avif'
import img6 from '../img/ravavara-sa-l-ka-rada-alrata_050f612321ed4f6cf3da7f5dd2416776.avif'
import Mostreadnews from './Mostreadnews';

function Home() {
    const [fetchdata, setfetchdata] = useState([])

    // async function Getdata() {

    //     let result = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json", {


    //     })
    //     result = await result.json()
    //     // console.warn(result.articles)
    //     setfetchdata(result.articles)


    // }





    // useEffect(() => {
    //     fetch("/news").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             console.warn(data)
    //             setfetchdata(data)
    //         }
    //     )

    // }, [])










    return (

        <div style={{width:"100%" }} className='home'>


            <div className='mov'>
                <h5 className='movetext'>
                    Preserve People's Mandate, Ensure Fair Elections: Civil Society Groups Write to Returning Officers
                    <Badge bg="danger">Trending</Badge>INDIA Bloc Writes to EC Over 'House Arrest' of Uttar Pradesh Candidate on Poll Day
                    Seven Newborns Die in Fire at Delhi Hospital; <Badge bg="danger">Trending</Badge> Fire at Rajkot Game Zone Kills 33
                    <Badge bg="danger">Trending</Badge> Bengal Braces for Cyclone Remal: Flights Cancelled,<Badge bg="danger">Trending</Badge>IMD Issues 'Severe' Warning
                    PM Modi's Mysuru Stay Bills Pending Even After a Year, Hotel Threatens Legal Action: Report
                </h5>
            </div>



            <div className='toptxt'>
                <center><h1><Badge bg="none"><span>Top News</span></Badge>
                </h1></center>
            </div>

            <center><h1 style={{ fontWeight: '600', padding: '0px 10%' }}>सातवें चरण में 3 बजे तक 49.68% मतदान; झारखंड में सबसे ज्यादा वोटिंग, बिहार में रफ्तार सुस्त</h1></center>




            <section style={{width:"100%" }}>
                <div class="grand_parent">
                    <div class="parents">
                        <div class="child">

                            <div className='toptxt'>
                              <h1><Badge bg="none"><span>Lok Sabha Elections</span></Badge>
                                </h1>
                            </div>

                            <Col>
                                <Card className="mb-3" style={{ border: 'none', backgroundColor: 'rgb(246, 229, 229)', padding: '5px', maxWidth: '670px' }}>
                                    <Row className="g-0">
                                        <Col md={4}>
                                            <p style={{ margin: '1px', color: 'grey' }}>UP</p>
                                            <Card.Img src={img1} />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body>
                                                <Card.Text style={{ fontSize: '20px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                                                    <span style={{ color: 'rgb(215, 21, 21)' }}>UP Lok Sabha Election Voting Live:</span>  अखिलेश के ट्वीट का वाराणसी डीएम ने दिया जवाब, यहां अब तक न पड़ा एक भी वोट

                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="mb-3" style={{ border: 'none', backgroundColor: 'rgb(246, 229, 229)', padding: '5px', maxWidth: '670px' }}>
                                    <Row className="g-0">
                                        <Col md={4}>
                                            <p style={{ margin: '1px', color: 'grey' }}>Bihar</p>
                                            <Card.Img src={img3} />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body>
                                                <Card.Text style={{ fontSize: '20px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                                                    <span style={{ color: 'rgb(215, 21, 21)' }}>Bihar Lok Sabha Election Live:</span> पटनासाहिब में सबसे कम मतदान, इस कारण लौटते रहे वोटर; इन बूथों पर वोट बहिष्कार
                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="mb-3" style={{ border: 'none', backgroundColor: 'rgb(246, 229, 229)', padding: '5px', maxWidth: '670px' }}>
                                    <Row className="g-0">
                                        <Col md={4}>
                                            <p style={{ margin: '1px', color: 'grey' }}>Election</p>
                                            <Card.Img src={img5} />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body>
                                                <Card.Text style={{ fontSize: '20px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                                                    <span style={{ color: 'rgb(215, 21, 21)' }}>LS Poll:</span> शुरुआती सुस्ती के बाद चौथे-पांचवें चरण में बढ़ा मतदान, छठे दौर में आई कमी, अब अंतिम चरण में क्या होगा?
                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>



                        </div>



                        <div class="child">

                            <div  className='toptxt'>
                                <h1 ><Badge  bg="none">Big news</Badge>
                                </h1>
                            </div>

                            {/* <Row xs={1} md={2} className="g-4">

              <Col >
                <Card>
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title className='titletxt'>IND vs BAN:</Card.Title>
                    <Card.Text>
                      टी20 विश्व कप से पहले बांग्लादेश के खिलाफ लड़ेगा भारत, टीम की तैयारियों को परखने का सुनहरा मौका
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col >
                <Card>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title className='titletxt'>Rajasthan:</Card.Title>
                    <Card.Text>
                      OPS की जगह नया पेंशन मॉडल लाने की तैयारी, आंध्र प्रदेश की तर्ज पर 50 % पेंशन लागू कर सकती है सरकार
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col >
                <Card>
                  <Card.Img variant="top" src={img3} />
                  <Card.Body>
                    <Card.Title className='titletxt'>Bihar News: </Card.Title>
                    <Card.Text>
                      गया में भीषण गर्मी से छह लोगों की मौत; 35 लोगों की तबीयत बिगड़ी; लू का कहर जारी

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col >
                <Card>
                  <p>Cicket</p>
                  <Card.Img variant="top" src={img4} />
                  <Card.Body>
                    <Card.Title className='titletxt'>T20 World cup 2024: </Card.Title>
                    <Card.Text>
                      टूर्नामेंट शुरू होने से पहले भारत ने किया कड़ा अभ्यास, हार्दिक ने घंटे भर तक की गेंदबाजी
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row> */}

                            <Col>
                                <Card className="mb-3" style={{ border: 'none', backgroundColor: 'rgb(246, 229, 229)', padding: '5px', maxWidth: '670px' }}>
                                    <Row className="g-0">
                                        <Col md={4}>
                                            <p style={{ margin: '1px', color: 'grey' }}>Salman Khan</p>
                                            <Card.Img src={img2} />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body>
                                                <Card.Text style={{ fontSize: '20px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                                                    <span style={{ color: 'rgb(215, 21, 21)' }}>Salman Khan:</span> सलमान पर हमला करने की थी साजिश, पाकिस्तान से मंगवा रहे थे हथियार; पकड़े गए लॉरेंस गैंग के सदस्य

                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="mb-3" style={{ border: 'none', backgroundColor: 'rgb(246, 229, 229)', padding: '5px', maxWidth: '670px' }}>
                                    <Row className="g-0">
                                        <Col md={4}>
                                            <p style={{ margin: '1px', color: 'grey' }}>Kota</p>
                                            <Card.Img src={img4} />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body>
                                                <Card.Text style={{ fontSize: '20px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                                                    <span style={{ color: 'rgb(215, 21, 21)' }}> Kota Factory S 3 Release Date:</span>  ‘सचिव जी’ ने साझा कर दिया गणित का गलत फार्मूला, नेटफ्लिक्स में दिन भर रही हलचल
                                                    यूपी में लू चल रही है।

                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col>
                                <Card className="mb-3" style={{ border: 'none', backgroundColor: 'rgb(246, 229, 229)', padding: '5px', maxWidth: '670px' }}>
                                    <Row className="g-0">
                                        <Col md={4}>
                                            <p style={{ margin: '1px', color: 'grey' }}>UP</p>
                                            <Card.Img src={img6} />
                                        </Col>
                                        <Col md={8}>
                                            <Card.Body>
                                                <Card.Text style={{ fontSize: '20px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                                                    <span style={{ color: 'rgb(215, 21, 21)' }}>UP:</span> यूपी: लू लगने से होने वाली मृत्यु पर मिलेगा चार लाख का मुआवजा, मृतक का पोस्टमार्टम कराना होगा जरूरी
                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                        </div>

                    </div>
                </div>
            </section>







            <section style={{ paddingTop: '20px', backgroundColor:' rgb(240, 240, 240)',paddingBottom:'20px',width:"100%" }}>

                <Card style={{ paddingTop: '20px', border: 'none' }} className='card'>
                    <Card.Text>
                        <h1><Card.Text>
                            <b>We have numbers to form next govt… people will decide on Opposition, says Amit Shah</b>
                        </Card.Text></h1>
                    </Card.Text>
                    <div className='video'>
                        <ReactPlayer className="vd" url="https://www.youtube.com/watch?v=6WaG9hVOhM0" controls={true}></ReactPlayer>
                    </div>

                    <Card.Text style={{ marginTop: '5px', marginBottom: '-10px' }} className='cardtext'>
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
                    <center><h1><Badge bg="none"><span>Trending Videos</span></Badge>
                    </h1></center>
                </div>

                <Row xs={1} md={4} className="g-0">

                    <Col >
                        <Card style={{ border: 'none',height:'19rem'}}>
                            <iframe src="https://www.youtube.com/embed/AsE0Tqxrres?si=fCrcmS9WHLL8IKgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                    <Card style={{ border: 'none',height:'19rem'}}>
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
                    <Col >
                    <Card style={{ border: 'none',height:'19rem'}}>
                            <iframe src="https://www.youtube.com/embed/AsE0Tqxrres?si=fCrcmS9WHLL8IKgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                    <Card style={{ border: 'none',height:'19rem'}}>
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

            </section>





            <Mostreadnews />

        </div>
    );
}

export default Home;