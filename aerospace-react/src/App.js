import React, { Component } from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout/Layout'

//* JSX Containers
import MainContent from './containers/Main/MainContent';


class App extends Component {
  render(){
    return (
      <div>
        
        <Layout >
          <h1> Keep fighting</h1>
          <MainContent />
        </Layout>
      </div>
    );
  }
}

export default App;
