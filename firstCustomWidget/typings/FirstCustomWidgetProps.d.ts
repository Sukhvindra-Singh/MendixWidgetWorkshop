/**
 * This file was generated from FirstCustomWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type SelectionTypeEnum = "radio" | "checkbox";

export interface FirstCustomWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    booleanAttribute?: EditableValue<boolean>;
    selectionType: SelectionTypeEnum;
    trueLabel: string;
    falseLabel: string;
    checkboxLabel: string;
    onChange?: ActionValue;
}

export interface FirstCustomWidgetPreviewProps {
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
    booleanAttribute: string;
    selectionType: SelectionTypeEnum;
    trueLabel: string;
    falseLabel: string;
    checkboxLabel: string;
    onChange: {} | null;
}
