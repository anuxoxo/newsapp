import React, { Component } from 'react'
import Header from './components/Header';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                noOfArticle={5}
                country={"in"}
                category={"general"} />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                noOfArticle={5}
                country={"in"}
                category={"business"} />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                noOfArticle={5}
                country={"in"}
                category={"entertainment"} />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                noOfArticle={5}
                country={"in"}
                category={"health"} />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                noOfArticle={5}
                country={"in"}
                category={"science"} />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                noOfArticle={5}
                country={"in"}
                category={"sports"} />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                noOfArticle={5}
                country={"in"}
                category={"technology"} />
            </Route>
          </Switch>
        </div>
      </Router>

    )
  }
}
