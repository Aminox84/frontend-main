import {ReactElement,useState} from 'react'
export function useMultistepForm(steps: ReactElement[]){
const [currentStepIndex, setCurrentStepIndex]=useState(0)

function next(){

}
function back(){
    
}
function next(){
    
}





return {
    currentStepIndex,
    step: steps[currentStepIndex]
}

}