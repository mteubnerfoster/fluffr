import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Profile } from './components/Profile';
import Home from './components/Home';
import Login from './components/Login';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <h1>Fluffr - The Dating App for Pets!</h1>
          <p>Find your furever friend</p>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/login' component={Login} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
