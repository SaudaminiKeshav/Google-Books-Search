import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleBookSelection = this.handleBookSelectionChange.bind(this);
    this.state = {
      books: []
  };
  }

  handleBookSelectionChange(bookSaved) {
    console.log(bookSaved);
    this.setState({books: bookSaved})
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} books={this.state.books} onSelectionChange={this.handleBookSelectionChange.bind(this)}/>
            <Route exact path="/noMatch" component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
