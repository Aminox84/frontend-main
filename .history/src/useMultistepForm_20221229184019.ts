import {ReactElement,useState} from 'react'



export function useMultistepForm(steps: ReactElement[]){

const [currentStepIndex, setCurrentStepIndex]=useState(0)

function next(){
setCurrentStepIndex(i=>{
    if ( i > steps.length-1)
    return i +1
})
}
function back(){
    
}
function goTo(index:number){
    
}





return {
    currentStepIndex,
    step: steps[currentStepIndex]
}

}