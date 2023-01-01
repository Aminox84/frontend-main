import {ReactElement,useState} from 'react'



export function useMultistepForm(steps: ReactElement[]){

const [currentStepIndex, setCurrentStepIndex]=useState(0)

function next(){
setCurrentStepIndex(i=>{
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