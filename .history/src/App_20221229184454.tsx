import React from 'react';
import { useMultistepForm } from './useMultistepForm';


function App() {

const steps = []

const {steps} = useMultistepForm(steps))

  return (
    <div style={{position:"relative",background:"white",border:"1px solid  black",padding:"2rem",margin:"1rem",borderRadius:".5rem",fontFamily:"Arial"}}>
      <form>
       <div style={{position:"absolute",top:".5rem",right:".5rem"}}> 1 /2</div>
      </form>
    </div>
  );
}

export default App;
