//import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route 
            path="/login"
            render= {props=>{
              return(
                <h1>login</h1>
              )
            }}
          />

          <Route 
            path="/"
            render= {props=>{
              return(
                <h1>root</h1>
              )
            }}
          />    
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
