


import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
 

const AddFormPost = () => {
    
    const dispatch = useDispatch()

    const navigate = useNavigate();
    
    const handleSubmit = post => {
        dispatch(
            addPost(post))
        navigate(-1)
    }
    
    return (
        <PostForm action={handleSubmit} actionText={'Add Post'}/>
        
    ) 
    
}

export default AddFormPost;