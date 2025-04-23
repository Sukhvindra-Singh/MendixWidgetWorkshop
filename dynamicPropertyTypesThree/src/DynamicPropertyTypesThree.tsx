import { ReactElement, createElement, useEffect, useState } from "react";
import { DynamicPropertyTypesThreeContainerProps } from "../typings/DynamicPropertyTypesThreeProps";
import "./ui/DynamicPropertyTypesThree.css";
import { ObjectItem, ValueStatus } from "mendix";
declare const mx: any;
export function DynamicPropertyTypesThree({ Datasource, reference, myobject,file }: DynamicPropertyTypesThreeContainerProps): ReactElement {
    const [selectedObjects, SetSelectedObjects] = useState<any[]>([]);
    useEffect(() => {
        if (Datasource.status === ValueStatus.Available) {
            if (reference.type === "Reference") {
                mx.data.get({
                    guid: reference.value?.id,
                    callback: function (object: any) {
                        const result = {
                            Id: object.getGuid(),
                            Name: object.get("Name")
                        }
                        SetSelectedObjects([...selectedObjects, result])
                    }
                })
            } else {
                mx.data.get({
                    guids: reference.value?.map((obj: ObjectItem) => obj.id),
                    callback: function (objects: any[]) {
                        const result = objects.map((obj: any) => (
                            {
                                Id: obj.getGuid(),
                                Name: obj.get("Name")
                            }
                        ))
                        SetSelectedObjects(result)
                    }
                })
            }
        }
    }, [Datasource.status])

    console.log(file)
    return (
        <div>
            {selectedObjects.length > 0 && selectedObjects.map((data: any) => {
                return (
                    <p key={data.Id}>{data.Name}</p>
                )
            })}

            <div style={{display:"flex",gap:"1rem"}}>
                <span>Key</span>
                <span>Value</span>
            </div>
            <div>
                {myobject.map((obj: any) => {
                    return (
                        <div style={{display:"flex",gap:"1rem"}}>
                            <span>{obj.key}</span>
                            <span>{obj.value}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <img src={file?.value?.uri} alt={file?.value?.name} />
                <a href={file?.value?.uri}>Download</a>
            </div>
        </div>
    )
}
