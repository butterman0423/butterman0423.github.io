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
            <h2 className="text-center">{ title }</h2>
            <div className="d-flex flex-column justify-content-center">
                <p className="text-center">{ quip }</p>
                <a href={link} className="btn btn-primary align-self-center" onClick={ onSeeMore }>See More</a>
            </div>
        </div>
    );
}