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
        fontWeight,
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
        fontWeight: fontWeight, // This should now be applied correctly
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
    lineHeight: 25,
    lineHeightUnit: "px",
    fontWeight: "400", // Default value should be numeric or keyword
    fontStyle: "normal",
    gap: 4,
    hasString: true,
    text: "Design Caffeine. All rights reserved",
    togglePosition: "R",
    yearOption: "single",
    startYear: 2000,
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
        defaultValue: "Design Caffeine. All rights reserved",
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
        defaultValue: 2000,
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
    fontWeight: {
        type: ControlType.Enum,
        title: "Font Weight",
        options: [
            "100",
            "200",
            "300",
            "400",
            "500",
            "600",
            "700",
            "800",
            "900",
        ],
        optionTitles: [
            "Thin (100)",
            "Extra Light (200)",
            "Light (300)",
            "Regular (400)",
            "Medium (500)",
            "SemiBold (600)",
            "Bold (700)",
            "Extra Bold (800)",
            "Black (900)",
        ],
        defaultValue: "400",
    },
    fontStyle: {
        type: ControlType.Enum,
        title: "Font Style",
        options: ["normal", "italic"],
        defaultValue: "normal",
    },
})
