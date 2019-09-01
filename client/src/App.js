import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./containers/Home";
import AllReviews from "./containers/AllReviews";
import SingleReview from "./components/SingleReview";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/all-reviews" component={AllReviews} />
        <Route path="/review/:id" component={SingleReview} />
        <Route path="/about-us/" component={About} />
      </div>
    </Router>
  );
}

export default App;
