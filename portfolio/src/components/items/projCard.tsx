interface ProjCardProp {
    image?: string,
    title?: string, 
    description?: string,
    links?: object,
}

export default function ProjCard({ image, title, description, links}: ProjCardProp) {

    return (
        <div className="border-1 border-[#ccc] w-[100%] p-4 rounded-xl shadow-xl">
            <img src={`/images/projects/` + image} className="rounded-lg"/>
            <div className="mt-4">
                <h2 className="text-lg">{title}</h2>
                <p>{description}</p>
                {links && Object.entries(links).map(([key, value], index) => {
                    return(
                        <p key={index}>{key}:{value}</p>
                    )
                })}
            </div>
        </div>
    );
}