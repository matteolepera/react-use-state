import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { languages } from "./data/languages"


function App() {
  const [variant, setVariant] = useState(false);
  return (
    <div className="container">
      <h1>Learn Web development</h1>
      {languages.map((language) =>
        <button key={language.id} onClick={() => setVariant(language)} className={`btn ${variant && variant.id === language.id ? "btn-warning" : "btn-primary"} m-3`}>{language.title}</button>
      )}
      {
        variant && (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{variant.title}</h5>
              <p className="card-text">{variant.description}</p>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default App
