import { Route, Routes} from 'react-router-dom'
import Post from './views/Post/Post'
import Landing from './views/Landing/Landing'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={Landing}/>
        <Route path='/form' Component={Post}/>
      </Routes>

    </>
  )
}

export default App
