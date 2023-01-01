import React from 'react';
import { useMultistepForm } from './useMultistepForm';
import { AddressForm } from './AddressForm';
import { AccountForm } from './AccountForm';
import { UserForm } from './userForm';


function App() {


const {steps,currentStepIndex,step,isFirstStep,isLastStep,back,next} = useMultistepForm([<UserForm />,<AddressForm />,<AccountForm />])

  return (
    <div style={{position:"relative",background:"white",border:"1px solid  black",padding:"2rem",margin:"1rem",borderRadius:".5rem",fontFamily:"Arial"}}>
      <form>
       <div style={{position:"absolute",top:".5rem",right:".5rem"}}> {currentStepIndex + 1} / {steps.length}</div>
       {step}
       <div style={{marginTop:"1rem",display:"fex",gap:".5rem",justifyContent:"flex-end"}}></div>
       {!isFirstStep && <button className='btn btn-primary' type="button" onClick={back}>Back</button>}
       <button type="button" className='btn btn-primary ml-2' onClick={next}>{isLastStep ? "Finish" : "Next"}</button>
      </form>
    </div>
  );
}

export default App;
