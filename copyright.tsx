import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

const currentYear = new Date().getFullYear();

/**
 * Component override for displaying copyright information with customizable text and options.
 * *from veeuix*
 * [License](https://www.twitter.com/veeuix)
 * 
 * @param {Object} props - Component props.
 * @param {string} props.color - Text color.
 * @param {Object} props.font - Font settings.
 * @param {number} props.gap - Gap between elements.
 * @param {boolean} props.hasString - Whether to show additional text.
 * @param {string} props.text - Additional text to display.
 * @param {string} props.togglePosition - Position of additional text ('L' for left, 'R' for right).
 * @param {string} props.yearOption - Year display option ('single' or 'range').
 * @param {number} props.startYear - Starting year for range display.
 */
export function Copyright(props) {
    const {
        color,
        font,
        gap,
        hasString,
        text,
        togglePosition,
        yearOption,
        startYear,
    } = props;

    const yearDisplay =
        yearOption === "single" ? currentYear : `${startYear}–${currentYear}`;

    const containerStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        margin: "0",
        justifyContent: togglePosition === "L" ? "flex-start" : "flex-end",
        color: color,
        fontFamily: font.fontFamily,
        fontSize: `${font.fontSize}px`, // Ensure font size is in pixels
        fontWeight: font.fontWeight,
        lineHeight: `${font.lineHeight}px`, // Ensure line height is in pixels
        letterSpacing: font.letterSpacing,
        userSelect: "none",
        gap: hasString ? gap : 0,
        whiteSpace: "nowrap",
    };

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
    );
}

Copyright.defaultProps = {
    color: "#fff",
    font: {
        fontFamily: "Manrope",
        fontSize: 24,
        fontWeight: "normal",
        lineHeight: 1.2,
        letterSpacing: 0,
    },
    gap: 4,
    hasString: true,
    text: "All rights reserved.",
    togglePosition: "L",
    yearOption: "single",
    startYear: 2018,
};

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
    font: {
        type: ControlType.Font,
        title: "Font",
        defaultValue: {
            fontFamily: "Manrope",
            fontSize: 24,
            fontWeight: "normal",
            lineHeight: 1.2,
            letterSpacing: 0,
        },
        controls: "extended",
        displayTextAlignment: false,
    },
});
