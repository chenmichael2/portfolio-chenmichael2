
interface ExpCardProp {
    title?: string, 
    dates?: string,
    jobTitle?: string, 
    description?: string, 
}
export default function ExpCard({title, dates, jobTitle, description}: ExpCardProp) {

    return (
        <div className="border-1 border-[#ccc] rounded-md shadow-xs p-2 px-4 bg-neutral-primary-soft">
            <h2>{title}</h2>
            <p>{dates}</p>
            <h3>{jobTitle}</h3>
            <p>{description}</p>
        </div>
    );
}