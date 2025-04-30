import { ReactElement, createElement } from "react";
import { FirstCustomWidgetPreviewProps } from "../typings/FirstCustomWidgetProps";

export function preview({  }: FirstCustomWidgetPreviewProps): ReactElement {
    return <div></div>
}

export function getPreviewCss(): string {
    return require("./ui/FirstCustomWidget.css");
}
