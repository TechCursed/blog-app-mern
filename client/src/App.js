import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';
// import BlogCard from './components/BlogCard';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import UserBlogs from './pages/UserBlogs';
import { Toaster } from 'react-hot-toast';
import CreateBlog from './pages/CreateBlog';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <Toaster/>
        <Header />
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/my-blogs' element={<UserBlogs />} />         
          <Route path='/create-blog' element={<CreateBlog />} />     
          <Route path='/blog-details/:id' element={<BlogDetails />} />        
        </Routes>
      </Router>       
      </Provider>
    </div>
  );
}

export default App;
