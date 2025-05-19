import { useState } from "react";

export default function BurgerIcon() {
    const [hover, setHover] = useState(false);

    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 20H24V22C24 23.1046 23.1046 24 22 24H8C6.89543 24 6 23.1046 6 22V20Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 6C10.0294 6 6 8.55837 6 11.7143V14H24V11.7143C24 8.55837 19.9706 6 15 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 17.5C7 16.1192 8.34315 15 10 15H20C21.6569 15 23 16.1192 23 17.5C23 18.8807 21.6569 20 20 20H10C8.34315 20 7 18.8807 7 17.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}