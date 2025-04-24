import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { SystemPropertyPreviewProps } from "../typings/SystemPropertyProps";

export function preview({ sampleText }: SystemPropertyPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/SystemProperty.css");
}
