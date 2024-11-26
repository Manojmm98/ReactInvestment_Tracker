import { useState } from "react"
import Header from "./Components/Header.jsx"
import UserInput from "./Components/UserInput.jsx"
import Results from "./Components/Results.jsx"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 1000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
})

const invalidInput = userInput.duration <= 0;

function handleChange(inputidentifire,newValue){
       setUserInput((prevsInput)=>{
        return {
            ...prevsInput,
            [inputidentifire] : +newValue
        }
       })
}
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {invalidInput && <p className="center">Kindly enter the duration greater than Zero</p>}
    {!invalidInput && <Results input={userInput}/>}
    </>
  )
}

export default App
