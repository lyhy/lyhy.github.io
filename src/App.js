import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import Nav from './days/components/Nav/Nav'

function App() {
  return (
    <div>
      <Helmet>
          <title>Learning React</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Helmet>
      <header>
        <Nav></Nav>
      </header>
    </div>
  );
}

export default App;
