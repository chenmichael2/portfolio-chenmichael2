
interface ExpCardProp {
    side?: string,
    title?: string, 
    dates?: string,
    jobTitle?: string, 
    description?: string, 

}
export default function ExpCard({side, title, dates}: ExpCardProp) {

    return (
        <div className="border-1 border-black rounded-sm p-2 px-4">
            <h2>{title}</h2>
            <p>{dates}</p>
        </div>
    );
}