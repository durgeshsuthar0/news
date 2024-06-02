import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img12 from '../img/up-lok-sabha-election-2024_c83ffc1de2e309003324dd118fd9a991.avif'
import img13 from '../img/utatara-parathasha-egajata-pal-2024_52126dbce534f1474cd3ed642130f3bf.avif'
import img14 from '../img/voting-punjab-voting-vote_b9e28446ec5d36aa3dce4fc592100ee3.avif'
import img21 from '../img/road-accident_0de527236484630ef73e99726871b171.avif'
import img22 from '../img/harbhajan-singh_e4f35b335b00b1c26aaac31131acdf2d.avif'
import ListGroup from 'react-bootstrap/ListGroup';
function Mostreadnews() {

  return (


    <section style={{backgroundColor:' rgb(240, 240, 240)',marginTop:'-20px'}}>

<div className='toptxt'>
                <center><h1><Badge bg="none"><span>Top News</span></Badge>
                </h1></center>
            </div>
    <div style={{
      width: '100vw', height: 'auto',

    }} class="grand_parent1">

      <div style={{
        width: '100vw', height: 'auto', margin: 'auto',
        display: 'flex', justifyContent: 'space-around',
        flexWrap: 'wrap', transition: 'all 0.2 linear'
      }} class="parents1">

        <div style={{
          height: 'auto',
          flex: '1 1 200px',
          margin: '20px 5px'
        }} class="child1">

          <h1 style={{ color: 'black', padding: '10px 20px', fontWeight: '600', fontSize: '25px' }}>Latest News</h1>

          <Card style={{ width: '100%', margin: '10px 0px', padding: '0px'}}>
            <Card.Body>
              <Card.Text style={{ fontSize: '18px', fontWeight: '600' }}>
                <span style={{ color: 'rgb(215, 21, 21)' }}>UK: </span>लंदन में हुई गोलीबारी में घायल भारतीय लड़की की हालत गंभीर, रेस्तरां पर हुए हमले में लगी थी गोली
              </Card.Text>
              <p style={{ margin: '0px', textAlign: 'start' }}>47 s ago</p>
            </Card.Body>
          </Card>

          <Card style={{ width: '100%', margin: '10px 0px', padding: '0px' }}>
            <Card.Body>
              <Card.Text style={{ fontSize: '18px', fontWeight: '600' }}>
                <span style={{ color: 'rgb(215, 21, 21)' }}>USA vs CAN Live Score: </span> अमेरिका के लिए आंद्रिस और आरोन की तूफानी बल्लेबाजी, जोंस ने जड़ा अर्धशतक
              </Card.Text>
              <p style={{ margin: '0px', textAlign: 'start' }}>50 s ago</p>
            </Card.Body>
          </Card>

          <Card style={{ width: '100%', margin: '10px 0px', padding: '0px' }}>
            <Card.Body>
              <Card.Text style={{ fontSize: '18px', fontWeight: '600' }}>
                <span style={{ color: 'rgb(215, 21, 21)' }}>Arunachal Assembly Election Result: </span> पेमा खांडू हैट्रिक लगाने के लिए तैयार, कांग्रेस का निराशाजनक प्रदर्शन
              </Card.Text>
              <p style={{ margin: '0px', textAlign: 'start' }}>1 min ago</p>
            </Card.Body>
          </Card>

          <Card style={{ width: '100%', margin: '10px 0px', padding: '0px' }}>
            <Card.Body>
              <Card.Text style={{ fontSize: '18px', fontWeight: '600' }}>
                <span style={{ color: 'rgb(215, 21, 21)' }}>Arunachal Pradesh Election Result Live: </span> अरुणाचल के रुझानों में भाजपा को बहुमत, एनपीपी छह सीटों पर आगे</Card.Text>
              <p style={{ margin: '0px', textAlign: 'start' }}>11 min ago</p>
            </Card.Body>
          </Card>


        </div>



        <div style={{
          height: 'auto',
          flex: '1 1 200px',
          margin: '20px 05px'
        }} class="child2">


          <Card style={{ margin: '10px 0px', padding: '0px' }}>
            <Card.Body>
              <Card.Text style={{ fontSize: "20px", fontWeight: '600', marginTop: "-10px" }}>
                <span style={{ color: 'rgb(215, 21, 21)' }}> Dinesh Karthik News: </span>
                दिनेश कार्तिक ने की क्रिकेट से संन्यास की घोषणा, पोस्ट के जरिए कोच-फैंस को दिया धन्यवाद
              </Card.Text>

            </Card.Body>
            <Card.Img variant="top" src={img12} />
            <Card.Body>
              <Card.Text style={{ fontWeight: '600' }}>
                Dinesh Karthik Retirement: टीम इंडिया के दिग्गज विकेटकीपर बल्लेबाज दिनेश कार्तिक ने अंतरराष्ट्रीय क्रिकेट से संन्यास की घोषणा कर दी है। शनिवार को अनुभवी खिलाड़ी ने सोशल मीडिया के जरिए इसका एलान किया। उन्होंने भावुक पोस्ट के जरिए फैंस और कोच को धन्यवाद दिया।
              </Card.Text>
              <ListGroup className="list-group-flush">
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card style={{ margin: '0px', padding: '0px' }}>
            <Card.Body>
              {/* <Card.Text style={{ fontSize: "20px", fontWeight: '600' }}>
                <span style={{ color: 'rgb(215, 21, 21)' }}>  बदायूं में बड़ा हादसा: </span>
                सड़क किनारे पेड़ की छांव में बैठे छह लोगों को पिकअप ने कुचला, चार की मौत
              </Card.Text> */}

            </Card.Body>
            <Card.Img variant="top" src={img21} />
            <Card.Body>
              <Card.Text style={{ fontWeight: '600' }}>
                Dinesh Karthik Retirement: टीम इंडिया के दिग्गज विकेटकीपर बल्लेबाज दिनेश कार्तिक ने अंतरराष्ट्रीय क्रिकेट से संन्यास की घोषणा कर दी है। शनिवार को अनुभवी खिलाड़ी ने सोशल मीडिया के जरिए इसका एलान किया। उन्होंने भावुक पोस्ट के जरिए फैंस और कोच को धन्यवाद दिया।
              </Card.Text>
              <ListGroup className="list-group-flush">
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </ListGroup>
            </Card.Body>
          </Card>




          <Col>
            <Card className="mb-3" style={{  padding: '5px', maxWidth: '670px', margin: '20px 0px' }}>
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body>
                    <Card.Text style={{ fontSize: '18px', fontWeight: '600', marginTop: '-10px', justifyContent: 'start' }} >
                      <span style={{ color: 'rgb(215, 21, 21)' }}> T20 World Cup: </span>  टी20 विश्व कप के लिए हरभजन सिंह ने चुनी भारत की प्लेइंग 11, शिवम-कुलदीप को नहीं किया शामिल

                    </Card.Text>
                    <hr style={{ width: '400px', margin: '10px 0px' }}></hr>
                    <Card.Text style={{ textAlign: 'start',marginBottom:'-10px',marginTop:'-5px' }}>
                      <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={4}>
                  <Card.Img src={img22} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3" style={{ padding: '5px', maxWidth: '670px', margin: '20px 0px' }}>
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body>
                    <Card.Text style={{ fontSize: '18px', fontWeight: '600', marginTop: '-10px', justifyContent: 'start' }} >
                      <span style={{ color: 'rgb(215, 21, 21)' }}> T20 World Cup: </span>  टी20 विश्व कप के लिए हरभजन सिंह ने चुनी भारत की प्लेइंग 11, शिवम-कुलदीप को नहीं किया शामिल

                    </Card.Text>
                    <hr style={{ width: '400px', margin: '10px 0px' }}></hr>
                    <Card.Text style={{ textAlign: 'start',marginBottom:'-10px',marginTop:'-5px' }}>
                      <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={4}>
                  <Card.Img src={img22} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3" style={{  padding: '5px', maxWidth: '670px', margin: '20px 0px' }}>
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body>
                    <Card.Text style={{ fontSize: '18px', fontWeight: '600', marginTop: '-10px', justifyContent: 'start' }} >
                      <span style={{ color: 'rgb(215, 21, 21)' }}> T20 World Cup: </span>  टी20 विश्व कप के लिए हरभजन सिंह ने चुनी भारत की प्लेइंग 11, शिवम-कुलदीप को नहीं किया शामिल

                    </Card.Text>
                    <hr style={{ width: '400px', margin: '10px 0px' }}></hr>
                    <Card.Text style={{ textAlign: 'start',marginBottom:'-10px',marginTop:'-5px' }}>
                      <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={4}>
                  <Card.Img src={img22} />
                </Col>
              </Row>
            </Card>
          </Col>



        </div>



        <div style={{
          height: 'auto',
          flex: '1 1 200px',
          margin: '20px 5px'
        }} class="child3">

          <h1 style={{ color: 'black', padding: '10px 20px', fontWeight: '600', fontSize: '25px' }}>Trending</h1>

          <Col>
            <Card className="mb-3" style={{  padding: '5px', maxWidth: '670px', margin: '0px' }}>
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body>
                    <Card.Text style={{ fontSize: '15px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                      <span style={{ color: 'rgb(215, 21, 21)' }}>Exit Poll 2024:</span>  11 एग्जिट पोल्स में भाजपा+ को बहुमत का अनुमान, विपक्षी गठबंधन के 150 के आसपास सिमटने के आसार

                    </Card.Text>
                    <Card.Text style={{textAlign:'start', marginBottom:'-5px'}}>
                      <small className="text-medium-emphasis">Last updated 1 min ago</small>
                    </Card.Text>
                  </Card.Body>

                </Col>
                <Col md={4}>
                  <Card.Img style={{ padding: '5px' }} src={img12} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3" style={{  padding: '5px', maxWidth: '670px', margin: '0px' }}>
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body>
                    <Card.Text style={{ fontSize: '15px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                      <span style={{ color: 'rgb(215, 21, 21)' }}>UP Exit Poll Results Live:</span>  यूपी में फिर दिख सकता है मोदी-योगी का जादू, पिछली बार से NDA के मजबूत होने के संकेत

                    </Card.Text>
                    <Card.Text style={{textAlign:'start', marginBottom:'-5px'}}>
                      <small className="text-medium-emphasis">Last updated 2 min ago</small>
                    </Card.Text>
                  </Card.Body>

                </Col>
                <Col md={4}>
                  <Card.Img style={{ padding: '5px' }} src={img13} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3" style={{  padding: '5px', maxWidth: '670px', margin: '0px' }}>
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body>
                    <Card.Text style={{ fontSize: '15px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                      <span style={{ color: 'rgb(215, 21, 21)' }}>UP Lok Sabha Election Voting Live:</span>  यूपी में अंतिम चरण की 13 सीटों पर मतदान खत्म, 55 फीसदी से ज्यादा हुई वोटिंग

                    </Card.Text>
                    <Card.Text style={{textAlign:'start', marginBottom:'-5px'}}>
                      <small className="text-medium-emphasis">Last updated 3 min ago</small>
                    </Card.Text>
                  </Card.Body>

                </Col>
                <Col md={4}>
                  <Card.Img style={{ padding: '5px' }} src={img14} />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col>
            <Card className="mb-3" style={{ padding: '5px', maxWidth: '670px', margin: '0px' }}>
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body>
                    <Card.Text style={{ fontSize: '15px', fontWeight: '600', marginTop: '-2px', justifyContent: 'start' }} >
                      <span style={{ color: 'rgb(215, 21, 21)' }}>UP Lok Sabha Election Voting Live:</span>  अखिलेश के ट्वीट का वाराणसी डीएम ने दिया जवाब, यहां अब तक न पड़ा एक भी वोट

                    </Card.Text>
                    <Card.Text style={{textAlign:'start', marginBottom:'-5px'}}>
                      <small className="text-medium-emphasis">Last updated 4 min ago</small>
                    </Card.Text>
                  </Card.Body>

                </Col>
                <Col md={4}>
                  <Card.Img style={{ padding: '5px' }} src={img12} />
                </Col>
              </Row>
            </Card>
          </Col>

        </div>
      </div>
    </div>

  </section>



   
    


  );
}

export default Mostreadnews;