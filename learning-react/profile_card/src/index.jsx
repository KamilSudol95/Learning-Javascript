import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


const skills = [
    {
        skill: "HTML+CSS",
        level: "intermediate",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "beginner",
        color: "#EFD81D"
    },
    {
        skill: "Python",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "beginner",
        color: "#60DAFB"
    },
    {
        skill: "Data Visualization",
        level: "advanced",
        color: "#FF3B00"
    }
];

import myAvatar from '/me.png';

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
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
            {skills.map((skill) => (
                <Skill skill={skill.skill} color={skill.color} level={skill.level} />
            ))}
        </div>
    )
}

function Skill({ skill, color, level }) {
    return (
        <div className="skill" style={{backgroundColor: color}} >
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
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
