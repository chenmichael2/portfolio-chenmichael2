import { useState } from "react";
import { motion as m } from "motion/react"

export default function BurgerIcon() {
    const closeHam = {
        top: "M6 20H24V22C24 23.1046 23.1046 24 22 24H8C6.89543 24 6 23.1046 6 22V20Z",
        middle: "M15 6C10.0294 6 6 8.55837 6 11.7143V14H24V11.7143C24 8.55837 19.9706 6 15 6Z",
        bottom: "M7 17.5C7 16.1192 8.34315 15 10 15H20C21.6569 15 23 16.1192 23 17.5C23 18.8807 21.6569 20 20 20H10C8.34315 20 7 18.8807 7 17.5Z",
    };
    const xHam = {
        top: "M8.70709 8L21.435 20.7279L21.0815 21.0815C20.8862 21.2767 20.0948 20.8019 19.3137 20.0208L9.4142 10.1213C8.63315 9.34027 8.15827 8.54882 8.35354 8.35355L8.70709 8Z",
        middle: "M14.364 14.3639C10.8492 17.8787 8.22613 20.954 8.50508 21.233L8.70711 21.435L21.435 8.70709L21.233 8.50506C20.9541 8.22611 17.8787 10.8492 14.364 14.3639Z",
        bottom: "M14 15.5C14 15.2238 14 15 14 15V15C14 15 14 15.2238 14 15.5C14 15.7762 14 16 14 16V16C14 16 14 15.7762 14 15.5Z",
    }
    const [handleHam, setHandleHam] = useState('close');

    return (
        <button onClick={() => {setHandleHam(handleHam === 'close' ? 'open' : 'close')}} className="">
            <m.svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <m.path animate={handleHam === 'open' ? {d: xHam.top} : {d: closeHam.top}} d={closeHam.top} stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <m.path animate={handleHam === 'open' ? {d: xHam.middle} : {d: closeHam.middle}} d={closeHam.middle} stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <m.path animate={handleHam === 'open' ? {d: xHam.bottom} : {d: closeHam.bottom}} d={closeHam.bottom} stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </m.svg>
        </button>
    )
}