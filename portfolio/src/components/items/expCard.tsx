
interface ExpCardProp {
    side?: string,
    title?: string, 


}
export default function ExpCard({side, }: ExpCardProp) {

    return (
        <div className="border-1 border-black rounded-sm p-2 px-4">
            <h2>Title</h2>
        </div>
    );
}