export default function Home() {
    return (
        <main>
            <div style={{backgroundColor: "red"}}>
                <div className="container">
                    <h1>Welcome</h1>
                    <p>I'm Nathaniel Escaro</p>
                    <p>
                        An aspiring software developer passionate about 
                        developing applications for use and enjoyment.
                    </p>
                    <a href="/about">More About Me</a>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <h1>At a Glance</h1>
                    <div className="col">
                        <h2>Inventory Buy/Sell Web App</h2>
                        <p>Record, Edit, and Track your Transactions in a Neat Spreadsheet.</p>
                        <a href="#work" className="btn btn-primary">See More</a>
                    </div>
                    <div className="col">
                        <h2>Latex Viewer Obsidian Plugin</h2>
                        <p>View Rendered LaTeX as you write in Obsidian.</p>
                        <a href="#work" className="btn btn-primary">See More</a>
                    </div>
                    <div className="col">
                        <h2>Game Projects</h2>
                        <p>A Catalog of all my Released Games developed in Godot.</p>
                        <a href="#work" className="btn btn-primary">See More</a>
                    </div>
                </div>

                <h1 id="work">All My Work</h1>
                <div>Here is where the timeline would be. Pull from resume</div>
            </div>
        </main>
    );
}