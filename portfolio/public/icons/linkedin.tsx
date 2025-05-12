'use client'
import { useState } from 'react';
import type { IconProps } from '../../type/icon';

export default function LinkedinIcon({ icon }: IconProps) {
    const [hover, setHover] = useState(false);
    const iconColor = hover ? icon.color : "transparent";

    return (
        <a 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)} 
        target="_blank" 
        className={`flex items-center justify-center w-[40px] h-[40px] p-2 m-2 border border-transparent rounded-full hover:border-black hover:border-1 hover:scale-110 transition-all duration-300`}
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 6.66669C14.6594 6.66669 15.9312 7.19347 16.8688 8.13115C17.8065 9.06884 18.3333 10.3406 18.3333 11.6667V17.5H15V11.6667C15 11.2247 14.8244 10.8007 14.5118 10.4882C14.1993 10.1756 13.7753 10 13.3333 10C12.8913 10 12.4674 10.1756 12.1548 10.4882C11.8422 10.8007 11.6666 11.2247 11.6666 11.6667V17.5H8.33331V11.6667C8.33331 10.3406 8.8601 9.06884 9.79778 8.13115C10.7355 7.19347 12.0072 6.66669 13.3333 6.66669Z" fill={`${iconColor}`} stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.00002 7.5H1.66669V17.5H5.00002V7.5Z" fill={`${iconColor}`} stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.33335 5.00002C4.25383 5.00002 5.00002 4.25383 5.00002 3.33335C5.00002 2.41288 4.25383 1.66669 3.33335 1.66669C2.41288 1.66669 1.66669 2.41288 1.66669 3.33335C1.66669 4.25383 2.41288 5.00002 3.33335 5.00002Z" fill={`${iconColor}`} stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
    )
}