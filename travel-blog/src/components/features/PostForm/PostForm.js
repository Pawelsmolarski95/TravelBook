import styles from './PostForm.module.scss'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';




const PostForm = ({action,actionText, ...props}) => {
    
    
    
    const [title,setTitle] = useState(props.title || '');
    const [author,setAuthor] = useState(props.author || '');
    const [publishedDate,setPublishedData] = useState(props.publishedDate || '');
    const [image, setImage] = useState(props.image || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [mainDescription, setMainDescription] = useState(props.mainDescription || '');
    const [destination, setDestination] = useState(props.destination || ''); 
    
    
     
    const handleSubmit = (e) => {
        e.preventDefault();
        action({title, author, publishedDate, image, shortDescription, mainDescription, destination})
    };
    
        return (
            <Container className=' col-xl-9 my-4'>
                <h1 className={styles.h1}>{actionText}</h1>
                
                <Form onSubmit={handleSubmit} className='d-flex flex-column' >
                    <Form.Group className="mb-3" controlId="formBasicDestination">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control
                            type="text" 
                            placeholder="Destination" 
                            value={destination} 
                            onChange={(e) => setDestination(e.target.value)}               
                        />
                    </Form.Group>
                    
                     <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Title" 
                            value={title } 
                            onChange={(e) => setTitle(e.target.value)} 
                            />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Author" 
                            value={author} 
                            onChange={(e) => setAuthor(e.target.value)} 
                            />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicData">
                        <Form.Label>Published</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="DD-MM-YYYY" 
                            value={publishedDate} 
                            onChange={(e) => setPublishedData(e.target.value)}      
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="URL Adress" 
                            value={image} 
                            onChange={(e) => setImage(e.target.value)}    
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicShortDescription">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Short Description" 
                            value={shortDescription } 
                            onChange={(e) => setShortDescription(e.target.value)}    
                            />
                    </Form.Group>
                    
                    <Form.Label>Main Description</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Main Description">
                        <Form.Control
                        as="textarea"
                        placeholder="Main Description"
                        style={{ height: '150px' }}
                        value={mainDescription}
                        onChange={(e) => setMainDescription(e.target.value)}
                        />
                    </FloatingLabel>
            
                    <Button variant="primary" type="submit" className='my-5 align-self-end'>
                        {actionText}
                    </Button>
                </Form>
            </Container>
            
        ) 
}
export default PostForm;