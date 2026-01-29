import LinkIcon from '../../../public/icons/link';
import GitIcon from '../../../public/icons/github-icon';

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
                <img src={`/images/projects/` + image} className="rounded-lg w-[100%]"/>
                <div className="mt-4">
                    <h2 className="text-xl">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='flex gap-3'>
                {links && Object.entries(links).map(([key, value], index) => {
                    const renderContent = () => {
                        if (key === "link") return <LinkIcon />;
                        if (key === "github") return <GitIcon />;
                        
                    }
                        return(
                            <button key={index} className='p-0.5 scale-125 hover:scale-150 transition-all duration-300'>
                                {renderContent()}
                            </button>
                        )
                })}
            </div>
        </div>
    );
}