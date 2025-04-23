import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { DynamicPropertyTypesThreePreviewProps } from "../typings/DynamicPropertyTypesThreeProps";

export function preview({ sampleText }: DynamicPropertyTypesThreePreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/DynamicPropertyTypesThree.css");
}
