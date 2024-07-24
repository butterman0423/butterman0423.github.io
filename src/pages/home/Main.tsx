import AboutMe from "./AboutMe";
import GlanceItem from "./GlanceItem";

export default function Home() {
    return (
        <main>
            <div className="bg-body-secondary">
                <AboutMe/>
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