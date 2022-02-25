import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
<<<<<<< HEAD
        <div className='App'>
          <h1>Fluffr - The Dating App for Pets!</h1>
          <p>Find your furever friend</p>
=======
        <div className="App">
          <h1>Fluffr - Find Your Furever Friend!</h1>
>>>>>>> 81eebf0bf5d95e6b8d7bf4d0a59b70a9d5f24488
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
