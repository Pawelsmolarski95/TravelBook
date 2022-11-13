import PostForm from "../PostForm/PostForm";
import { editPost } from "../../../redux/postsRedux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";

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

