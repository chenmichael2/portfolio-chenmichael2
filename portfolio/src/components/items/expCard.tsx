
interface ExpCardProp {
    side?: string,

}
export default function ExpCard({side, }: ExpCardProp) {

    return (
        <div className="border-1 border-black rounded-sm">
            <h2>Title</h2>
        </div>
    );
}