/**
 * Component override for displaying copyright information with customizable text and options.
 * *from veeuix*
 * [License](https://www.twitter.com/veeuix)
 */


import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

const currentYear = new Date().getFullYear()

export function Copyright(props) {
    const {
        color,
        fontFamily,
        fontSize,
        fontSizeUnit,
        lineHeight,
        lineHeightUnit,
        fontWeightStyle,
        fontStyle,
        gap,
        hasString,
        text,
        togglePosition,
        yearOption,
        startYear,
    } = props

    const yearDisplay =
        yearOption === "single" ? currentYear : `${startYear}–${currentYear}`

    const containerStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        margin: "0",
        justifyContent: togglePosition === "L" ? "flex-start" : "flex-end",
        color: color,
        fontFamily: fontFamily,
        fontSize: `${fontSize}${fontSizeUnit}`,
        lineHeight: `${lineHeight}${lineHeightUnit}`,
        fontWeight: fontWeightStyle.includes("italic")
            ? "normal"
            : fontWeightStyle,
        fontStyle: fontStyle,
        userSelect: "none",
        gap: hasString ? gap : 0,
        whiteSpace: "nowrap",
    }

    return (
        <div style={containerStyle}>
            {togglePosition === "L" && hasString && (
                <p key="left" style={{ margin: "0" }}>
                    {text}
                </p>
            )}
            <p
                key="year"
                style={{ margin: "0", gap: 0 }}
            >{`\xa9 ${yearDisplay}`}</p>
            {togglePosition === "R" && hasString && (
                <p key="right" style={{ margin: "0" }}>
                    {text}
                </p>
            )}
        </div>
    )
}

Copyright.defaultProps = {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: 16,
    fontSizeUnit: "px",
    lineHeight: 20,
    lineHeightUnit: "px",
    fontWeightStyle: "normal",
    fontStyle: "normal",
    gap: 4,
    hasString: true,
    text: "All rights reserved.",
    togglePosition: "L",
    yearOption: "single",
    startYear: 2018,
}

addPropertyControls(Copyright, {
    hasString: {
        type: ControlType.Boolean,
        title: "Show text",
        defaultValue: true,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    text: {
        type: ControlType.String,
        title: "↳ Text",
        defaultValue: "All rights reserved.",
        hidden: (props) => !props.hasString,
    },
    togglePosition: {
        type: ControlType.SegmentedEnum,
        title: "↳ Position",
        defaultValue: "L",
        options: ["L", "R"],
        optionTitles: ["Left", "Right"],
        hidden: (props) => !props.hasString,
    },
    gap: {
        type: ControlType.Number,
        title: "↳ Gap",
        defaultValue: 4,
        min: 0,
        max: 100,
        step: 1,
        unit: "px",
        hidden: (props) => !props.hasString,
    },
    yearOption: {
        type: ControlType.SegmentedEnum,
        title: "Year option",
        defaultValue: "single",
        options: ["single", "range"],
        optionTitles: ["Single", "Range"],
    },
    startYear: {
        type: ControlType.Number,
        title: "Start year",
        defaultValue: 2018,
        min: 1900,
        max: currentYear,
        step: 1,
        hidden: (props) => props.yearOption !== "range",
    },
    color: {
        type: ControlType.Color,
        title: "Color",
        defaultValue: "#fff",
    },
    fontFamily: {
        type: ControlType.String,
        title: "Font Family",
        defaultValue: "Inter",
    },
    fontSize: {
        type: ControlType.Number,
        title: "Font Size",
        defaultValue: 16,
        min: 1,
        step: 1,
    },
    fontSizeUnit: {
        type: ControlType.Enum,
        title: "Font Size Unit",
        options: ["px", "em"],
        defaultValue: "px",
        displaySegmentedControl: true,
    },
    lineHeight: {
        type: ControlType.Number,
        title: "Line Height",
        defaultValue: 24,
        min: 1,
        step: 1,
    },
    lineHeightUnit: {
        type: ControlType.Enum,
        title: "Line Height Unit",
        options: ["px", "em", "%"],
        defaultValue: "px",
        displaySegmentedControl: true,
    },
    fontWeightStyle: {
        type: ControlType.Enum,
        title: "Font Weight & Style",
        options: [
            "Thin",
            "Extra Light",
            "Light",
            "Regular",
            "Medium",
            "SemiBold",
            "Bold",
            "Extra Bold",
            "Black",
            "Thin Italic",
            "Extra Light Italic",
            "Light Italic",
            "Italic",
            "Medium Italic",
            "Semi Bold Italic",
            "Bold Italic",
            "Extra Bold Italic",
            "Black Italic",
        ],
        defaultValue: "Regular",
    },
})
