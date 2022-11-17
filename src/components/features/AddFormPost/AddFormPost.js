import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import { Link } from 'react-router-dom';
import styles  from './AddFormPost.module.scss'


const AddFormPost = () => {
    
    const dispatch = useDispatch()

    const navigate = useNavigate();
    
    const handleSubmit = post => {
        dispatch(
            addPost(post))
        navigate(-1)
    }
    
    return (
        <>
            <div className={styles.btn}>
                    <Button className="mt-4 mr-5 float-right" as={Link} to="/">X</Button>  
                </div>
            <PostForm action={handleSubmit} actionText={'Add Post'}/> 
        </>
            
        
    ) 
    
}

export default AddFormPost;