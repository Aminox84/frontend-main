import React from 'react';
import { useMultistepForm } from './useMultistepForm';


function App() {


const {steps,currentStepIndex,step,isFirstStep} = useMultistepForm([<div>One</div>,<div>Two</div>])

  return (
    <div style={{position:"relative",background:"white",border:"1px solid  black",padding:"2rem",margin:"1rem",borderRadius:".5rem",fontFamily:"Arial"}}>
      <form>
       <div style={{position:"absolute",top:".5rem",right:".5rem"}}> {currentStepIndex + 1} / {steps.length}</div>
       {step}
       <div style={{marginTop:"1rem",display:"fex",gap:".5rem",justifyContent:"flex-end"}}></div>
       {!isFirstStep && <button onClick={back}>Back</button>}
       <button>Next</button>
      </form>
    </div>
  );
}

export default App;