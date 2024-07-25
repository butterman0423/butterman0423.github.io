export default function AboutMe() {
    const links = [
        { href: '/20240719_Resume.docx.pdf', icon: 'bi bi-filetype-pdf', type: 'danger' },
        { href: 'https://www.linkedin.com/in/nathaniel-andre-escaro-745099251', icon: 'bi bi-linkedin', type: 'primary' },
        { href: 'https://github.com/butterman0423', icon: 'bi bi-github', type: 'secondary' },
        { href: 'https://butterman423.itch.io/', icon: 'bi bi-controller', type: 'success' }
    ]
    .map(({ href, icon, type }, idx) => {
        return (
            <div key={idx} className="col">
                <a className={`btn btn-outline-${type}`} href={href}>
                    <i className={icon}></i>
                </a>
            </div>
        );
    })

    return (
        <div className="position-relative container h-100">
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="text-center display-1">Nathaniel Escaro</h1>
                <hr />
                <div className="row row-cols-auto gx-2 justify-content-center">
                    { links }
                </div>
            </div>
        </div>
    );
}