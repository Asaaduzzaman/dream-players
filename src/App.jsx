
import './App.css'
import Logoimg from "./assets/logo.png"
import Coinsimg from "./assets/dollar-1.png"

  function App() {

  return (
    <>
    <div className="navbar">
  <div className="flex-1">
    <a className="text-xl"><img className="w-[60px] h-[60px]" src={Logoimg} alt="" /></a>
  </div>
  <div className="flex">
     <span>6000000000</span>
     <span>Coins</span>
     <img src={Coinsimg} alt="" />
    
  </div>
</div>
    </>
  )
}

export default App
