import { SystemPropertyPreviewProps } from "../typings/SystemPropertyProps";

export type Platform = "web" | "desktop";

export type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

export type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type BaseProps = {
    type: "Image" | "Container" | "RowLayout" | "Text" | "DropZone" | "Selectable" | "Datasource";
    grow?: number; // optionally sets a growth factor if used in a layout (default = 1)
};

type ImageProps = BaseProps & {
    type: "Image";
    document?: string; // svg image
    data?: string; // base64 image
    property?: object; // widget image property object from Values API
    width?: number; // sets a fixed maximum width
    height?: number; // sets a fixed maximum height
};

type ContainerProps = BaseProps & {
    type: "Container" | "RowLayout";
    children: PreviewProps[]; // any other preview element
    borders?: boolean; // sets borders around the layout to visually group its children
    borderRadius?: number; // integer. Can be used to create rounded borders
    backgroundColor?: string; // HTML color, formatted #RRGGBB
    borderWidth?: number; // sets the border width
    padding?: number; // integer. adds padding around the container
};

type RowLayoutProps = ContainerProps & {
    type: "RowLayout";
    columnSize?: "fixed" | "grow"; // default is fixed
};

type TextProps = BaseProps & {
    type: "Text";
    content: string; // text that should be shown
    fontSize?: number; // sets the font size
    fontColor?: string; // HTML color, formatted #RRGGBB
    bold?: boolean;
    italic?: boolean;
};

type DropZoneProps = BaseProps & {
    type: "DropZone";
    property: object; // widgets property object from Values API
    placeholder: string; // text to be shown inside the dropzone when empty
    showDataSourceHeader?: boolean; // true by default. Toggles whether to show a header containing information about the datasource
};

type SelectableProps = BaseProps & {
    type: "Selectable";
    object: object; // object property instance from the Value API
    child: PreviewProps; // any type of preview property to visualize the object instance
};

type DatasourceProps = BaseProps & {
    type: "Datasource";
    property: object | null; // datasource property object from Values API
    child?: PreviewProps; // any type of preview property component (optional)
};

export type PreviewProps =
    | ImageProps
    | ContainerProps
    | RowLayoutProps
    | TextProps
    | DropZoneProps
    | SelectableProps
    | DatasourceProps;

export function getProperties(
    _values: SystemPropertyPreviewProps,
    defaultProperties: Properties /* , target: Platform*/
): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    /* Example
    if (values.myProperty === "custom") {
        delete defaultProperties.properties.myOtherProperty;
    }
    */
    return defaultProperties;
}

// export function check(_values: SystemPropertyPreviewProps): Problem[] {
//     const errors: Problem[] = [];
//     // Add errors to the above array to throw errors in Studio and Studio Pro.
//     /* Example
//     if (values.myProperty !== "custom") {
//         errors.push({
//             property: `myProperty`,
//             message: `The value of 'myProperty' is different of 'custom'.`,
//             url: "https://github.com/myrepo/mywidget"
//         });
//     }
//     */
//     return errors;
// }

// export function getPreview(values: SystemPropertyPreviewProps, isDarkMode: boolean, version: number[]): PreviewProps {
//     // Customize your pluggable widget appearance for Studio Pro.
//     return {
//             type: "RowLayout",
//             columnSize: "grow",
//             borders: true,
//             borderRadius: 20,
//             backgroundColor: "#2A2C96",
//             children: [
//                 {
//                     type: "Container", // fills space on the left
//                 },
//                 {
//                     type: "Container",
//                     grow: 0, // ensures that it only takes necessary space
//                     padding: 10,
//                     children: [
//                         { type: "Text", content: "A button", fontColor: "#FFF", fontSize: 20 }
//                     ]
//                 },
//                 {
//                     type: "Container", // fills space on the right
//                 }
//             ]
//         }
    
// }
// export const getPreview = (_values: SystemPropertyPreviewProps, _isDarkMode: boolean, _version: number[]) => (
//     {
//         type: "Container",
//         // columnSize: "fixed",
//         grow:1,
//         borders: true,
//         children: [
//             {
//                 type: "Container", // fills space on the left
//                 grow:0
//             },
//             {
//                 type: "Container",
//                 grow: 1, // ensures that it only takes necessary space
//                 padding: 10,
//                 borderRadius: 10,
//                 backgroundColor: "#2A2C96",
//                 children: [
//                     { type: "Text", content: "A button", fontColor: "#FFF", fontSize: 14 }
//                 ]
//             },
//             {
//                 type: "Container", // fills space on the right
//                 grow:2,
//                 backgroundColor: "#000",
//             }
//         ]
//     });
    // exports.getPreview = (values: SystemPropertyPreviewProps, _isDarkMode: boolean, _version: number[]) => ({
    //     type: "Datasource",
    //     property: values.myDataSource, // pass the datasource property
    //     child: {
    //       type: "DropZone",
    //       property: values
    //     }
    //   })
// export function getCustomCaption(values: SystemPropertyPreviewProps, platform: Platform): string {
//     return "SystemProperty";
// }
