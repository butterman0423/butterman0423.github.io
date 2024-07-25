type Options = {
    title: string,
    quip: string,
    link: string,
    img: string,
    onSeeMore?: () => void
}

export default function GlanceItem({
    title, quip, link, img, onSeeMore
}: Options) {
    return (
        <div className="col">
            <div className="h-100 pt-5 border border-dark-subtle rounded-4" style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
            }}>
                <div style={{ filter: "none" }}>
                    <h2 className="text-center">{ title }</h2>
                    <div className="d-flex flex-column justify-content-center">
                        <p className="text-center">{ quip }</p>
                        <a href={link} className="btn btn-primary align-self-center" onClick={ onSeeMore }>See More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}