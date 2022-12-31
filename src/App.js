import logo from './logo.svg';
import './App.css';
import React from 'react';
import Int from "./Int";
import Calculate from "./Calculate";
import Table from "./Table";


function App() {

  return (
   
      <section className="container ">
        <section>
          <Int />
        </section>

        <section>
          <Calculate />
        </section>

        <section>
          <Table />
        </section>
      </section>
   
  );

}

export default App;
