import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './ui/pages/homePage/homePage'
import { GlobalStateProvider } from './globalStateProvider'
import { EmiliaRomagnaPage } from './ui/pages/emiliaRomagnaPage/emiliaRomagnaPage'
import { MonacoPage } from './ui/pages/monacoPage/monacoPage'
import { SpainPage } from './ui/pages/spainPage/SpainPage'
import { NotFoundPage } from './ui/pages/notFoundPage/notFoundPage'
import { WelcomePage } from './ui/pages/welcomePage/welcomePage'
import { AboutPage } from './ui/pages/aboutPage/aboutPage'
import { ChatPage } from './ui/pages/chatPage/chatPage'
import { Theme } from './ui/theme/appTheme'
function App() {

  return (
    <>
    <BrowserRouter>
    <GlobalStateProvider>
      <Theme />
      <Routes>
        <Route path ="/welcome" element = {<WelcomePage />}/>
        <Route path = "/home" element = {<HomePage />}/>
        <Route path = "/about" element = {<AboutPage />}/>
        <Route path = "/emilia-romagna" element = {<EmiliaRomagnaPage />}/>
        <Route path = "/monaco" element = {<MonacoPage />}/>
        <Route path = "/spain" element = {<SpainPage />}/>
        <Route path = "/no283" element = {<ChatPage />}/>
        <Route path = "/not-found" element = {<NotFoundPage />}/>
      </Routes>
      </GlobalStateProvider>
    </BrowserRouter>
    </>
  )
}

export default App
