import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategoryById } from "./../../../redux/postsRedux";
import Post from "../../features/Post/Post";
import styles from "./Category.module.scss"


const Category = () => {

    const { categoryId } = useParams()
    const postData = useSelector(state => getCategoryById(state, categoryId) )
    console.log('postData:', postData)
    console.log('categoryId:', categoryId);
    
    if(postData.length === 0) return (
        <div className={styles.error}>
            <h1>Category: { categoryId } </h1>
            <p>No posts in this category</p>
        </div>
    );
        
    return ( 
        <>
            <div className={styles.h1}>
                <h1><b>Category:</b> {categoryId}</h1>
            </div>
            <Container className='d-inline-flex flex-row flex-wrap gap-3 justify-content-around align-content-center mt-5'>
                {postData.map(post => (
                    <Post 
                        id={post.id}
                        image={post.image}
                        key={post.id}
                        destination={post.destination}
                        titile={post.titile}
                        shortDescription={post.shortDescription}
                        content={post.content}
                        publishedData={post.publishedData}
                        category={post.category}
                        author={post.author}
                    />
                ))}
            </Container>   
        </>
     );
}
 
export default Category;