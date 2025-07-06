import AppName from './components/AppName.jsx'
import TimeApp from './components/TimeApp.jsx'
import TextApp from './components/TextApp.jsx'
import './App.css'

function App() {

  return (
    <div className='appInfo'>
    <AppName></AppName>
    <TextApp></TextApp>
    <TimeApp></TimeApp>
   
    </div>
   
  )
}

export default App;
