import {Navbar,CreatePost,Home,PostDetail, Update} from "./index"
import {Routes as Switch,Route} from 'react-router-dom';

function App() {
  return (
<>
<div className='container'>
<Navbar/>
<Switch>
  <Route exact path='/'Component={Home}/>
  <Route exact path='/post/:postId'Component={PostDetail}/>
  <Route exact path='/update/:postId'Component={Update}/>
  <Route exact path='/create-post'Component={CreatePost}/>
</Switch>
</div>


</>

    );
}

export default App;
