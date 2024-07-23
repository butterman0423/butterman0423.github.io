type Options = {
    title: string,
    quip: string,
    onSeeMore?: () => void
}

export default function GlanceItem({
    title, quip, onSeeMore
}: Options) {
    return (
        <div className="col">
            <h2>{ title }</h2>
            <p>{ quip }</p>
            <a href="#work" className="btn btn-primary" onClick={ onSeeMore }>See More</a>
        </div>
    );
}