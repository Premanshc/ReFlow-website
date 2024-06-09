import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero"

const App = () => {
  let heroData = [
    {text1:"ReFlow", text2:"The future of work is here", text3:"ReFlow is a platform that helps companies manage their remote teams and projects."},
    {text1:"ReFlow", text2:"The future of work is here", text3:"ReFlow is a platform that helps companies manage their remote teams and projects."},
    {text1:"ReFlow", text2:"The future of work is here", text3:"ReFlow is a platform that helps companies manage their remote teams and projects."}
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

   useEffect(() =>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 10000);
   },[])

  return (
    <div>
      <Background 
      playStatus={playStatus}
      heroCount={heroCount}
      />
      <Navbar />
      <Hero  
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  )
}

export default App