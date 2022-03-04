import "./style.css";
import NavBar from "../NavBar";
import {Card} from 'react-bootstrap'

const About = () => {
  return (
    <div>
      <NavBar />
      <div>
        <p>Meet the team who brought Fluffr to life! </p>
      </div>
      <div>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
  </Card>

        
      </div>
    </div>
  );
};

export default About;
