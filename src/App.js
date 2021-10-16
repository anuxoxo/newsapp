import React, { useState } from 'react'
import Header from './components/Header';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {
  const pages = 30;
  const [progress, setProgress] = useState(10);

  return (
    <Router>
      <div>
        <Header />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => { setProgress(0) }}
        />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              noOfArticle={pages}
              country="in"
              category="general" />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              key="business"
              noOfArticle={pages}
              country={"in"}
              category={"business"} />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              noOfArticle={pages}
              country={"in"}
              category={"entertainment"} />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              key="health"
              noOfArticle={pages}
              country={"in"}
              category={"health"} />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              key="science"
              noOfArticle={pages}
              country={"in"}
              category={"science"} />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              key="sports"
              noOfArticle={pages}
              country={"in"}
              category={"sports"} />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              key="technology"
              noOfArticle={pages}
              country={"in"}
              category={"technology"} />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

