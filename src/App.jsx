import './App.css'
import MainComp from './components/mainComp'

function App() {

  return (
    <div className='mainDiv'>
      <h1>Tenzies</h1>
      <h3>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
      <MainComp/>
    </div>
  )
}

export default App
