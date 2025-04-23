/**
 * This file was generated from DynamicPropertyTypes.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, ListValue, ReferenceValue, ReferenceSetValue, SelectionSingleValue, SelectionMultiValue } from "mendix";
import { Big } from "big.js";

export interface DynamicPropertyTypesContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    myExpression?: DynamicValue<string>;
    mytextTemplate?: DynamicValue<string>;
    myAction?: ActionValue;
    myAttribute?: EditableValue<string | Big>;
    datasource: ListValue;
    selection?: SelectionSingleValue | SelectionMultiValue;
    reference: ReferenceValue | ReferenceSetValue;
}

export interface DynamicPropertyTypesPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    myExpression: string;
    mytextTemplate: string;
    myAction: {} | null;
    myAttribute: string;
    datasource: {} | { caption: string } | { type: string } | null;
    selection: "None" | "Single" | "Multi";
    reference: string;
}
