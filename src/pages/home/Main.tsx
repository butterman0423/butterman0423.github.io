import AboutMe from "./AboutMe";
import GlanceItem from "./GlanceItem";
import Projects from "./Projects";

import projectArr from '../../projects.json'

export default function Home() {
    return (
        <main>
            <div className="bg-body-secondary">
                <AboutMe/>
            </div>

            <div className="container-fluid">
                <p className="text-center fs-2">
                    I'm an aspiring software developer passionate about 
                    developing applications for use and enjoyment.
                </p>
                <div className="row mx-5">
                    <GlanceItem 
                        title="Inventory Buy/Sell Web App"
                        quip="Record, Edit, and Track your Transactions in a Neat Spreadsheet."
                        link="https://github.com/butterman0423/catalog-webapp" />
                    <GlanceItem
                        title="Latex Viewer Obsidian Plugin"
                        quip="View Rendered LaTeX as you type in Obsidian."
                        link="https://github.com/butterman0423/latex-viewer" />
                    <GlanceItem
                        title="Game Projects"
                        quip="A Catalog of all my Released Games developed in Godot."
                        link="https://butterman423.itch.io/" />
                </div>

                <div className="container">
                    <Projects projects={projectArr} />
                </div>
            </div>
        </main>
    );
}