'use client'
import { useState } from "react";

interface DotProps {
    outside?: string;
    inside?: string;
    percent?: string;
    section?: boolean;
}

export default function Dot({outside, inside, percent, section}: DotProps) {
    
    if (section) {

    }
    return (
        <svg className={`z-50 absolute transition-all duration-300`} style={{top: `${percent}rem`, marginTop: '8rem'}} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill={`${outside ? outside : "#0000FF"}`}/>
            <circle cx="5" cy="5" r="3" fill="oklch(98.5% .002 247.839)"/>
        </svg>
    )
}