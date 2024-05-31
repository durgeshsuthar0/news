import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import crdimg from '../img/card.jpeg'
import img1 from '../img/tama-idaya_ce40094de4f6c92b3cbeac245a8ae684.avif'
import img2 from '../img/rajasthan_95911b7fd2f58fe3c71cacdfc4d3797f.avif'
import img3 from '../img/bihar-news_762f22658609ae396249847156496b67.avif'
import img4 from '../img/t20-world-cup-2024_22d2d4c49aa2a591dd7f24b2f5fca0fe.avif'
function Crd() {

  return (
    <div className='crd'>
    <Row xs={1} md={2} className="g-4">
      
        <Col >
          <Card>
            <Card.Img variant="top" src={img1}/>
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
            <Card.Img variant="top" src={img2}/>
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
            <Card.Img variant="top" src={img3}/>
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
            <Card.Img variant="top" src={img4}/>
            <Card.Body>
              <Card.Title  className='titletxt'>T20 World cup 2024: </Card.Title>
              <Card.Text>
              टूर्नामेंट शुरू होने से पहले भारत ने किया कड़ा अभ्यास, हार्दिक ने घंटे भर तक की गेंदबाजी
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
     
    </Row>
    </div>
  );
}

export default Crd;