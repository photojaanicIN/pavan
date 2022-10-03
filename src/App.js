import React from "react";
import ReactDOM from "react-dom";
import "./App.css"
import ResponsiveAppBar from './components/ResponsiveAppBar'
import ModelsView from './components/ModelsView'


export default function App() {
  return (
    <div className="App">

      <ResponsiveAppBar />
       <ModelsView /> 

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
