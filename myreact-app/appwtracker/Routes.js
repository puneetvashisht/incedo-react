import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Category from './components/Category'
import Workout from "./components/Workout";

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Category</Link>
        </li>
        <li>
          <Link to="/workout">Workout</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Category} />
      <Route path="/workout" component={Workout} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);


const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Routes;