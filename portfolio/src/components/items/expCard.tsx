
interface ExpCardProp {
    title?: string, 
    dates?: string,
    jobTitle?: string, 
    description?: string, 
}
export default function ExpCard({title, dates, jobTitle, description}: ExpCardProp) {

    return (
        <div className="border-1 border-black rounded-sm p-2 px-4">
            <h2>{title}</h2>
            <p>{dates}</p>
            <h3>{jobTitle}</h3>
            <p>{description}</p>
        </div>
    );
}