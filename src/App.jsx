import './App.css'
import BaseNavigator from './baseNavigator/BaseNavigator'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <BaseNavigator />
      </BrowserRouter>
      {/* <NavBarComp /> */}
    </>
  )
}

export default App
