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
                    <div className="bg-body-secondary h-100 d-flex flex-column align-items-center justify-content-center">
                        <h3>{ title }</h3>
                        <p>{ month } '{ year }</p>
                        <p>{ quip }</p>
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