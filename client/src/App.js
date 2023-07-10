import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Blogs from './components/Blogs';
import BlogCard from './components/BlogCard';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </Router>       
      </Provider>
    </div>
  );
}

export default App;
