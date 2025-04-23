import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { SampletextPreviewProps } from "../typings/SampletextProps";

export function preview({ sampleText }: SampletextPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/Sampletext.css");
}
