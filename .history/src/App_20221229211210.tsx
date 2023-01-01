import React from 'react';
// import { useMultistepForm } from './useMultistepForm';
// import { AddressForm } from './AddressForm';
// import { AccountForm } from './AccountForm';
import UserForm  from './userForm';


function App() {


// const {steps,currentStepIndex,step,isFirstStep,isLastStep,back,next} = useMultistepForm([<UserForm />,<AddressForm />,<AccountForm />])

  return (
    <div style={{position:"relative",background:"white",border:"0.2rem solid  black",padding:"2rem",margin:" 10rem auto",borderRadius:".5rem",fontFamily:"Arial",width:"50%",}}>
      <form>
       {/* <div style={{position:"absolute",top:".5rem",right:".5rem"}}> {currentStepIndex + 1} / {steps.length}</div> */}
       <UserForm />
       
      </form>
    </div>
  );
}

export default App;
