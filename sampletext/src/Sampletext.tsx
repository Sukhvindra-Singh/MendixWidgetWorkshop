import { ReactElement, createElement } from "react";
import Big from "big.js"

import { SampletextContainerProps } from "../typings/SampletextProps";

import "./ui/Sampletext.css";

export function Sampletext({ sampleText,booleanAttr,integerAttr,decimalAttr,enumerationAttr,actionWithVariable }: SampletextContainerProps): ReactElement {
    console.log(actionWithVariable);
    const handleClick = ()=>{
        if(actionWithVariable && actionWithVariable.canExecute && !actionWithVariable.isExecuting){
            actionWithVariable.execute({random:new Big(Math.random())});
        }
    }
    return (
        <div>
            <p>{sampleText}</p>
            <p>{integerAttr}</p>
            <p>{enumerationAttr}</p>
            {booleanAttr == true ? <p>True</p> : <p>False</p>}
            <p>{new Big(decimalAttr).toString()}</p>
            <button onClick={()=>handleClick()}></button>
        </div>
    )
}
