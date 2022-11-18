import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Post from '../Post/Post';
import { Button } from 'react-bootstrap';
import styles from './Posts.module.scss'
import { Link } from 'react-router-dom';


const Posts = () => {
    
    const posts = useSelector(getAllPosts)
    console.log(getAllPosts)
    return (
        <main>
            <div className={styles.title}>
                <h1 className={styles.subtitle}>Tell us about yours last travel...</h1>
                <Button variant="success" className={styles.btn} as={Link} to="/post/add">Add new post</Button> 
            </div>
            <Container className='d-inline-flex flex-row flex-wrap gap-3 justify-content-around align-content-center mt-5'>
                {posts.map(post => (
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
        </main>
    )
}

export default Posts;