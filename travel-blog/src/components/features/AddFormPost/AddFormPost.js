import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './AddFormPost.module.scss'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
 

const AddFormPost = () => {
    
    const dispatch = useDispatch()
    
    const [title,setTitle] = useState();
    const [author,setAuthor] = useState();
    const [publishedDate,setPublishedData] = useState();
    const [image, setImage] = useState();
    const [shortDescription, setShortDescription] = useState();
    const [mainDescription, setMainDescription] = useState();
    const [destination, setDestination] = useState(); 
    
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addPost({title, author, publishedDate, image, shortDescription, mainDescription, destination}))
        navigate(-1)
    }
    
    return (
        <Container className=' col-xl-9 my-4'>
            <h1 className={styles.h1}>Add post</h1>
            <Form className='d-flex flex-column' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicDestination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
                </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Author"value={author} onChange={e => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicData">
                    <Form.Label>Published</Form.Label>
                    <Form.Control type="text" placeholder="DD-MM-YYYY" value={publishedDate} onChange={e => setPublishedData(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="URL Adress" value={image} onChange={e => setImage(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicShortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control type="text" placeholder="Short Description" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                </Form.Group>
                <Form.Label>Main Description</Form.Label>
                <FloatingLabel controlId="floatingTextarea2" label="Main Description">
                    <Form.Control
                    as="textarea"
                    placeholder="Main Description"
                    style={{ height: '100px' }}
                    value={mainDescription}
                    onChange={e => setMainDescription(e.target.value)}
                    />
                </FloatingLabel>
        
                <Button variant="primary" type="submit" className='my-5 align-self-end' onSubmit={handleSubmit}>
                    Submit
                </Button>
            </Form>
            
        </Container>
        
    ) 
    
}

export default AddFormPost;