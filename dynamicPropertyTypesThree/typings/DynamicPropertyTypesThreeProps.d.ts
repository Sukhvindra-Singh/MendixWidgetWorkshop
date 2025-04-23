/**
 * This file was generated from DynamicPropertyTypesThree.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, FileValue, ListValue, ReferenceValue, ReferenceSetValue } from "mendix";

export interface MyobjectType {
    key: string;
    value: string;
}

export interface MyobjectPreviewType {
    key: string;
    value: string;
}

export interface DynamicPropertyTypesThreeContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    sampleText: string;
    Datasource: ListValue;
    reference: ReferenceValue | ReferenceSetValue;
    myobject: MyobjectType[];
    file?: DynamicValue<FileValue>;
}

export interface DynamicPropertyTypesThreePreviewProps {
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
    sampleText: string;
    Datasource: {} | { caption: string } | { type: string } | null;
    reference: string;
    myobject: MyobjectPreviewType[];
    file: string;
}
