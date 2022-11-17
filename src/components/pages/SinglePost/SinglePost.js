import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import styles from './SinglePost.module.scss'
import { getPostById } from "../../../redux/postsRedux";
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useState } from "react";
import RemoveModal from "../../features/RemoveModal/RemoveModal";
import { removePost } from '../../../redux/postsRedux'



const SinglePost = () => {
    
    const { id } = useParams()
    const postData = useSelector(state => getPostById(state, id ))
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false); 
    const dispatch = useDispatch()
    
    const deletePost = (e) => {
        e.preventDefault();
        dispatch(removePost(postData.id))
        setModal(false)
    }
    
    if (modal) {
        return <RemoveModal show={modal} closeModal={closeModal} deletePost={deletePost} />
    }
    
    if(!postData) return <Navigate to="/"/>
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <Link to="/" className={styles.return}><Button variant="primary"><AiOutlineArrowLeft className={styles.return}/></Button></Link>    
                <div className={styles.rightBtn}>
                    <Button as={Link} to={"/post/edit/" + id } > Edit </Button>
                    <Button onClick={openModal}> Delete </Button> 
                </div>
            </div>
            <Card className='col-xl-6 col-md-6 col-sm-12 m-2 shadow p-3 mb-3 bg-white rounded media ' >
                <Card.Img variant="top" style={{height:'20rem',width:'100%'}} src={postData.image ? postData.image : 'https://picsum.photos/600' } />
                <h3 className={styles.title}>{postData.destination}</h3>
                <Card.Body >
                    <Card.Title className={styles.title}>{postData.title}</Card.Title>
                    <Card.Text className="text-justify">
                        <p dangerouslySetInnerHTML={{ __html: postData.mainDescription }}className={styles.p} />
                    </Card.Text>
                    <Card.Text >
                        <p><b>Data:</b> {postData.publishedDate}</p> 
                        <p><b>Traveler:</b> {postData.author} </p>
                    </Card.Text>            
                </Card.Body>
            </Card>
        </div>
    ) 
}

export default SinglePost;