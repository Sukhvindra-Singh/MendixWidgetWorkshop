import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { DynamicPropertyTypesPreviewProps } from "../typings/DynamicPropertyTypesProps";

export function preview({ myExpression }: DynamicPropertyTypesPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={myExpression} />;
}

export function getPreviewCss(): string {
    return require("./ui/DynamicPropertyTypes.css");
}
