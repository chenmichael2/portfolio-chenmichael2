import Link from 'next/link';
import LinkIcon from '../../../public/icons/link';

interface ProjCardProp {
    image?: string,
    title?: string, 
    description?: string,
    links?: object,
}

export default function ProjCard({ image, title, description, links}: ProjCardProp) {
    return (
        <div className="border-1 border-[#ccc] w-[100%] p-4 h-100 rounded-xl shadow-xl flex flex-col justify-between">
            <div>
                <img src={`/images/projects/` + image} className="rounded-lg"/>
                <div className="mt-4">
                    <h2 className="text-xl">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                {links && Object.entries(links).map(([key, value], index) => {
                    if (key === "link") {
                        return (
                            <button key={index}>

                                <LinkIcon />
                            </button>
                        )
                    } else {
                        return(
                            <button key={index}>{key}:{value}</button>
                        )
                    }
                })}
            </div>
        </div>
    );
}