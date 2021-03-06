import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import AboutPage from './containers/AboutPage/AboutPage';
import NewsPage from './containers/NewsPage/NewsPage';
import AdminPage from './containers/AdminPage/AdminPage';

function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>
            <Route path='/about' component={AboutPage} />
            <Route path='/news' component={NewsPage} />
            <Route path='/' exact component={HomePage} />
            <Route path='/admine' exact component={AdminPage} />
            <Route render={() => <h1>404 - Not Found</h1>} />
            <Redirect to='/' />
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
