export default function AboutMe() {
    const links = [
        { href: '/20240719_Resume.docx.pdf', text: 'Resume' },
        { href: 'https://www.linkedin.com/in/nathaniel-andre-escaro-745099251', text: 'Linkdin' },
        { href: 'https://github.com/butterman0423', text: 'Github' },
        { href: 'https://butterman423.itch.io/', text: 'itch.io'}
    ]
    .map(({ href, text }) => {
        return (
            <div className="col">
                <a className="btn btn-outline-secondary" href={href}>{ text }</a>
            </div>
        );
    })

    return (
        <div className="container">
            <h1 className="text-center text-decoration-underline">Nathaniel Escaro</h1>
            <div className="row row-cols-auto gx-2 justify-content-center">
                { links }
            </div>
        </div>
    );
}