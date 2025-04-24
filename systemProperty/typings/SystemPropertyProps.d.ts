/**
 * This file was generated from SystemProperty.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { EditableValue } from "mendix";

export interface SystemPropertyContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    sampleText: string;
    attr: EditableValue<string>;
}

export interface SystemPropertyPreviewProps {
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    sampleText: string;
    attr: string;
}
