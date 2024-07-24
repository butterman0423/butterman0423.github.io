type Options = {
    title: string,
    quip: string,
    link: string,
    onSeeMore?: () => void
}

export default function GlanceItem({
    title, quip, link, onSeeMore
}: Options) {
    return (
        <div className="col">
            <h2>{ title }</h2>
            <p>{ quip }</p>
            <a href={link} className="btn btn-primary" onClick={ onSeeMore }>See More</a>
        </div>
    );
}