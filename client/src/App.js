import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Profile } from "./components/Profile";
import Home from "./components/Home/tinderTest";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
