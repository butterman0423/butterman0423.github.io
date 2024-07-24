import GlanceItem from "./GlanceItem";

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
                <h1>At a Glance</h1>
                <div className="row">
                    <GlanceItem 
                        title="Inventory Buy/Sell Web App"
                        quip="Record, Edit, and Track your Transactions in a Neat Spreadsheet." />
                    <GlanceItem
                        title="Latex Viewer Obsidian Plugin"
                        quip="View Rendered LaTeX as you type in Obsidian." />
                    <GlanceItem
                        title="Game Projects"
                        quip="A Catalog of all my Released Games developed in Godot." />
                </div>

                <h1 id="work">All My Work</h1>
                <div>Here is where the timeline would be. Pull from resume</div>
            </div>
        </main>
    );
}