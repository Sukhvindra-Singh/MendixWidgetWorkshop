import { ReactElement, createElement } from "react";


import { FirstCustomWidgetContainerProps } from "../typings/FirstCustomWidgetProps";

import "./ui/FirstCustomWidget.css";

export function FirstCustomWidget({ booleanAttribute, selectionType,onChange,trueLabel,falseLabel,checkboxLabel }: FirstCustomWidgetContainerProps): ReactElement {
    console.log(booleanAttribute)
    const handleChange = (selection: boolean) => {
        booleanAttribute?.setValue(selection);

        if(onChange && onChange.canExecute && !onChange.isExecuting){
            onChange.execute()
        }
    }
    const handleCheckBoxChange = (e:any)=>{
        booleanAttribute?.setValue(e.target.checked);
        if(onChange && onChange.canExecute && !onChange.isExecuting){
            onChange.execute()
        }
    }
    if (selectionType === "radio") {
        return (
            <div>
                <div className="custom-input-group custom-radio">
                    <input type="radio" id="option1" name="group1" className="custom-input" checked={booleanAttribute?.value === true} onChange={() => handleChange(true)} />
                    <label htmlFor="option1" className="custom-label">{trueLabel}</label>
                </div>
                <div className="custom-input-group custom-radio">
                    <input type="radio" id="option2" name="group1" className="custom-input" checked={booleanAttribute?.value === false} onChange={() => handleChange(false)} />
                    <label htmlFor="option1" className="custom-label">{falseLabel}</label>
                </div>
            </div>

        )
    }
    return (
        <div className="custom-input-group">
            <input type="checkbox" id="myCheckbox" className="custom-input" checked={booleanAttribute?.value} onChange={(e:any)=> handleCheckBoxChange(e)}/>
            <label htmlFor="myCheckbox" className="custom-label">{checkboxLabel}</label>
        </div>
    )

}
