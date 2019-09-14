import React from 'react';
 
import './App.css';
import MyComponent from './components/myComponent/myComponent';
import testData from './components/myComponent/testData';
function App() {
 
 
 
  return (
    <div className="App">
      <header className="App-header">
        <p> Q2 </p>
        
       <MyComponent info={JSON.stringify(testData)}></MyComponent>
      </header>
    </div>
  );
}
 export default App;
