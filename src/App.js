import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Navigation from './start/components/Navigation'

function App() {
  return (
    <div>
    <Helmet>
          <title>Reactjs start learning page</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
    </Helmet>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
