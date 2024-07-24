type Project = {
    title: string,
    month: string,
    year: string,
    quip: string,
    icon: string,
    school?: boolean,
    link?: string,
}

type Options = {
    projects: Project[]
}

export default function Projects({
    projects
}: Options) {
    const items = projects
        .map(({ title, month, year, quip, link }) => {
            return (
                <div className="col-4 text-center">
                    <div className="bg-body-secondary border rounded h-100">
                        <a href={link} 
                            className="btn btn-outline-primary border-0 w-100 h-100 p-4"
                            style={{cursor: link ? "pointer" : "default"}}>
                            <div className="h-100 clear-text d-flex flex-column align-items-center justify-content-center">
                                <h3 className="mb-0 fw-bold">{ title }</h3>
                                <p className="mb-2 fs-5">{ month } '{ year }</p>
                                { quip.split('\n').map(v => <p className="m-0">{v}</p>) }
                            </div>
                        </a>
                    </div>
                </div>
            );
        })

    return (
        <div className="row g-3">
            { items }
        </div>
    );
}