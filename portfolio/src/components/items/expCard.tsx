
interface ExpCardProp {
    title?: string;
    dates?: string;
    jobTitle?: string;
    description?: string;
    top?: number | string;
    logo?: string;
}

export default function ExpCard({ title, dates, jobTitle, description, top, logo }: ExpCardProp) {
    const marginTop = top === undefined ? undefined : (typeof top === 'number' ? `${top}rem` : top);

    return (
        <div
            style={{ marginTop }}
            className="self-start border-1 border-[#ccc] bg-white rounded-md shadow-sm p-2 pt-4 px-4 bg-neutral-primary-soft transition-all duration-300"
        >
            <img src={`images/experience/${logo}`} alt={`${title} logo`} className="w-15 h-15 mb-2 shadow-lg rounded-md"/>
            <h2 className="text-lg/5 font-medium">{title}</h2>
            <p className="text-gray-700">{dates}</p>
            <h3>{jobTitle}</h3>
            <p>{description}</p>
        </div>
    );
}