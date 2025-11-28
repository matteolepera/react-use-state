import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { languages } from "./data/languages"


function App() {
  const [variant, setVariant] = useState(null);
  return (
    <div className="container">
      <h1>Learn Web development</h1>
      {languages.map((language) =>
        <button key={language.id} onClick={() => setVariant(language.id)} className={`btn ${variant === language.id ? "btn-warning" : "btn-primary"} m-3`}>{language.title}</button>
      )}
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        </div>
      </div>
    </div>
  )
}

export default App
