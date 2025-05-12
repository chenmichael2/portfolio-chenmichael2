'use client'
import { useState } from 'react';
import type { IconProps } from '../../type/icon';

export default function EmailIcon({ icon }: IconProps) {
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
                <path d="M16.6667 3.33331H3.33335C2.41288 3.33331 1.66669 4.07951 1.66669 4.99998V15C1.66669 15.9205 2.41288 16.6666 3.33335 16.6666H16.6667C17.5872 16.6666 18.3334 15.9205 18.3334 15V4.99998C18.3334 4.07951 17.5872 3.33331 16.6667 3.33331Z" fill={`${iconColor}`} stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.3334 5.83331L10.8584 10.5833C10.6011 10.7445 10.3036 10.83 10 10.83C9.69642 10.83 9.39896 10.7445 9.14169 10.5833L1.66669 5.83331" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
    )
}