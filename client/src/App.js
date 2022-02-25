import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Profile } from './components/Profile';
import Home from './components/Home';


import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>Fluffr - Find Your Furever Friend!</h1>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
