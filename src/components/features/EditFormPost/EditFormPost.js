import PostForm from "../PostForm/PostForm";
import { editPost } from "../../../redux/postsRedux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { Button } from "react-bootstrap";
import styles  from './EditFormPost.module.scss'
import { Link } from 'react-router-dom';


const EditFormPost = () => {
    
    const { postId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
  
    const handleSubmit = post => {
        dispatch(editPost({ ...post, postId }));
        navigate('/')
    };
     
    const postData = useSelector(state => getPostById(state, postId ))
    if(!postId) return <Navigate to="/"/>
    
    
     
    return (
        <>  
            <div className={styles.btn}>
                <Button className="mt-4 mr-5 float-right" as={Link} to="/">X</Button>  
            </div>
            <PostForm 
                action={handleSubmit}
                actionText='Edit Post'
                id= {postId}
                title={postData.title}
                image={postData.image}
                author={postData.author}
                shortDescription={postData.shortDescription}
                publishedDate={postData.publishedDate}
                mainDescription={postData.mainDescription}
                destination={postData.destination}
            />
        </>
    ) 
}

export default EditFormPost;

