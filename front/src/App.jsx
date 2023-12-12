import { Route, Routes} from 'react-router-dom'
import Post from './views/Post/Post'
import Landing from './views/Landing/Landing'
import DataView from './views/DataViews/DataView'
import Put from './views/Put/Put'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={Landing}/>
        <Route path='/form' Component={Post}/>
        <Route path='/update' Component={Put}/>
        <Route path='/cards' Component={DataView}/>
      </Routes>

    </>
  )
}

export default App
