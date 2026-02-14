import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


import myAvatar from '/me.png';

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <div>
            <img src={myAvatar} className="avatar" alt="Kamil Sudoł"></img>
        </div>
    );
}

function Intro() {
    return (
        <div>
            <h1>Kamil Sudoł</h1>
            <p className="data">Data Analyst & Data Engineer in progress.
                I help turn raw data into clear insights and better decisions.
                When I'm not building dashboards or optimizing SQL queries,
                I'm designing ETL pipelines, exploring datasets, or automating workflows
                with Python.
            </p>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            <Skill skill="JavaScript" emoji="👦" color='blue' />
            <Skill skill="Python" emoji="💪" color='yellow' />
            <Skill skill="HTML + CSS" emoji="👍" color='khaki' />
            <Skill skill="Git and GitHub" emoji="👍" color='orangered' />
            <Skill skill="React" emoji="👦" color='cyan' />
            <Skill skill="Data Visualization" emoji="💪" color='red' />
        </div>
    )
}

function Skill(props) {
    return (
        <div className="skill" style={{backgroundColor: props.color}} >
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
