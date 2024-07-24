type Project = {
    title: string,
    month: string,
    year: string,
    quip: string,
    icon: string,
    school?: boolean,
}

type Options = {
    projects: Project[]
}

export default function Projects({
    projects
}: Options) {
    const items = projects
        .map(({ title, month, year, quip }) => {
            return (
                <div className="col-4 text-center">
                    <div className="bg-body-secondary border rounded h-100 p-4">
                        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                            <h3 className="mb-0 fw-bold">{ title }</h3>
                            <p className="mb-2 fs-5">{ month } '{ year }</p>
                            { quip.split('\n').map(v => <p className="m-0">{v}</p>) }
                        </div>
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