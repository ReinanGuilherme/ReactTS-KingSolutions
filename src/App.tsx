import { AboutUs } from "./pages/aboutUs"
import { Header } from "./pages/header"
import { Services } from "./pages/services"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Services/>
      <GlobalStyle/>
    </div>
  )
}

export default App
