import React, { Component } from 'react'
import Header from './components/Header';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pages = 6;
  state = {
    progress: 10
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  API_KEY = process.env.API_KEY;
  render() {
    return (
      <Router>
        <div>
          <Header />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress}
                key="general"
                noOfArticle={this.pages}
                country={"in"}
                category={"general"} />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress}
                key="business"
                noOfArticle={this.pages}
                country={"in"}
                category={"business"} />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress}
                key="entertainment"
                noOfArticle={this.pages}
                country={"in"}
                category={"entertainment"} />
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress}
                key="health"
                noOfArticle={this.pages}
                country={"in"}
                category={"health"} />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress}
                key="science"
                noOfArticle={this.pages}
                country={"in"}
                category={"science"} />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress}
                key="sports"
                noOfArticle={this.pages}
                country={"in"}
                category={"sports"} />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress}
                key="technology"
                noOfArticle={this.pages}
                country={"in"}
                category={"technology"} />
            </Route>
          </Switch>
        </div>
      </Router>

    )
  }
}
