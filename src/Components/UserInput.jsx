import React,{useState} from 'react'

function UserInput({userInput,onChange}) {


  return (
    <section id='user-input'>
        <div className='input-group'>
         <p>
            <label htmlFor="Intial Investment">Intial Investment</label>
            <input type="number" value={userInput.initialInvestment} required onChange={()=>onChange('initialInvestment',event.target.value)} />
         </p>
         <p>
            <label htmlFor="Anual Investment">Anual Investment</label>
            <input type="number" value={userInput.annualInvestment} required onChange={()=>onChange('annualInvestment',event.target.value)} />
         </p>
        </div>
        <div className='input-group'>
         <p>
            <label htmlFor="Expected Return">Expected Returns</label>
            <input type="number" value={userInput.expectedReturn} required onChange={()=>onChange('expectedReturn',event.target.value)} />
         </p>
         <p>
            <label htmlFor="Duration">Duration</label>
            <input type="number" value={userInput.duration} required onChange={()=>onChange('duration',event.target.value)} />
         </p>
        </div>
    </section>
  )
}

export default UserInput