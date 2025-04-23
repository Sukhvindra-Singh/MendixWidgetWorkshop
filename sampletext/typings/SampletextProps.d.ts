/**
 * This file was generated from Sampletext.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, Option } from "mendix";
import { Big } from "big.js";

export type EnumerationAttrEnum = "red" | "blue" | "green";

export interface SampletextContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    sampleText: string;
    booleanAttr: boolean;
    integerAttr: number;
    decimalAttr: Big;
    enumerationAttr: EnumerationAttrEnum;
    myAttribute: EditableValue<string | boolean>;
    myExpression: DynamicValue<string>;
    actionWithVariable?: ActionValue<{ random: Option<Big> }>;
}

export interface SampletextPreviewProps {
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
    booleanAttr: boolean;
    integerAttr: number | null;
    decimalAttr: number | null;
    enumerationAttr: EnumerationAttrEnum;
    myAttribute: string;
    myExpression: string;
    actionWithVariable: {} | null;
}
