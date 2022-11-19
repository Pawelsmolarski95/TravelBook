import styles from './PostForm.module.scss'
import { Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoryRedux';





const PostForm = ({action,actionText, ...props}) => {  
    
    
    const [title,setTitle] = useState(props.title || '');
    const [author,setAuthor] = useState(props.author || '');
    const [publishedData,setPublishedData] = useState(props.publishedData || '');
    const [image, setImage] = useState(props.image || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [mainDescription, setMainDescription] = useState(props.mainDescription || '');
    const [destination, setDestination] = useState(props.destination || ''); 
    const [category, setCategory] = useState(props.category || '');
    const [errorMainDescripion, setErrorMainDescription] = useState(false);
    const [errorPublishedData, setErrorPublishedData] = useState(false);
    
    
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    
    const categories = useSelector(getAllCategories);
     
    const handleSubmit = () => {
        
        setErrorMainDescription(!mainDescription);
        setErrorPublishedData(!publishedData);
        
        if(mainDescription && publishedData){ 
            action({title, author, publishedData, image, shortDescription, mainDescription, destination, category})
        }
        
    };
        
        return (
            <Container className=' col-xl-9 my-4'>
                <h1 className={styles.h1}>{actionText}</h1>
                
                <Form onSubmit={validate(handleSubmit)} className='d-flex flex-column' >
                    <Form.Group className="mb-3" controlId="formBasicDestination">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control
                            {...register("destination", {required:true})}
                            type="text" 
                            placeholder="Destination" 
                            value={destination} 
                            onChange={(e) => setDestination(e.target.value)}               
                        />
                        {errors.destination && <span className="d-block form-text text-danger mt-2">This field is required</span>}
                    </Form.Group>
                    
                     <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            {...register("title", {required: true, minLength: 3})}
                            type="text" 
                            placeholder="Title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                        {errors.title && <span className="d-block form-text text-danger mt-2">Title is too short(min: 3)</span>}
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            {...register("author", {required: true, minLength: 3 })}
                            type="text" 
                            placeholder="Author" 
                            value={author} 
                            onChange={(e) => setAuthor(e.target.value)} 
                        />
                        {errors.author && <span className="d-block form-text text-danger mt-2">Author is too short(min: 3)</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicData">
                        <Form.Label>Published</Form.Label>
                        <DatePicker selected={publishedData} onChange={setPublishedData} />
                        {errorPublishedData && <span className="d-block form-text text-danger mt-2">Choose date yours journey</span>}
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Categories</Form.Label>
                        <Form.Control 
                            as='select'
                            placeholder='Choose region of the world'
                            onChange={(e) => setCategory(e.target.value)}>
                            {categories.map((category, index) =>
                                <option 
                                    key={index}
                                    value={category.name}>{category.name}</option>
                            )}
                        </Form.Control>
                        
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
                            {...register("shortDescription",{required:true, minLength: 20})}
                            type="text" 
                            placeholder="Short Description" 
                            value={shortDescription} 
                            onChange={(e) => setShortDescription(e.target.value)}    
                        />
                        {errors.shortDescription && <span className="d-block form-text text-danger mt-2">Your description is too short(min: 20)</span>}
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicShortDescription">
                        <Form.Label>Main Description</Form.Label>
                        <ReactQuill 
                            theme="snow" 
                            value={mainDescription} 
                            onChange={setMainDescription} 
                            placeholder="Type here"  
                        />
                        {errorMainDescripion && <span className="d-block form-text text-danger mt-2">Main Description can't be empty</span>}
                        <Button variant="primary" type="submit" className='my-5 align-self-end'>
                            {actionText}
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
            
        ) 
}
export default PostForm;