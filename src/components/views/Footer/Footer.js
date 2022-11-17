import Card from 'react-bootstrap/Card';


const Footer = () => {
    return (
    <Card bg="dark" variant="dark" text="white"  className="text-center  text-muted">
        <Card.Body>Copyright <span className=" fa fa-copyright"> </span> YourTravelBlog</Card.Body>
    </Card>
  );
};


export default Footer;