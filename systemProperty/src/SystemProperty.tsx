import { ReactElement, createElement } from "react";

import { SystemPropertyContainerProps } from "../typings/SystemPropertyProps";

import "./ui/SystemProperty.css";

export function SystemProperty(props: SystemPropertyContainerProps): ReactElement {
    console.log(props)
    return <div></div>
}
