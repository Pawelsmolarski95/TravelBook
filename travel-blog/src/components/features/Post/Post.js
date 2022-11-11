import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Post.module.scss'
import { Link } from 'react-router-dom';



const Post = (props) => {
   
    
    return (
       
        <Card  className='col-xl-3 col-md-6 col-sm-12 m-2 shadow p-3 mb-3 bg-white rounded media' >
            <Card.Img variant="top" style={{height:'15rem',width:'100%'}} src={props.image} />
            <h3 className={styles.title}>{props.destination}</h3>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.shortDescription}
                </Card.Text>
                <Card.Text>
                    <p>Data: {props.publishedDate}</p> 
                    <p>Traveler: {props.author} </p>
                </Card.Text>        
                <Link key={props.id} to={"/post/" + props.id}>
                    <Button variant="primary">Read more</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Post;