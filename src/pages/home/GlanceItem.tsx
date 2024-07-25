type Options = {
    title: string,
    quip: string,
    link: string,
    img: string,
}

export default function GlanceItem({
    title, quip, link, img
}: Options) {
    const imgStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover"
    }

    return (
        <div className="col">
            <div className="h-100 border border-dark-subtle rounded-4" style={imgStyle}>
                <a href={link} className="h-100 w-100 btn btn-outline-primary border-0">
                    <div className="h-100 d-flex flex-column justify-content-center clear-text text-center">
                        <h2 className="fw-bolder fs-1 stroke">{ title }</h2>
                        <p className="fs-5">{ quip }</p>
                    </div>
                </a>
            </div>
        </div>
    );
}