import Link from 'next/link';
import LinkIcon from '../../../public/icons/link';
import GithubIcon from '../../../public/icons/github';

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
                    const renderContent = () => {
                        if (key === "link") return <LinkIcon />;
                        if (key === "github") return <GithubIcon icon={{
                            name: '',
                            color: '',
                            href: 'github.com',
                            import: GithubIcon
                        }} />;
                        
                    }
                        return(
                            <button key={index}>
                                {key}:{value}
                            </button>
                        )
                })}
            </div>
        </div>
    );
}