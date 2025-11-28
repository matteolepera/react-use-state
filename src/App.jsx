import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { languages } from "./data/languages"


function App() {


  return (
    <div className="container">
      <h1>Learn Web development</h1>
      {languages.map((language) =>
        <button className="btn btn-primary mt-3 mx-2">{language.title}</button>
      )}

    </div>
  )
}

export default App
