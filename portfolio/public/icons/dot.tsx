'use client'
import { useState } from 'react';


export default function Dot() {

    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#0000FF"/>
            <circle cx="5" cy="5" r="3" fill="oklch(98.5% .002 247.839)"/>
        </svg>
    )
}