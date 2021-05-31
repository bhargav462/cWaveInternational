import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import history from './Utils/history/history'
import Toolbar from './Components/Navigation/Toolbar/Toolbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'

class Error extends React.Component {
  render() {
    return <div><h1>404 Error</h1></div>;
  }
}

function App() {

  return (
      <div className="App">
        <Router history={history}>
          <Toolbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route render={() => <Redirect to={{pathname: "/"}} />} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
  );
}

export default App;
