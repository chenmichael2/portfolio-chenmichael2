'use client'

interface DotProps {
    outside?: string;
    inside?: string;
    percent?: string;
}

export default function Dot({outside, inside, percent, }: DotProps) {
    return (
        <svg className={`z-50 absolute bottom-${percent}`} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill={`${outside ? outside : "#0000FF"}`}/>
            <circle cx="5" cy="5" r="3" fill="oklch(98.5% .002 247.839)"/>
        </svg>
    )
}