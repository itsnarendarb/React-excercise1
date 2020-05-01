import React from 'react';
import './App.css';
import  Login from './Login'
function App() {//parent component 
  var address={
    Permaddress:" Vartoor",
    CurrAddress:"Hyderabad"
  }
  return (
    <div className="App">
    Hello world
    <Login name={"shyam"} address={address}></Login>
     </div>
  );
}

export default App;
