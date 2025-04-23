import { ReactElement, createElement, useEffect, useState } from "react";
import { ObjectItem, ValueStatus } from "mendix";

import { DynamicPropertyTypesContainerProps } from "../typings/DynamicPropertyTypesProps";

import "./ui/DynamicPropertyTypes.css";
declare const mx: any;

export function DynamicPropertyTypes({ myExpression, mytextTemplate, myAction, myAttribute, datasource, selection }: DynamicPropertyTypesContainerProps): ReactElement {

    // Action Property
    const handleClick = () => {
        if (myAction && myAction.canExecute && !myAction.isExecuting) {
            myAction.execute();
        }
    }

    // DataSource Property
    const [dataArray, setDataArray] = useState<any>([])
    useEffect(() => {
        if (datasource.status == ValueStatus.Available) {
            const { items } = datasource;
            const guids = items?.map((obj: ObjectItem) => obj.id) || []

            mx.data.get({
                guids: guids,
                callback: function (objects: any[]) {
                    const result = objects.map((obj: any) => ({
                        Id: obj.getGuid(),
                        Name: obj.get("Name")
                    }))
                    setDataArray(result)
                }
            })

        }
    }, [datasource.status])

    // Selection Property
    const [selectedObjects, setSelectedObjects] = useState<ObjectItem[]>([])
    const handleClickTwo = (data: any) => {
        if (!datasource.items) return;
        const matchObj = datasource.items?.find((obj: ObjectItem) => obj.id == data.Id);
        if (selection?.type == "Single") {
            selection.setSelection(matchObj)
            if(matchObj){
                setSelectedObjects([matchObj])
            }
        } else if (selection?.type == "Multi") {
            if (matchObj) {
                setSelectedObjects(prev => {
                    const alreadyExists = prev.some(obj => obj.id === matchObj.id)
                    if (!alreadyExists) {
                        return [...prev, matchObj]
                    }
                    return prev;
                })
                selection.setSelection([...selectedObjects, matchObj])
            }
        }



    }

    return (
        <div>
            <p>Expression : {myExpression?.value}</p>
            <p>Text Template : {mytextTemplate?.value}</p>
            <p>Attribute : {myAttribute?.displayValue}</p>
            <button onClick={() => handleClick()}>Submit</button>
            <h4>Name</h4>
            /*{dataArray.length > 0 && dataArray.map((data: any) => {
                const isSelected = selectedObjects.some((obj: any) => obj.id === data.Id);
                return (
                    <p key={data.Id} className={isSelected ? "selected-row" : ""} onClick={() => handleClickTwo(data)}>{data.Name}</p>
                )
            })}*/
        </div>
    )
}
