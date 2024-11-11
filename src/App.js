import './App.css';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Home from './Component/Home/Home';
import Register from './Component/Auth/Register';
import Signin from './Component/Auth/Signin';
import Storybuilder from './Component/Storybuilder/Storybuilder';
import WelcomeStory from './Component/Storybuilder/WelcomeStory';
import WriteStory from './Component/Storybuilder/WriteStory';
import AddStoryDet from './Component/Storybuilder/AddStoryDet';
import Loading from './Component/Storybuilder/Loading';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/story-builder' element={<Storybuilder/>}>
          <Route index element={<Navigate to="welcome" replace />}/>
          <Route path='welcome' element={<WelcomeStory/>}/>
          <Route path='story/:id' element={<WriteStory/>}/>
          <Route path='fill-story-details' element={<AddStoryDet/>}/>
          <Route path='loading' element={<Loading/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
