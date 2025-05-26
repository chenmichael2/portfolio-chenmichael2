'use client'
import { useState } from 'react';
import type { IconProps } from '../../type/icon';

export default function GithubIcon({ icon }: IconProps) {
    const [hover, setHover] = useState(false);
    const iconColor = hover ? icon.color : "transparent";

    return (
        <a 
            href={icon.href}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} 
            target="_blank" 
            className={`flex items-center justify-center w-[40px] h-[40px] border border-transparent rounded-full hover:border-black hover:border-1 hover:scale-120 transition-all duration-300`}
        >
            <svg className="navIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 18.3334V15C12.6159 13.9561 12.3166 12.9085 11.6667 12.0834C14.1667 12.0834 16.6667 10.4167 16.6667 7.50002C16.7333 6.45835 16.4417 5.43335 15.8333 4.58335C16.0667 3.62502 16.0667 2.62502 15.8333 1.66669C15.8333 1.66669 15 1.66669 13.3333 2.91669C11.1333 2.50002 8.86666 2.50002 6.66666 2.91669C4.99999 1.66669 4.16666 1.66669 4.16666 1.66669C3.91666 2.62502 3.91666 3.62502 4.16666 4.58335C3.55988 5.42992 3.26538 6.46068 3.33332 7.50002C3.33332 10.4167 5.83332 12.0834 8.33332 12.0834C8.00832 12.4917 7.76666 12.9584 7.62499 13.4584C7.48332 13.9584 7.44166 14.4834 7.49999 15V18.3334" fill={`${iconColor}`}/>
                <path d="M12.5 18.3334V15C12.6159 13.9561 12.3166 12.9085 11.6667 12.0834C14.1667 12.0834 16.6667 10.4167 16.6667 7.50002C16.7333 6.45835 16.4417 5.43335 15.8333 4.58335C16.0667 3.62502 16.0667 2.62502 15.8333 1.66669C15.8333 1.66669 15 1.66669 13.3333 2.91669C11.1333 2.50002 8.86666 2.50002 6.66666 2.91669C4.99999 1.66669 4.16666 1.66669 4.16666 1.66669C3.91666 2.62502 3.91666 3.62502 4.16666 4.58335C3.55988 5.42992 3.26538 6.46068 3.33332 7.50002C3.33332 10.4167 5.83332 12.0834 8.33332 12.0834C8.00832 12.4917 7.76666 12.9584 7.62499 13.4584C7.48332 13.9584 7.44166 14.4834 7.49999 15V18.3334" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.49996 15C3.74163 16.6666 3.33329 13.3333 1.66663 13.3333" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
    )
}