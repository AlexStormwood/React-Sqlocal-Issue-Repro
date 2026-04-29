
import './App.css'
import DataChecker from './components/DataChecker'
import OpfsBasicFileIO from './components/OpfsBasicFileIO'
import SqlocalTesto from './components/SqlocalTesto'

function App() {

  return (
    <>
      <section id="center">
        <DataChecker />
      </section>


      <section id="next-steps">
        <div id="docs">
          <OpfsBasicFileIO />
        </div>
        <div id="social">
          <SqlocalTesto />
        </div>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
