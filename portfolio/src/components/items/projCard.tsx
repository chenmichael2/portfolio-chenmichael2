interface ProjCardProp {
    image?: string,
    title?: string, 
    description?: string,
    links?: object,
}

export default function ProjCard({ image, title, description, links}: ProjCardProp) {

    return (
        <div className="border-1 w-100 h-content">
            <p>{image}</p>
            <p>{title}</p>
            <p>{description}</p>
            {links && Object.entries(links).map(([key, value], index) => {
                return(
                    <p key={index}>{key}:{value}</p>
                )
            })}
        </div>
    );
}