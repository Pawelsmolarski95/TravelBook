import Home from './components/pages/Home/Home';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import SinglePost from './components/pages/SinglePost/SinglePost';
import Categories from './components/pages/Categories/Categories';
import Category from './components/pages/Category/Category';





function App() {
  return (
    <main>
      <Header/>
      <Container>
        <Routes>
          <Route end path='/' element={<Home/>}/>
          <Route  path='/post/:id' element={<SinglePost/>}/>
          <Route  path='/post/add' element={<AddPost/>}/>
          <Route  path='/post/edit/:postId' element={<EditPost/>}/>
          <Route  path='/categories' element={<Categories/>}/>
          <Route  path='/categories/:categoryId' element={<Category/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='*' element={<NotFound/>}/>
        </Routes>
      </Container>
      <Footer/> 
    </main>
   
  );
}

export default App;
