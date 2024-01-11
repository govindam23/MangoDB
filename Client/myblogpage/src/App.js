import Navbar from "./navbar/Navbar";
import PostDetail from "./pages/Details/PostDetail";
import Home from "./pages/Home/Home";
import Newpost from "./pages/newPost/Newpost";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
function App() {
  const currentUser = true;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
            <Home />
          </Route>
          <Route exact path="/register">
            {currentUser ? <Home /> : <Register />}
          </Route>
          <Route exact path="/login">{currentUser ? <Home /> : <Login />}</Route>
          <Route exact path="/post/:id">
            <PostDetail />
          </Route>
          <Route exact path="/newpost">{currentUser ? <Newpost /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
