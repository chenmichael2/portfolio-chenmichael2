
interface ExpCardProp {
    id?: any;
    title?: string;
    dates?: string;
    jobTitle?: string;
    top?: number | string;
    height?: number;
    logo?: string;
}

export default function ExpCard({ id, title, jobTitle, top, logo, height }: ExpCardProp) {
    const marginTop = top === undefined ? undefined : (typeof top === 'number' ? `${top}rem` : top);

    return (
        <div
            style={{ marginTop }}
            id={`${id}`}
            className="exp-card self-start border-1 border-[#ccc] bg-white rounded-md shadow-sm p-4 bg-neutral-primary-soft transition-all duration-300"
        >
            <img src={`images/experience/${logo}`} alt={`${title} logo`} className="w-15 h-15 mb-4 shadow-lg rounded-md"/>
            <h2 className="text-xl/6 font-medium">{title}</h2>
            <h3 className="text-gray-700 leading-4.5">{jobTitle}</h3>
        </div>
    );
}